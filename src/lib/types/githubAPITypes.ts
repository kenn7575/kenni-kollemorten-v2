// place files you want to import through the `$lib` alias in this folder.
export type Repo = {
	languages_url: string;
	owner: {
		login: string;
	};
	visibility: 'public' | 'private';
	name: string;
};

export type Languages = {
	[language: string]: number;
};

export type UserCredentials = {
	username: string;
	token: string;
};

export type Organization = {
	login: string;
};
export type githubStatData = {
	repos: {
		repoTotalLines: number;
		name: string;
		public: boolean;
	}[];
	sortedLanguages: {
		name: string;
		lines: number;
	}[];
	totalLines: number;
	totalPublicLines: number;
};
