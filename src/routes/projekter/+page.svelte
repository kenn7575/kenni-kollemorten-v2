<script lang="ts">
	import LazyImg from '#lib/components/LazyImg.svelte';
	import { user } from '#lib/functions/firebase.js';
	import IntersectionAnimation from '#lib/components/IntersectionAnimation.svelte';

	let { data: pageData } = $props();

	//sort projects by dateCreated
	const dataInput = $derived(
		[...pageData.projects].sort((a, b) => {
			const dateA = new Date(a.dateCreated);
			const dateB = new Date(b.dateCreated);
			return dateB.getTime() - dateA.getTime();
		})
	);

	let search = $state('');
	let appliedSearch = $state('');
	let loading = $state(false);
	const data = $derived(
		dataInput.filter((project) => {
			const query = appliedSearch.toLowerCase();
			return (
				project.title.toLowerCase().includes(query) ||
				project.label.toLowerCase().includes(query) ||
				project.description.toLowerCase().includes(query) ||
				project.clips.some((clip) => {
					return clip.toLowerCase().includes(query);
				})
			);
		})
	);
	function setSearch() {
		loading = true;
		appliedSearch = search;

		setTimeout(() => {
			loading = false;
		}, 500);
	}
</script>

<svelte:head>
	<title>Projekter - Portfolio website</title>
	<meta
		name="description"
		content="Explore my diverse portfolio showcasing innovative projects and creative solutions.  Elevate your digital experience with my unique perspective and expertise."
	/>
	<meta charset="utf-8" />
	<meta name="keywords" content="kenni, kollemorten, kenni kollemorten, portfolio, projekter" />
	<meta name="author" content="Kenni Kollemorten" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Projekter" />
</svelte:head>
<div class="py-4 px-2 flex justify-center w-full">
	<div class="relative w-full max-w-xl">
		<input
			id="search-bar"
			bind:value={search}
			type="text"
			oninput={() => {
				setSearch();
			}}
			onsubmit={() => {
				setSearch();
			}}
			placeholder="Leder du efter noget?"
			class="input w-full"
		/>
		{#if loading}
			<span class="loading loading-spinner loading-md absolute right-3 top-1/2 -translate-y-1/2"
			></span>
		{/if}
	</div>
</div>
<div class="flex flex-col items-center">
	{#if $user}
		<a href="/projekter/ny" class="btn btn-warning mt-16">Tilføj nyt projekt</a>
	{/if}
	{#key data}
		{#if data.length > 0}
			{#each data as project, index}
				<IntersectionAnimation>
					<article class="flex flex-col w-full px-4 sm:px-8 max-w-300 mt-16 mb-32">
						<p class="text-2xl font-bold">#{index + 1}</p>
						<h1 class="text-primary text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
							{project.title}
						</h1>
						<div class="divider text-base font-medium mb-0 mt-8">
							<span class="font-light">{project.label}</span>-
							<span>{project.dateCreated}</span>
						</div>
						<div
							class="flex flex-col-reverse mt-16 gap-y-16 gap-x-8
				lg:flex-row"
						>
							<div class="flex flex-col grow">
								<h2 class="text-3xl font-medium">{project.subtitle}</h2>
								<p class="max-w-128 mt-8 leading-loose text-base-content/80 font-light">
									{project.description}
								</p>
								<div class="flex flex-wrap gap-1 mt-4">
									{#each project.clips as clip}
										<div class="badge badge-ghost badge-outline">{clip}</div>
									{/each}
								</div>
								<a
									href="/projekter/{project.id}"
									class="btn btn-wide btn-outline btn-secondary mt-16">Se mere →</a
								>
							</div>
							<div class="w-full max-w-128 overflow-hidden">
								<LazyImg
									alt={project.title}
									image={project.image}
									aspectRatio="aspect-square"
									imageSmall={project.imageSmall}
								/>
							</div>
						</div>
					</article>
				</IntersectionAnimation>
			{/each}
		{:else}
			<div class="h-96 flex items-center justify-center flex-col">
				<div class="mockup-code">
					<pre class="bg-warning text-warning-content" data-prefix=">"><code>Fejl!</code></pre>
					<pre class="" data-prefix=""><code>Din søgning matchede </code></pre>
					<pre class="" data-prefix=""><code>ingen projekter </code></pre>
					<pre class="" data-prefix=""><code>Prøv at søge efter noget andet</code></pre>
				</div>
			</div>
		{/if}
	{/key}
</div>
