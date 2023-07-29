<script lang="ts">
	import { createLoadObserver } from '$lib/functions/createLoadObserver';
	import { projectsStore } from '$lib/stores/projects';

	const onload = createLoadObserver(() => {
		console.log('all images loaded');
		isLoaded.forEach((loaded) => {
			loaded = true;
		});
	});

	let data = $projectsStore;
	// create a list new of isLoaded booleans for each project
	let isLoaded: boolean[] = [];
	for (let i = 0; i < data.length; i++) {
		isLoaded.push(false);
	}
</script>

<h1 class="text-5xl">Projekter</h1>
<div class="flex gap-4 p-4">
	{#if data}
		{#each data as project, index}
			<div class="card bg-base-200 w-96 text-base-content shadow-xl">
				<div
					class="blur-img rounded-t-xl bg-center w-full aspect-video bg-no-repeat"
					style="background-image: url({project.imageSmall}) ;"
				>
					<img
						use:onload
						on:load={() => {
							console.log('image ' + (index + 1) + ' of ' + data.length + ' loaded');
							isLoaded[index] = true;
						}}
						on:ended={() => {
							console.log('ended');
						}}
						src={project.image}
						alt="Shoes"
						class="aspect-video rounded-t-xl object-cover object-center w-full transition-all duration-200 ease-in opacity-0"
						class:opacity-100={isLoaded[index]}
					/>
				</div>
				<div class="card-body">
					<h2 class="card-title">
						{project.title}
						{#if index === 0}
							<div class="badge badge-secondary">New</div>
						{/if}
					</h2>
					<p>{project.description}</p>
					<div class="card-actions items-end flex-col">
						{#if project.clips}
							<div class="flex justify-end w-1/2 flex-wrap gap-1">
								{#each project.clips as clip}
									<div class="badge badge-secondary badge-outline">{clip}</div>
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

<style>
	.blur-img {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
