<script lang="ts">
	export let direcrtion: string = '';
	import { onMount } from 'svelte';
	onMount(() => {
		const elements = document.querySelectorAll('.intersection-animation');
		if (!elements) return;
		elements.forEach((div) => {
			const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], options) => {
				entries.forEach((entry) => {
					const intersecting = entry.isIntersecting;
					if (intersecting) {
						entry.target.classList.add('scroll-animation');
						observer.unobserve(entry.target);
					} else {
						entry.target.classList.remove('scroll-animation');
					}
				});
			});
			observer.observe(div);
		});
	});
</script>

<div
	class:translate-y-14={direcrtion.toLowerCase() == 'up'}
	class:translate-x-14={direcrtion.toLowerCase() == 'left'}
	class:down={direcrtion.toLowerCase() == 'down'}
	class:right={direcrtion.toLowerCase() == 'right'}
	class="intersection-animation transition-all duration-1000 ease-in-out"
>
	<slot />
</div>

<style>
	.intersection-animation {
		opacity: 0;
	}
	@media (prefers-reduced-motion: reduce) {
		.intersection-animation {
			transform: none !important;
		}
	}
	.right {
		transform: translateX(-14rem);
	}
	.down {
		transform: translateY(-14rem);
	}
</style>
