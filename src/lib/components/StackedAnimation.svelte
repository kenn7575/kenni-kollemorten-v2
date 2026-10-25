<script lang="ts">
	import { onMount } from 'svelte';
	interface Props {
		threshold?: number;
		children?: import('svelte').Snippet;
	}

	let { threshold = 1.0, children }: Props = $props();
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
	{@render children?.()}
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		.intersection-stacked-animation {
			transform: none !important;
		}
	}
</style>
