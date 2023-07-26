<script>
	import Header from './Header.svelte';
	import Elevplads from '$lib/sections/Elevplads.svelte';
	import OmMig from '$lib/sections/OmMig.svelte';
</script>

<main class="flex gap-2 flex-col overflow-x-hidden">
	<Header />
	<div class="divider" />
	<OmMig />

	<Elevplads />
</main>
