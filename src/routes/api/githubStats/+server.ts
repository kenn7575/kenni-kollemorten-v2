import { json, type RequestHandler } from '@sveltejs/kit';

const fetchGithubData = async (token: string) => {
	const query = `
		query {
			viewer {
				contributionsCollection {
					totalCommitContributions
				}
				repositories(first: 100) {
					nodes {
						name
						isPrivate
						owner {
							login
						}
						languages(first: 100) {
							edges {
								size
								node {
									name
								}
							}
						}
					}
				}
			}
		}
	`;

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ query })
	});

	const result = await response.json();

	if (result.errors) {
		throw new Error(result.errors.map((err: any) => err.message).join(', '));
	}

	return result.data.viewer;
};

export const GET: RequestHandler = async () => {
	console.time('Time v2');
	const token = process.env.GITHUB_TOKEN;
	if (!token) throw Error('No github token found!');
	const userName = 'kenn7575';

	try {
		const data = await fetchGithubData(token);

		let totalLines = 0;
		let totalPublicLines = 0;
		let totalRepos: any[] = [];
		const languageLines: { [key: string]: number } = {};

		data.repositories.nodes.forEach((repo: any) => {
			let repoTotalLines = 0;

			if (repo.owner.login !== userName) return;

			repo.languages.edges.forEach((language: any) => {
				const { name } = language.node;
				const { size } = language;

				if (languageLines[name]) {
					languageLines[name] += size;
				} else {
					languageLines[name] = size;
				}
				repoTotalLines += size;
			});
			totalRepos.push({ name: repo.name, repoTotalLines, public: !repo.isPrivate });

			totalLines += repoTotalLines;
			if (!repo.isPrivate) {
				totalPublicLines += repoTotalLines;
			}
		});

		const sortedLanguages = Object.entries(languageLines)
			.sort((a, b) => b[1] - a[1])
			.map(([name, lines]) => ({ name, lines }));

		console.timeEnd('Time v2');

		return json({
			totalLines,
			totalPublicLines,
			sortedLanguages,
			repos: totalRepos
		});
	} catch (err: any) {
		return json({ error: err?.message }, { status: 500 });
	}
};
