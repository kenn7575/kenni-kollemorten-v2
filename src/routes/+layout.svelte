<script lang="ts">
	import '../app.css';
	export let data;
	import { projectsStore } from '$lib/stores/projects';
	projectsStore.set(data.projects);
	import NavBar from '$lib/sections/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import { user } from '$lib/functions/firebase';
	import { signOutUser } from '$lib/functions/firebase';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' }); //vercel analytics initialization
</script>

<nav class="sticky top-0 z-40">
	{#if $user}
		<div class="alert alert-warning py-0 rounded-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Logget ind som admin: {$user.email}</span>
			<div>
				<button
					class="btn btn-ghost"
					on:click={() => {
						signOutUser();
					}}
				>
					Log ud
				</button>
			</div>
		</div>
	{/if}
	<NavBar />
</nav>

<main class="flex flex-col overflow-x-hidden bg-base-100 relative">
	<slot projects={data} />
</main>

<footer class="footer p-10 bg-base-300 text-base-content">
	<Footer />
</footer>
<p class="text-base-content/60 font-light text-center text-sm mb-8">
	Kenni-kollemorten.dk © All rights reaerved
</p>
