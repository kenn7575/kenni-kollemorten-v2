<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	//set data-theme attribute on html element

	let isDoneLoading = false;
	let darkmode = true;
	let html: any;

	let drawIsOpen = false;
	function closeDraw() {
		drawIsOpen = false;
	}

	onMount(() => {
		html = document.querySelector('html');
		if (browser) {
			window.localStorage.getItem('theme') == 'light' ? (darkmode = false) : (darkmode = true);
		}
		isDoneLoading = true;
	});

	$: {
		if (isDoneLoading) {
			if (darkmode) {
				html.setAttribute('data-theme', 'night');
				if (browser) {
					window.localStorage.setItem('theme', 'night');
				}
			} else {
				html.setAttribute('data-theme', 'light');
				if (browser) {
					window.localStorage.setItem('theme', 'light');
				}
			}
		}
	}
</script>

<div class="drawer drawer-end">
	<input id="draw" type="checkbox" class="drawer-toggle" bind:checked={drawIsOpen} />
	<label for="draw" class="hidden">Side navigation</label>

	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-100">
			<div class="navbar-start">
				<label for="theme-toggle" class="swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input id="theme-toggle" type="checkbox" bind:checked={darkmode} />
					<label class="hidden" for="theme-toggle">theme-toggle</label>

					<!-- sun icon -->
					<div class="swap-on">
						<svg
							class=" fill-current w-10 h-10"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
							/></svg
						>
					</div>

					<!-- moon icon -->
					<div class="swap-off">
						<svg
							class="swap-off fill-current w-10 h-10"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
							/></svg
						>
					</div>
				</label>
			</div>
			<div class="navbar-center hidden sm:flex">
				<div class="join">
					<a class="btn btn-ghost px-8" href="/">Hjem</a>

					<a class="btn btn-ghost px-8" href="/projekter">projekter</a>

					<a class="btn btn-ghost px-8" href="/cv">CV</a>
				</div>
			</div>
			<div class="navbar-end">
				<form>
					<label for="draw" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</form>
			</div>
		</div>
		<!-- Page content here -->
	</div>
	<div class="drawer-side">
		<label for="draw" class="drawer-overlay" />
		<ul class="menu p-4 w-80 h-full bg-base-200">
			<!-- Sidebar content here -->
			<li>
				<a href="/" on:click={closeDraw}>Hjem</a>
			</li>
			<li><a href="/projekter" on:click={closeDraw}>Projekter</a></li>
			<li><a href="/cv" on:click={closeDraw}>CV</a></li>
		</ul>
	</div>
</div>

<style>
</style>
