<script lang="ts">
	import '../app.css';
	import { isMobileDevice } from '../stores/isMobileDevice';
	import { onMount } from 'svelte';
	import NavBar from '$lib/sections/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	onMount(() => {
		let isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
		isMobileDevice.set(isMobile);
	});
</script>

<nav class="sticky top-0 z-40">
	<NavBar />
</nav>

<slot />

<footer class="footer p-10 bg-base-300 text-base-content">
	<Footer />
</footer>
