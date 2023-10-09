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
	<h2 class="text-4xl font-semibold text-center mb-2">Top 10</h2>
	<h3 class="text-xl font-light text-center mb-16">mest populære projekter</h3>
	<TopPicks projects={data} />
</div>
