<script lang="ts">
	import Header from '../lib/sections/Header.svelte';
	import Elevplads from '#lib/sections/Elevplads.svelte';
	import OmMig from '#lib/sections/OmMig.svelte';
	import ProjectsPreview from '#lib/sections/ProjectsPreview.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Hjem - Portfolio website</title>
	<meta
		name="description"
		content="Explore my diverse portfolio showcasing innovative projects and creative solutions.  Elevate your digital experience with my unique perspective and expertise."
	/>
	<meta charset="utf-8" />
	<meta
		name="keywords"
		content="projects, kenni, kollemorten, kenni kollemorten, portfolio, projekter"
	/>
	<meta name="author" content="Kenni Kollemorten" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Portfolio index" />
</svelte:head>

<Header />
<div class="divider"></div>
<OmMig />
<Elevplads />
<ProjectsPreview data={data.projects} />
