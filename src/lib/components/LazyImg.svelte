<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		image: string;
		imageSmall?: string; // fallback
		alt: string;
		aspectRatio?: string;
		ojbectFit?: string;
	}

	let {
		image,
		imageSmall = image,
		alt,
		aspectRatio = 'aspect-video',
		ojbectFit = 'object-cover'
	}: Props = $props();

	onMount(() => {
		const divs = document.querySelectorAll('.blur-img')!;
		divs.forEach((div) => {
			const img = div.querySelector('img')!;

			function loaded() {
				img.style.opacity = '1';
			}
			if (img.complete) {
				img.style.transition = 'opacity 0s ease-in';
				loaded();
			} else {
				img.addEventListener('load', loaded);
			}
		});
	});
</script>

<div
	class="blur-img bg-center h-full w-full {aspectRatio} bg-no-repeat {ojbectFit == 'object-cover'
		? 'bg-cover'
		: 'bg-contain'}"
	style="background-image: url({imageSmall}) ;"
>
	<img
		loading="lazy"
		class="{aspectRatio} {ojbectFit} object-center h-full transition-all duration-500 ease-in opacity-0"
		src={image}
		{alt}
	/>
</div>

<style>
</style>
