<script lang="ts">
	import LazyImg from '$lib/components/LazyImg.svelte';
	import { projectsStore } from '$lib/stores/projects';
	let data = $projectsStore;
	import { user } from '$lib/firebase';

	//sort projects by dateCreated
	data = data.sort((a, b) => {
		const dateA = new Date(a.dateCreated);
		const dateB = new Date(b.dateCreated);
		return dateB.getTime() - dateA.getTime();
	});
</script>

<svelte:head>
	<title>Projekter</title>
	<meta name="description" content="personal portfolio website" />
</svelte:head>
<div class="flex flex-col items-center">
	{#if $user}
		<a href="/projekter/ny" class="btn btn-warning mt-16">Tilføj nyt projekt</a>
	{/if}
	{#if data}
		{#each data as project, index}
			<article class="flex flex-col w-full px-4 sm:px-8 max-w-300 mt-16 mb-32">
				<p class="text-2xl font-bold">#{index + 1}</p>
				<h1 class="text-primary text-6xl lg:text-8xl font-bold">{project.title}</h1>
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
						<a href="/projekter/{project.id}" class="btn btn-wide btn-outline btn-secondary mt-16"
							>Se mere →</a
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
		{/each}
	{/if}
</div>
