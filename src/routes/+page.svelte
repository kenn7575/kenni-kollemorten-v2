<script lang="ts">
	import { projectsStore } from '$lib/stores/projects';
	import Header from '../lib/sections/Header.svelte';
	import Elevplads from '$lib/sections/Elevplads.svelte';
	import OmMig from '$lib/sections/OmMig.svelte';
	import ProjectsPreview from '$lib/sections/ProjectsPreview.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
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
<div class="divider" />
<OmMig />
<Elevplads />
<ProjectsPreview data={$projectsStore} />
