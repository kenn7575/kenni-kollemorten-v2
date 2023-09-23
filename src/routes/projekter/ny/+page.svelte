<script lang="ts">
	import { goto } from '$app/navigation';
	import LazyImg from '$lib/components/LazyImg.svelte';
	import type { IProject } from '$lib/types/interfaces';

	let project: IProject = {
		id: null,
		visits: 0,
		title: 'test',
		subtitle: 'test',
		label: 'test',
		description: 'test',
		dateCreated: 'test',
		image: 'test',
		imageSmall: 'test',
		clips: [],
		links: [
			{
				name: 'test',
				url: 'test'
			}
		],
		text: [
			{
				title: '',
				description: '',
				image: '',
				imageSmall: '',
				code: []
			}
		]
	};
	$: console.clear(), console.log(project);
	function addText() {
		project.text.push({
			title: '',
			description: '',
			image: '',
			imageSmall: '',
			code: []
		});
		project = project;
	}
	function addCode(index: number) {
		project.text[index].code.push('');
		project = project;
	}
	function removeText(index: number) {
		project.text.splice(index, 1);
		project = project;
	}
	function removeCode(index: number, codeIndex: number) {
		project.text[index].code.splice(codeIndex, 1);
		project = project;
	}
	function addLink() {
		project.links.push({
			name: '',
			url: ''
		});
		project = project;
	}
	function removeLink(index: number) {
		project.links.splice(index, 1);
		project = project;
	}
	function addClip() {
		project.clips.push('');
		project = project;
	}
	function removeClip(index: number) {
		project.clips.splice(index, 1);
		project = project;
	}

	async function uploadProject() {
		console.log('uploading project');

		const res = await fetch('/api/projekter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(project)
		});
		if (res.ok) {
			const data = await res.json();
			goto('/projekter/' + data.id);
		}
	}
</script>

<header class=" bg-primary px-2 sm:px-16 pt-8 sm:pt-16 text-primary-content">
	<div class="join mb-16 join-vertical sm:join-horizontal !rounded-none">
		<div class="form-control">
			<label class="label" for="Label">
				<span class="label-text text-primary-content/60">Label</span>
			</label>
			<input
				bind:value={project.label}
				name="Label"
				class="input join-item placeholder:text-primary-content/60 bg-transparent border-base-100"
				placeholder="Label"
			/>
		</div>

		<div class="form-control">
			<label class="label" for="dateCreated">
				<span class="label-text text-primary-content/60">Date Created (yyyy-mm-dd)</span>
			</label>
			<input
				name="dateCreated"
				bind:value={project.dateCreated}
				class="input input-bordered join-item placeholder:text-primary-content/60 bg-transparent border-base-100"
				placeholder="Date Created"
			/>
		</div>
	</div>
	<h2>Clips {project.clips?.length}</h2>

	<div class="flex flex-wrap max-w-192 gap-x-6 gap-y-2">
		{#each project.clips as clip, index}
			<div class="form-control">
				<label class="label" for="link-url">
					<span class="label-text text-primary-content/60">Clip name</span>
				</label>

				<div class="flex items-center relative">
					<input
						name="link-url"
						bind:value={project.clips[index]}
						class="input input-bordered join-item placeholder:text-primary-content/60 bg-transparent border-base-100"
						placeholder="Clip"
					/>
					<button
						on:click={() => {
							removeClip(index);
						}}
						class="btn btn-circle btn-error btn-sm absolute -right-4"
						><i class="fa-solid fa-trash" /></button
					>
				</div>
			</div>
		{/each}
	</div>
	<button
		on:click={() => {
			addClip();
		}}
		class="btn btn-circle btn-base btn-sm my-4"><i class="fa-solid fa-plus" /></button
	>

	<div class="form-control">
		<label class="label" for="title">
			<span class="label-text text-primary-content/60">Title</span>
		</label>
		<input
			name="title"
			bind:value={project.title}
			type="text"
			placeholder="Type here"
			class="input input-bordered border-base-100 bg-transparent w-full max-w-md placeholder:text-primary-content/60"
		/>
	</div>
	<div class="form-control">
		<label class="label" for="subtitle">
			<span class="label-text text-primary-content/60">Subtitle</span>
		</label>
		<input
			bind:value={project.subtitle}
			type="text"
			name="subtitle"
			placeholder="Type here"
			class="input input-bordered border-base-100 bg-transparent w-full max-w-md placeholder:text-primary-content/60"
		/>
	</div>
	<div class="form-control">
		<label class="label" for="description">
			<span class="label-text text-primary-content/60">Description</span>
		</label>
		<textarea
			name="description"
			bind:value={project.description}
			class="textarea textarea-bordered w-full h-fit text-primary-content bg-transparent border-base-100 xl:max-w-192 placeholder:text-primary-content/60"
			placeholder="Bio"
		/>
	</div>
	<div class="flex flex-col sm:flex-row sm:items-start mt-16">
		{#if project.links}
			<div class=" w-fit">
				<h2>Links {project.links?.length}</h2>
				<div class="flex flex-wrap gap-4 mb-4">
					{#each project.links as link, index}
						<div class="border border-base-100 rounded-lg px-6 p-4 relative flex items-center">
							<div class="gap-2 mb-4 flex-col sm:flex-row flex items-center">
								<div class="form-control">
									<label class="label pt-0" for="link-name">
										<span class="label-text text-primary-content/60">Name</span>
									</label>
									<input
										bind:value={project.links[index].name}
										name="link-name"
										class="input join-item placeholder:text-primary-content/60 bg-transparent border-base-100 !rounded-lg"
										placeholder="name"
									/>
								</div>

								<div class="form-control">
									<label class="label pt-0" for="link-url">
										<span class="label-text text-primary-content/60">URL</span>
									</label>

									<input
										name="link-url"
										bind:value={project.links[index].url}
										class="input input-bordered join-item placeholder:text-primary-content/60 bg-transparent border-base-100 !rounded-lg"
										placeholder="URL"
									/>
								</div>
							</div>
							<button
								on:click={() => {
									removeLink(index);
								}}
								class="btn btn-circle btn-error btn-sm absolute -right-4"
								><i class="fa-solid fa-trash" /></button
							>
						</div>
					{/each}
				</div>
				<button
					on:click={() => {
						addLink();
					}}
					class="btn btn-circle btn-base btn-sm mb-4"><i class="fa-solid fa-plus" /></button
				>
			</div>
		{/if}
	</div>
</header>
<main>
	<LazyImg image={project.image} imageSmall={project.imageSmall} alt={project.title} />

	{#each project.text as section, index}
		{#if index % 2 == 1}
			<div
				class="clip-path h-28 bg-primary w-full translate-y-2 duration-500 -rotate-3 origin-bottom-right"
			/>
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
				class="clip-path-reverse h-28 bg-primary w-full -translate-y-2 origin-top-left duration-500 -rotate-3"
			/>
		{/if}
	{/each}
	{#if project.links}
		<div class=" w-full flex justify-center flex-col items-center">
			<p class="font-semibold mb-4">Links</p>
			<div class="flex px-4 flex-wrap max-w-192 join mb-16">
				{#each project.links as link, index}
					<a
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
<button on:click={uploadProject}>Test</button>
