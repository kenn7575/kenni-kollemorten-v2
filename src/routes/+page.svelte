<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import Header from '../lib/sections/Header.svelte';
	import Elevplads from '$lib/sections/Elevplads.svelte';
	import OmMig from '$lib/sections/OmMig.svelte';
	import ProjectsPreview from '$lib/sections/ProjectsPreview.svelte';
</script>

<main class="flex flex-col overflow-x-hidden">
	<Header />
	<div class="divider" />
	<OmMig />
	<Elevplads />
	<ProjectsPreview {data} />
</main>
