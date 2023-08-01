<script lang="ts">
	import LazyImg from '$lib/components/LazyImg.svelte';
	import { createLoadObserver } from '$lib/functions/createLoadObserver';
	import { projectsStore } from '$lib/stores/projects';

	let data = $projectsStore;
	// create a list new of isLoaded booleans for each project
</script>

<h1 class="text-3xl font-semibold">Projekter</h1>
<div class="flex gap-16 p-4">
	{#if data}
		{#each data.reverse() as project, index}
			<div class="card bg-neutral w-96 text-neutral-content shadow-xl">
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
		{/each}
	{/if}
</div>
