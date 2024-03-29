<script lang="ts">
	import type { IProject } from '$lib/types/interfaces';
	export let projects: IProject[];
	import LazyImg from '$lib/components/LazyImg.svelte';
	import Typewriter from './typewriter.svelte';
	import StackedAnimation from './StackedAnimation.svelte';
</script>

{#if projects}
	<div class="top-picks max-w-full">
		<StackedAnimation>
			<ul class="top-picks__track">
				{#each projects as project}
					<li class="item top-picks__item">
						<a class="item__card group" href="/projekter/{project.id}">
							<div
								class="z-10 absolute top-0 left-0 w-full h-full bg-base-100/50 opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-all duration-300"
							/>
							<LazyImg
								alt={project.title}
								image={project.image}
								imageSmall={project.imageSmall}
								aspectRatio="aspect-3/4"
							/>

							<span
								class="backdrop-blur-sm w-fit p-1 rounded-xl absolute top-1 right-1 no-underline text-white text-right font-bold"
								>{project.title}</span
							>
							<div
								class="z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block"
							>
								<p class="text-base-content text-base group-hover:animate-rise">
									{project.subtitle}
								</p>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</StackedAnimation>
	</div>
{/if}

<style>
	.top-picks__item .item__card span {
		font-size: clamp(1rem, 2vmin, 2rem);
		background: rgba(0, 0, 0, 0.25);
		max-width: 80%;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	:root {
		--size: max(50vmin, 18rem);
		--height: var(--size);
		--width: calc(3 * var(--size) / 4);
		--font-size: calc(0.74 * var(--size));
		--gap: calc(0.22 * var(--size));
	}

	.top-picks__track {
		height: var(--height);
		margin: 0;
		padding: 0;
		display: flex;
		list-style-type: none;
		max-width: 100%;
		overflow-x: auto;
		overflow-y: visible;
		counter-reset: index;
		-ms-scroll-snap-type: x mandatory;
		scroll-snap-type: x mandatory;
	}
	.top-picks__item {
		overflow: hidden;
		width: calc(var(--width) + var(--gap));
		flex: 0 0 calc(var(--width) + var(--gap));
		position: relative;
		list-style: none;
		counter-increment: index;
		padding-left: var(--gap);
		scroll-snap-align: center;
	}
	.top-picks__item .item__card {
		width: var(--width);
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		border-radius: 2vmin;
		background: #242424;
		overflow-x: hidden;
	}

	.top-picks__item:after {
		z-index: 30;
		content: counter(index);
		position: absolute;
		color: var(--base-100);
		font-size: var(--font-size);
		line-height: 0.7;
		bottom: 1rem;
		font-weight: bold;
		letter-spacing: -5vmin;
		left: 0;
		-webkit-text-stroke: 0.5vmin var(--primary);
		text-shadow: 0vmin 0 2vmin var(--primary);
		transform: translate(-14%, 0);
	}

	.top-picks {
		max-width: 100%;
	}
</style>
