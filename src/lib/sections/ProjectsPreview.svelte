<script lang="ts">
	import type { IProject } from '$lib/types/interfaces';
	export let data: IProject[];

	let hovered: boolean[] = [];
	//set hover state for each project
	data.forEach((project) => {
		hovered.push(false);
	});
	import LazyImg from '$lib/components/LazyImg.svelte';
</script>

<div class="py-16 px-2 sm:px-8">
	<h1 class="text-3xl font-semibold text-center">
		Seneste <span class="decoration-primary underline decoration-4 underline-offset-8"
			>projekter</span
		>
	</h1>

	<div class="flex gap-8 flex-wrap w-full justify-evenly">
		{#each data.length > 6 ? data.slice(0, 6) : data as project, index}
			<div
				tabindex="0"
				role="button"
				class:hover-effect={hovered[index]}
				class="opacity card bg-primary w-96 text-secondary-content shadow-xl after:content-['{project.description}']"
				on:mouseover={() => {
					hovered[index] = true;
				}}
				on:focus={() => {
					hovered[index] = true;
				}}
				on:mouseleave={() => {
					hovered[index] = false;
				}}
				on:blur={() => {
					hovered[index] = false;
				}}
			>
				<div class="rounded-t-xl overflow-hidden">
					<LazyImg alt={project.title} image={project.image} imageSmall={project.imageSmall} />
				</div>
				<div class="card-body hover:pt-96 transition-all">
					<h2 class="card-title">{project.title}</h2>
					<p>{project.subtitle}</p>
					<div class="card-actions justify-end">
						<div class="badge">{project.clips[0] ?? ''}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.opacity::after {
		content: '';
		width: 100%;
		height: 100%;
		transition: all 0.3s ease-in-out;
		opacity: 0%;
		position: absolute;
	}
	.hover-effect::after {
		width: 100%;
		height: 100%;
		@apply rounded-xl;
		position: absolute;
		z-index: 1;
		transition: all 0.3s ease-in-out;
		background: rgba(0, 0, 0, 0.75);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14.7px);
		-webkit-backdrop-filter: blur(14.7px);
		opacity: 100%;
	}
	.hover-effect {
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}
</style>
