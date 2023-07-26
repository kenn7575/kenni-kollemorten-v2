<script lang="ts">
	export let data;
</script>

<div class="flex gap-4">
	{#each data.projects as project}
		<div class="card bg-accent w-96 text-secondary-content shadow-xl">
			<figure><img src={project.image} alt="Shoes" /></figure>
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
