<script lang="ts">
	import type { IProject } from '$lib/types/interfaces';
	export let data: IProject[];
	import LazyImg from '$lib/components/LazyImg.svelte';
</script>

<div class="py-16 px-2 sm:px-8">
	<h1 class="text-3xl font-semibold text-center">Seneste projekter</h1>
	<div class="flex gap-4">
		{#each data.length > 5 ? data.slice(0, 5) : data as project}
			<div class="card bg-accent w-96 text-secondary-content shadow-xl">
				<div class="rounded-t-xl overflow-hidden">
					<LazyImg alt={project.title} image={project.image} imageSmall={project.imageSmall} />
				</div>
				<div class="card-body">
					<h2 class="card-title">{project.title}</h2>
					<p>{project.subtitle}</p>
					<div class="card-actions justify-end">
						<div class="badge">{project.decription}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
