<script lang="ts">
	import LazyImg from '$lib/components/LazyImg.svelte';
	import { projectsStore } from '$lib/stores/projects';
	let dataInput = $projectsStore;
	import { user } from '$lib/firebase';
	import IntersectionAnimation from '$lib/components/IntersectionAnimation.svelte';

	//sort projects by dateCreated
	dataInput = dataInput.sort((a, b) => {
		const dateA = new Date(a.dateCreated);
		const dateB = new Date(b.dateCreated);
		return dateB.getTime() - dateA.getTime();
	});

	let search = '';
	let data = dataInput;
	let loading = false;
	function setSearch() {
		loading = true;
		data = dataInput.filter((project) => {
			return (
				project.title.toLowerCase().includes(search.toLowerCase()) ||
				project.label.toLowerCase().includes(search.toLowerCase()) ||
				project.description.toLowerCase().includes(search.toLowerCase()) ||
				project.clips.some((clip) => {
					return clip.toLowerCase().includes(search.toLowerCase());
				})
			);
		});

		setTimeout(() => {
			loading = false;
		}, 500);
	}
</script>

<svelte:head>
	<title>Projekter</title>
	<meta name="description" content="personal portfolio website" />
</svelte:head>
<div class="py-4 px-2 flex justify-center w-full">
	<div class="relative w-full max-w-xl">
		<input
			id="search-bar"
			bind:value={search}
			type="text"
			on:input={() => {
				setSearch();
			}}
			on:submit={() => {
				setSearch();
			}}
			placeholder="Leder du efter noget?"
			class="input input-bordered w-full"
		/>
		{#if loading}
			<span class="loading loading-spinner loading-md absolute right-3 top-1/2 -translate-y-1/2" />
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
							<div class="flex flex-col flex-grow">
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
