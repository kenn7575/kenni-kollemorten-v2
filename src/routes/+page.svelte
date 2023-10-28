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
	<title>Hjem</title>
	<meta name="description" content="personal portfolio website" />
</svelte:head>

<Header />
<div class="divider" />
<OmMig />
<Elevplads />
<ProjectsPreview data={$projectsStore} />
