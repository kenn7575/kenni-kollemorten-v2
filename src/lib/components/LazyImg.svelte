<script lang="ts">
	import { onMount } from 'svelte';

	export let image: string;
	export let imageSmall: string = image; // fallback
	export let alt: string;
	export let aspectRatio: string = 'aspect-video';

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
	class="blur-img bg-center h-full w-full {aspectRatio} bg-no-repeat"
	style="background-image: url({imageSmall}) ;"
>
	<img
		loading="lazy"
		class="{aspectRatio} object-cover object-center w-full transition-all duration-500 ease-in opacity-0"
		src={image}
		{alt}
	/>
</div>

<style>
	.blur-img {
		background-size: cover;
	}
	#hide-background {
		background-image: none;
	}
</style>
