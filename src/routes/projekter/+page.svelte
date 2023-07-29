<script lang="ts">
	import { projectsStore } from '$lib/stores/projects';
	let data = $projectsStore;
</script>

<h1 class="text-5xl">Projekter</h1>
<div class="flex gap-4 p-4">
	{#if data}
		{#each data as project, index}
			<div class="card bg-base-200 w-96 text-base-content shadow-xl">
				<figure><img src={project.image} alt="Shoes" /></figure>
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
