<script lang="ts">
	import { projectsStore } from '$lib/stores/projects';
	console.log($projectsStore);

	import Header from '../lib/sections/Header.svelte';
	import Elevplads from '$lib/sections/Elevplads.svelte';
	import OmMig from '$lib/sections/OmMig.svelte';
	import ProjectsPreview from '$lib/sections/ProjectsPreview.svelte';
</script>

<svelte:head>
	<title>Hjem</title>
	<meta name="description" content="personal portfolio website" />
</svelte:head>

<Header />
<div class="divider" />
<OmMig />
<Elevplads />
<ProjectsPreview data={$projectsStore} />
