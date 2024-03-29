<script lang="ts">
	import LazyImg from '$lib/components/LazyImg.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { user } from '$lib/functions/firebase';

	export let data: IProject;

	import Arrow from '$lib/img/Arrow.svg';

	import { getMonthName } from '$lib/functions/monthCalulator';
	import type { IProject } from '$lib/types/interfaces';

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
	<title>{data?.title} - Portfolio website</title>
	<meta
		name="description"
		content="Explore my diverse portfolio showcasing innovative projects and creative solutions.  Elevate your digital experience with my unique perspective and expertise. "
	/>
	<meta charset="utf-8" />
	<meta
		name="keywords"
		content="kenni, kollemorten, kenni kollemorten, portfolio, projekter, {data?.title}"
	/>
	<meta name="author" content="Kenni Kollemorten" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Projekt {data?.title}" />
</svelte:head>

{#if data}
	<div class="bg-primary flex justify-center items-center pt-8">
		{#if $user}
			<a href="/projekter/{data.id}/rediger" class="btn btn-warning self-center">Rediger</a>
		{/if}
	</div>
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
			<img class="max-h-32 self-start" src={Arrow} alt="arrow" />
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
				class="bg-base-100 px-2 py-16 flex gap-4 flex-col xl:grid grid-cols-2 justify-between
				sm:px-16 sm:py-32"
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
					<h1
						class="text-5xl font-bold mb-16
					sm:text-7xl"
					>
						{section.title}
					</h1>
					<div class="ml-8 max-w-full">
						<p
							class="max-w-192 mb-8 text-opacity-80
							xl:pr-16"
							class:text-primary-content={index % 2 == 1}
							class:text-base-content={index % 2 == 0}
						>
							{section.description}
						</p>
						{#if section.code && section.code.length > 0}
							<div class="mockup-code w-fit overflow-scroll max-w-full">
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
							rel="noreferrer"
							class="join-item btn btn-secondary btn-outline btn-sm capitalize
							sm:btn-md sm:w-44"
							target="_blank"
							href={link.url}>{link.name}</a
						>
					{/each}
				</div>
			</div>
		{/if}
	</main>
{:else}
	<main class="min-h-screen flex justify-center items-center backdrop-brightness-50">
		<div class="alert alert-error w-max flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>

			<div class="flex gap-2 flex-col items-center">
				<span>Projektet blev ikke fundet!</span>
				<a class="btn btn-sm w-fit" href="/projekter">Tilbage</a>
			</div>
		</div>
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
