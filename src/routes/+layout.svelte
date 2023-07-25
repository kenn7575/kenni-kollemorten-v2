<script lang="ts">
	import '../app.css';

	import NavBar from '$lib/sections/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
</script>

<nav class="sticky top-0 z-40">
	<NavBar />
</nav>

<slot />

<footer class="footer p-10 bg-base-300 text-base-content">
	<Footer />
</footer>
