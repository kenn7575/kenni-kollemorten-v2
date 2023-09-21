<script lang="ts">
	import type { IProject } from '$lib/types/interfaces';
	export let data: IProject[];
	import TopPicks from '$lib/components/topPicks.svelte';

	//sort projects by visits and only show the top 10
	data = data.sort((a, b) => b.visits - a.visits);
	if (data.length > 10) {
		data = data.slice(0, 10);
	}
</script>

<div class="py-16 px-2 sm:px-8">
	<h1 class="text-3xl font-semibold text-center">
		Seneste
		<span class="decoration-primary underline decoration-4 underline-offset-8">projekter</span>
	</h1>
	<TopPicks projects={data} />
</div>
