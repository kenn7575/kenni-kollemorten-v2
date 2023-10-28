<script lang="ts">
	import { onMount } from 'svelte';
	export let threshold = 1.0;
	let options = {
		threshold: threshold,
		once: true
	};
	onMount(() => {
		const elements = document.querySelectorAll('.intersection-stacked-animation');
		if (!elements) return;
		elements.forEach((div) => {
			const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], options) => {
				entries.forEach((entry) => {
					const intersecting = entry.isIntersecting;
					if (intersecting) {
						console.log('Intersection');

						entry.target.classList.add('scroll-stacked-animation');
						//unovserve
						observer.unobserve(entry.target);
					} else {
						entry.target.classList.remove('scroll-stacked-animation');
					}
				});
			});

			observer.observe(div);
		});
	});
</script>

<div class="intersection-stacked-animation w-full">
	<slot />
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		.intersection-stacked-animation {
			transform: none !important;
		}
	}
</style>
