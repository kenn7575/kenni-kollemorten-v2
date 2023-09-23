<script lang="ts">
	import { goto } from '$app/navigation';
	import LazyImg from '$lib/components/LazyImg.svelte';
	import type { IProjectToUpload } from '$lib/types/interfaces';

	let project: IProjectToUpload = {
		id: null,
		visits: 0,
		title: '',
		subtitle: '',
		label: '',
		description: '',
		dateCreated: '',
		image: 'https://placehold.co/600x400/555/aaa',
		imageSmall: 'https://placehold.co/45x30/555/aaa',
		mainImageFile: null,
		clips: [''],
		links: [
			{
				name: '',
				url: ''
			}
		],
		text: [
			{
				title: '',
				description: '',
				image: 'https://placehold.co/600x400/555/aaa',
				imageSmall: 'https://placehold.co/45x30/555/aaa',
				code: ['']
			}
		],

		textImageFiles: []
	};
	$: console.clear(), console.log(project);
	function addText() {
		project.text.push({
			title: '',
			description: '',
			image: 'https://placehold.co/600x400/555/aaa',
			imageSmall: 'https://placehold.co/45x30/555/aaa',
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
	async function uploadMainImage(e: any) {
		const file = e.target.files[0];
		project.image = URL.createObjectURL(file);
		project.mainImageFile = file;
	}
	async function uploadImage(e: any, index: number) {
		const file = e.target.files[0];
		project.text[index].image = URL.createObjectURL(file);
		project.textImageFiles[index] = file;
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

	<h2 class="font-bold">Clips {project.clips?.length}</h2>

	<div class="flex flex-wrap max-w-192 gap-x-6 gap-y-2">
		{#each project.clips as clip, index}
			<div class="form-control">
				<label class="label" for="link-url">
					<span class="label-text text-primary-content/60">Clip {index + 1}</span>
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
						class="btn btn-circle btn-error btn-sm absolute -right-4 outline outline-base-100"
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
			placeholder="Title"
			class="input input-bordered w-full max-w-md border-base-100 bg-transparent placeholder:text-primary-content/60"
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
			placeholder="Subtitle"
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
			class="textarea textarea-bordered w-full h-fit text-primary-content bg-transparent border-base-100 xl:max-w-192 text-base placeholder:text-primary-content/60"
			placeholder="Description"
		/>
	</div>
	<div class="flex flex-col sm:flex-row sm:items-start mt-16">
		{#if project.links}
			<div class=" w-fit">
				<h2 class="font-bold">Links {project.links?.length}</h2>
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
								class="btn btn-circle btn-error btn-sm absolute -right-4 outline outline-base-100"
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
	<div class="relative w-full flex justify-center items-center">
		<LazyImg image={project.image} imageSmall={project.imageSmall} alt={project.title} />

		<div class="form-control w-full max-w-xs absolute p-8 bg-base-100/50 rounded-2xl backdrop-blur">
			<label class="label" for="main-image">
				<span class="label-text font-semibold">Pick the main image</span>
			</label>
			<input
				on:change={uploadMainImage}
				name="main-image"
				bind:value={project.mainImageFile}
				type="file"
				class="file-input file-input-bordered w-full max-w-xs"
			/>
		</div>
	</div>

	{#each project.text as section, sectionIndex}
		{#if sectionIndex % 2 == 1}
			<div
				class="clip-path h-28 bg-primary w-full translate-y-2 duration-500 -rotate-3 origin-bottom-right"
			/>
		{/if}
		<section
			class="bg-base-100 px-2 py-16 flex gap-4 flex-col xl:grid grid-cols-2 justify-between
			sm:px-16 sm:py-32"
			class:bg-primary={sectionIndex % 2 == 1}
			class:text-primary-content={sectionIndex % 2 == 1}
			class:text-base-content={sectionIndex % 2 == 0}
		>
			<div>
				<p
					class="font-semibold text-md mb-16"
					class:text-primary-content={sectionIndex % 2 == 1}
					class:text-primary={sectionIndex % 2 == 0}
				>
					{sectionIndex < 10 ? '0' + (sectionIndex + 1) : sectionIndex + 1}
				</p>

				<div class="form-control">
					{#if sectionIndex % 2 == 0}
						<label class="label" for="section-title-{sectionIndex}">
							<span class="label-text text-base-content/60">Title</span>
						</label>
						<input
							name="section-title-{sectionIndex}"
							bind:value={project.text[sectionIndex].title}
							type="text"
							placeholder="Title"
							class="input input-bordered w-full max-w-md"
						/>
					{:else}
						<label class="label" for="section-title-{sectionIndex}">
							<span class="label-text text-primary-content/60">Title</span>
						</label>
						<input
							name="section-title-{sectionIndex}"
							bind:value={project.text[sectionIndex].title}
							type="text"
							placeholder="Title"
							class="input input-bordered w-full max-w-md border-base-100 bg-transparent placeholder:text-primary-content/60"
						/>
					{/if}
				</div>
				<div class="ml-8 max-w-full">
					<div class="form-control">
						{#if sectionIndex % 2 == 0}
							<label class="label" for="section-description-{sectionIndex}">
								<span class="label-text text-base-content/60">Description</span>
							</label>
							<textarea
								name="section-description-{sectionIndex}"
								bind:value={project.text[sectionIndex].description}
								placeholder="Description"
								class="input input-bordered w-full max-w-md"
							/>
						{:else}
							<label class="label" for="section-description-{sectionIndex}">
								<span class="label-text text-primary-content/60">Description</span>
							</label>
							<textarea
								name="section-description-{sectionIndex}"
								bind:value={project.text[sectionIndex].description}
								placeholder="Description"
								class="input input-bordered w-full max-w-md border-base-100 bg-transparent placeholder:text-primary-content/60"
							/>
						{/if}
					</div>

					<h2 class="font-bold mt-8">Code {project.text[sectionIndex].code.length}</h2>

					<div class="flex flex-wrap max-w-192 gap-x-6 gap-y-2">
						{#each project.text[sectionIndex].code as code, codeIndex}
							<div class="form-control">
								{#if sectionIndex % 2 == 0}
									<label class="label" for="section-{sectionIndex}-code-{codeIndex}">
										<span class="label-text text-base-content/60">line {codeIndex + 1}</span>
									</label>

									<div class="flex items-center relative">
										<input
											name="section-{sectionIndex}-code-{codeIndex}"
											bind:value={project.text[sectionIndex].code[codeIndex]}
											type="text"
											placeholder="Line"
											class="input input-bordered w-full max-w-md"
										/>
										<button
											on:click={() => {
												removeCode(sectionIndex, codeIndex);
											}}
											class="btn btn-circle btn-error btn-sm absolute -right-4 outline outline-base-100"
											><i class="fa-solid fa-trash" /></button
										>
									</div>
								{:else}
									<label class="label" for="section-{sectionIndex}-code-{codeIndex}">
										<span class="label-text text-primary-content/60">line {codeIndex + 1}</span>
									</label>

									<div class="flex items-center relative">
										<input
											name="section-{sectionIndex}-code-{codeIndex}"
											bind:value={project.text[sectionIndex].code[codeIndex]}
											type="text"
											placeholder="Line"
											class="input input-bordered w-full max-w-md border-base-100 bg-transparent placeholder:text-primary-content/60"
										/>
										<button
											on:click={() => {
												removeCode(sectionIndex, codeIndex);
											}}
											class="btn btn-circle btn-error btn-sm absolute -right-4 outline outline-base-100"
											><i class="fa-solid fa-trash" /></button
										>
									</div>
								{/if}
							</div>
						{/each}
					</div>

					<button
						on:click={() => {
							addCode(sectionIndex);
						}}
						class="btn btn-circle btn-neutral btn-sm my-4"><i class="fa-solid fa-plus" /></button
					>
				</div>
			</div>
			<div class="relative w-full flex justify-center items-center mb-16">
				<LazyImg
					image={project.text[sectionIndex].image}
					imageSmall={project.text[sectionIndex].imageSmall}
					alt={project.text[sectionIndex].title}
				/>

				<div
					class="form-control w-full max-w-xs absolute p-8 bg-base-100/50 rounded-2xl backdrop-blur"
				>
					<label class="label" for="main-image">
						<span class="label-text font-semibold">Pick the main image</span>
					</label>
					<input
						on:change={(e) => {
							uploadImage(e, sectionIndex);
						}}
						name="main-image"
						bind:value={project.textImageFiles[sectionIndex]}
						type="file"
						class="file-input file-input-bordered w-full max-w-xs"
					/>
				</div>
			</div>
		</section>
		{#if sectionIndex % 2 == 1}
			<div
				class="clip-path-reverse h-28 bg-primary w-full -translate-y-2 origin-top-left duration-500 -rotate-3"
			/>
		{/if}
	{/each}
</main>
<button class="btn btn-neutral btn-outline w-fit self-center mb-16" on:click={addText}
	>Add text section</button
>
<div class="flex flex-wrap gap-4 justify-center">
	<button class="btn btn-wide btn-info btn-lg mb-8" on:click={uploadProject}> save draft </button>
	<button
		class="btn btn-wide btn-warning btn-lg mb-8"
		on:click={() => {
			confirm('Are you sure you want to publish this project?');

			uploadProject();
		}}>Upload and publish</button
	>
</div>
