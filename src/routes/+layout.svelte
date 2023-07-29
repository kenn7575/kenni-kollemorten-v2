<script lang="ts">
	import '../app.css';
	export let data;
	import { projectsStore } from '$lib/stores/projects';
	projectsStore.set(data.projects);
	import NavBar from '$lib/sections/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
</script>

<nav class="sticky top-0 z-40">
	<NavBar />
</nav>

<main class="flex flex-col overflow-x-hidden bg-base-100 relative">
	<slot projects={data} />
</main>

<footer class="footer p-10 bg-base-300 text-base-content">
	<Footer />
</footer>
