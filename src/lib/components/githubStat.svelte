<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { expoInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data: number;
	export let delay: number = 0;
	export let decimals = 2;

	export let textContent: { title: string; description: string; details: string };

	const numberAnimation = tweened(0, {
		duration: 2000,
		easing: expoInOut
	});

	let formatter = new Intl.NumberFormat('da-DA', {
		notation: 'compact',
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	});
	let formatter2 = new Intl.NumberFormat('da-DA', {
		notation: 'compact',
		maximumFractionDigits: decimals
	});

	let showStats = true;

	function toggleContent() {
		showStats = !showStats;
	}

	function startNumberAnimation(lines: number) {
		setTimeout(() => {
			numberAnimation.set((lines / 10) * 2);
		}, delay);

		setTimeout(() => {
			numberAnimation.set((lines / 10) * 4);
		}, 1500 + delay);
		setTimeout(() => {
			numberAnimation.set(lines);
		}, 3000 + delay);
	}

	// async function fetchStats() {
	// 	try {
	// 		console.log('Fetching data...');
	// 		const res = await fetch('/api/githubStats/v2');
	// 		const data = await res.json();
	// 		console.log('Data fetched!', data);
	// 		stats = data;
	// 		loading = false;
	// 		localStorage.setItem(
	// 			'github_data',
	// 			JSON.stringify({ ...stats, created_at: new Date().getTime() })
	// 		);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// }

	$: data && initIO();

	function initIO() {
		// Initialize intersection observer
		const elements = document.querySelectorAll('#intersection');
		if (!elements) return;

		elements.forEach((div) => {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && data) {
						startNumberAnimation(data);
						observer.unobserve(entry.target);
					}
				});
			});
			observer.observe(div);
		});
	}
</script>

<div
	class="card bg-base-200 text-base-content w-full max-w-192 min-h-[18rem] relative"
	id="intersection"
>
	<button
		class="toggle-button bottom-2 w-10 text-xl h-10 bg-primary text-primary-content rounded-full absolute right-2 z-10"
		on:click={toggleContent}
	>
		<i class="fa-solid fa-plus transition-transform duration-500" class:rotate-45={!showStats} />
	</button>

	{#if !data}
		<i class="fa-solid fa-spinner w-min animate-spin text-4xl m-auto" />
	{:else}
		<div class="card-body absolute top-0 bottom-0 right-0 left-0 p-6">
			{#if showStats}
				<div
					class="stat mb-16"
					in:fade={{ duration: 200, delay: 200 }}
					out:fade={{ duration: 200 }}
				>
					<div class="stat-title !text-base-content text-xl sm:text-2xl">{textContent.title}</div>
					<h3 class="stat-value text-5xl sm:text-8xl my-2 text-colored">
						{$numberAnimation > 999999
							? formatter.format($numberAnimation)
							: formatter2.format($numberAnimation)}
					</h3>
					<div class="stat-desc !text-base-content text-lg">{textContent.description}</div>
				</div>
			{:else}
				<div
					class="absolute top-0 bottom-0 right-0 left-0 p-6 flex"
					in:fade={{ duration: 200, delay: 200 }}
					out:fade={{ duration: 200 }}
				>
					<p class="leading-relaxed my-auto overflow-y-scroll max-h-full">
						{textContent.details}
					</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.text-colored {
		/** TEXT GRADIENT */
		color: #3abff8;
		background-image: -webkit-linear-gradient(45deg, #3abff8, #828df8, #f471b5);
		background-clip: text;
		-webkit-background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
		width: min-content;
	}
</style>
