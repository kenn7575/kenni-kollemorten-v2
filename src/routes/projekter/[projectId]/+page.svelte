<script lang="ts">
	import { projectsStore } from '$lib/stores/projects';
	import { page } from '$app/stores';
	import LazyImg from '$lib/components/LazyImg.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	//get the project id from the url
	let id = $page.params.projectId;

	//get the project data from the store
	let data = $projectsStore.find((project) => project.id === id);

	import Arrow from '$lib/img/Arrow.svg';

	import { getMonthName } from '$lib/functions/monthCalulator';
	let date = new Date(data?.dateCreated ?? '');
	let month = getMonthName(date.getMonth()) ?? '';
	let year = date.getFullYear() ?? '';

	let elementsStart: any[] = [];
	let elementsEnd: any[] = [];
	let observersStart: boolean[] = [];
	let observersEnd: boolean[] = [];

	data?.text.forEach((_, index) => {
		elementsStart.push('ref');
		elementsEnd.push('ref');
		observersStart.push(false);
		observersEnd.push(false);
	});
</script>

<svelte:head>
	<title>{data?.title}</title>
	<meta name="description" content={data?.subtitle} />
</svelte:head>

{#if data}
	<header class=" bg-primary px-2 sm:px-16 pt-8 sm:pt-16 text-primary-content">
		<div class="flex mb-16 items-center gap-2 font-semibold text-sm">
			<p class=" text-primary-content/80">{data.label}</p>
			<div class="divider w-4 after:bg-primary-content/80 before:bg-primary-content/80" />
			<p>{month} {year}</p>
		</div>
		<h1 class="text-5xl sm:text-7xl font-bold text-primary-content mb-16">{data.title}</h1>
		<h2 class="font-semibold mb-8">{data.subtitle}</h2>
		<p class="max-w-192 text-primary-content/80 mb-16">
			{data.description}
		</p>
		<div class="flex flex-col sm:flex-row sm:items-start">
			{#if data.links}
				<div class=" w-fit">
					<div class="after:bg-primary-content/80 before:bg-primary-content/80 divider m-2" />
					<div class="flex px-4 flex-wrap max-w-192">
						{#each data.links as link, index}
							<a class="btn btn-ghost btn-xs sm:btn-sm capitalize" target="_blank" href={link.url}
								>{link.name}</a
							>
							{#if index !== data.links.length - 1}
								<div
									class="after:bg-primary-content/80 before:bg-primary-content/80 divider divider-horizontal"
								/>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
			<svg
				class="ml-16 sm:m-0"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				width="120"
				height="120"
				viewBox="0 0 256 256"
				xml:space="preserve"
			>
				<defs />
				<g
					style=" stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
					transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
				>
					<path
						class="fill-primary-content"
						d="M 80.224 73.891 c -0.049 0.007 -0.095 0.029 -0.145 0.029 c -0.029 0 -0.055 -0.014 -0.084 -0.017 c -0.038 -0.001 -0.073 0.012 -0.111 0.006 c -0.064 -0.009 -0.117 -0.042 -0.176 -0.063 c -0.007 -0.003 -0.013 -0.004 -0.019 -0.007 c -0.21 -0.078 -0.383 -0.211 -0.498 -0.393 l -8.733 -8.734 c -0.391 -0.391 -0.391 -1.023 0 -1.414 s 1.023 -0.391 1.414 0 l 7.41 7.411 c 1.64 -15.449 -4.181 -28.442 -16.193 -35.847 c -0.471 -0.29 -0.617 -0.906 -0.327 -1.376 s 0.906 -0.616 1.376 -0.326 C 75.44 40.125 81.578 51.72 81.578 65.636 c 0 1.505 -0.08 3.04 -0.225 4.596 l 6.934 -6.934 c 0.391 -0.391 1.023 -0.391 1.414 0 c 0.195 0.195 0.293 0.451 0.293 0.707 c 0 0.256 -0.098 0.512 -0.293 0.707 l -8.914 8.914 c -0.131 0.131 -0.298 0.204 -0.475 0.247 C 80.283 73.882 80.254 73.885 80.224 73.891 z"
						style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;"
						transform=" matrix(1 0 0 1 0 0) "
						stroke-linecap="round"
					/>
					<path
						class="fill-primary-content"
						d="M 32.153 16.912 c 10.517 2.136 19.862 8.403 23.81 15.969 c 0.929 1.793 1.383 3.915 1.383 6.185 c 0 3.564 -1.12 7.493 -3.284 11.086 c -2.334 3.879 -5.582 6.906 -9.145 8.525 c -3.689 1.676 -7.284 1.658 -10.124 -0.052 c -5.733 -3.451 -6.419 -12.871 -1.529 -20.994 c 0.003 -0.006 0.01 -0.009 0.013 -0.014 c 2.095 -3.475 4.99 -6.324 8.152 -8.022 c 0.486 -0.261 1.093 -0.079 1.354 0.408 c 0.081 0.15 0.119 0.313 0.119 0.472 c 0 0.356 -0.191 0.702 -0.527 0.882 c -2.855 1.534 -5.481 4.129 -7.395 7.308 c -0.003 0.004 -0.007 0.006 -0.01 0.01 c -4.314 7.178 -3.933 15.354 0.853 18.238 c 2.258 1.359 5.193 1.339 8.265 -0.057 c 3.197 -1.453 6.131 -4.2 8.259 -7.735 c 3.191 -5.299 3.913 -11.312 1.84 -15.317 c -3.679 -7.05 -12.484 -12.911 -22.434 -14.931 C 20.714 16.63 10.016 19.2 1.629 26.11 c -0.426 0.351 -1.056 0.29 -1.408 -0.136 c -0.351 -0.426 -0.291 -1.056 0.136 -1.408 C 9.218 17.266 20.51 14.547 32.153 16.912 z"
						style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;"
						transform=" matrix(1 0 0 1 0 0) "
						stroke-linecap="round"
					/>
				</g>
			</svg>
		</div>
	</header>
	<main>
		<LazyImg image={data.image} imageSmall={data.imageSmall} alt={data.title} />

		{#each data.text as section, index}
			{#if index % 2 == 1}
				<div
					class:rotate-0={observersStart[index]}
					class="clip-path h-28 bg-primary w-full translate-y-2 duration-500 -rotate-3 origin-bottom-right"
				/>
				<IntersectionObserver
					element={elementsStart[index]}
					bind:intersecting={observersStart[index]}
				>
					<div bind:this={elementsStart[index]} class="observer" />
				</IntersectionObserver>
			{/if}
			<section
				class="bg-base-100 px-2 sm:px-16 py-16 sm:py-32 flex flex-col xl:grid grid-cols-2 justify-between"
				class:bg-primary={index % 2 == 1}
				class:text-primary-content={index % 2 == 1}
				class:text-base-content={index % 2 == 0}
			>
				<div>
					<p
						class="font-semibold text-md mb-16"
						class:text-primary-content={index % 2 == 1}
						class:text-primary={index % 2 == 0}
					>
						{index < 10 ? '0' + (index + 1) : index + 1}
					</p>
					<h1 class="text-5xl sm:text-7xl font-bold mb-16">{section.title}</h1>
					<div class="ml-8">
						<p
							class="max-w-192 mb-8 text-opacity-80 xl:pr-16"
							class:text-primary-content={index % 2 == 1}
							class:text-base-content={index % 2 == 0}
						>
							{section.description}
						</p>
						{#if section.code && section.code.length > 0}
							<div class="mockup-code w-fit">
								{#each section.code as code}
									<pre data-prefix="$"><code>{code}</code></pre>
								{/each}
							</div>
						{/if}
					</div>
				</div>
				<div class="mt-16">
					<LazyImg image={section.image} imageSmall={section.imageSmall} alt={section.title} />
				</div>
			</section>
			{#if index % 2 == 1}
				<div
					class:rotate-0={observersEnd[index]}
					class="clip-path-reverse h-28 bg-primary w-full -translate-y-2 origin-top-left duration-500 -rotate-3"
				/>
				<IntersectionObserver element={elementsEnd[index]} bind:intersecting={observersEnd[index]}>
					<div bind:this={elementsEnd[index]} class="observer" />
				</IntersectionObserver>
			{/if}
		{/each}
		{#if data.links}
			<div class=" w-full flex justify-center flex-col items-center">
				<p class="font-semibold mb-4">Links</p>
				<div class="flex px-4 flex-wrap max-w-192 join mb-16">
					{#each data.links as link, index}
						<a
							class="join-item btn btn-secondary btn-outline btn-sm sm:btn-md sm:w-44 capitalize"
							target="_blank"
							href={link.url}>{link.name}</a
						>
					{/each}
				</div>
			</div>
		{/if}
	</main>
{/if}

<style>
	.clip-path {
		clip-path: polygon(0 21%, 100% 91%, 100% 100%, 0 100%);
	}
	.clip-path-reverse {
		clip-path: polygon(0 0, 100% 0, 100% 91%, 0 21%);
	}
</style>
