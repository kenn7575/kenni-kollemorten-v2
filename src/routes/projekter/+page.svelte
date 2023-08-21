<script lang="ts">
	import LazyImg from '$lib/components/LazyImg.svelte';
	import masking from '$lib/img/mask.png';
	import { projectsStore } from '$lib/stores/projects';

	let data = $projectsStore;
</script>

<svelte:head>
	<title>Projekter</title>
	<meta name="description" content="personal portfolio website" />
</svelte:head>
<div>
	{#if data}
		{#each data.reverse() as project, index}
			<div class="card snap-center bg-neutral w-96 text-neutral-content shadow-xl">
				<div class="rounded-t-xl overflow-hidden">
					<LazyImg alt={project.title} image={project.image} imageSmall={project.imageSmall} />
				</div>

				<div class="card-body">
					<h2 class="card-title">
						{project.title}
						{#if index === 0}
							<div class="badge badge-secondary">New</div>
						{/if}
					</h2>
					<p>{project.description}</p>
					<div class="card-actions w-full items-end justify-between pt-8">
						{#if project.clips}
							<div class="flex justify-start w-1/2 flex-wrap gap-1">
								{#each project.clips as clip}
									<div class="badge badge-ghost badge-outline">{clip}</div>
								{/each}
							</div>
						{/if}
						<a href="/projekter/{project.id}" class="btn btn-primary">Se mere</a>
					</div>
				</div>
			</div>

			<div class="flex min-h-screen w-full">
				<div class="flex flex-col flex-grow">
					<h1>hello</h1>
					<p>world</p>
				</div>

				<div class=" overflow-hidden w-1/2">
					<LazyImg
						alt={project.title}
						image={project.image}
						imageSmall={project.imageSmall}
						aspectRatio="aspect-square"
					/>
				</div>
			</div>
		{/each}
	{/if}
</div>
