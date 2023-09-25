<script lang="ts">
	import LazyImg from '$lib/components/LazyImg.svelte';
	import type { IProjectToUpload } from '$lib/types/interfaces';
	import { compressImage } from '$lib/functions/compressImage';
	import { convertToWebp } from '$lib/functions/convertToWebp';
	import { loadImage } from '$lib/functions/loadImage';
	import { goto } from '$app/navigation';
	import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
	import { firebaseStorage } from '$lib/firebase';
	import { fade, fly } from 'svelte/transition';

	let messages: { message: string; type: string }[] = [];
	$: console.log(messages);

	let loading = false;
	let progress = 0;
	let progressText = '';

	//function to remove messages at first index after 5 seconds
	function clearMessage(message: string) {
		let index = messages.findIndex((m) => m.message === message);
		setTimeout(() => {
			messages.splice(index, 1);
			messages = messages;
		}, 5000);
	}

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
		imageFile: null,
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
				code: [''],
				imageFile: null
			}
		]
	};

	$: console.log(project);
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
		loading = true;
		progress = 0;
		const progressPart = 100 / (project.text.length + 2);

		//validate links
		let linksFailed = false;
		project.links.forEach((link, index) => {
			if (!link.name) {
				messages.push({ message: 'Missing name in link ' + index, type: 'warning' });
				messages = messages;
				loading = false;
				linksFailed = true;
			}
			if (!link.url) {
				messages.push({ message: 'Missing url in link ' + index, type: 'warning' });
				messages = messages;
				loading = false;
				linksFailed = true;
			}
		});
		if (linksFailed) return;
		//validate clips
		let clipsFailed = false;
		project.clips.forEach((clip, index) => {
			if (!clip) {
				messages.push({ message: 'Missing clip ' + index, type: 'warning' });
				messages = messages;
				loading = false;
				clipsFailed = true;
			}
		});
		if (clipsFailed) return;

		//validate title
		if (!project.title) {
			messages.push({ message: 'Missing title', type: 'warning' });
			messages = messages;
			loading = false;
			return;
		}
		//validate subtitle
		if (!project.subtitle) {
			messages.push({ message: 'Missing subtitle', type: 'warning' });
			messages = messages;
			loading = false;
			return;
		}
		//validate label
		if (!project.label) {
			messages.push({ message: 'Missing label', type: 'warning' });
			messages = messages;
			loading = false;
			return;
		}
		//validate description
		if (!project.description) {
			messages.push({ message: 'Missing description', type: 'warning' });
			messages = messages;
			loading = false;
			return;
		}
		//validate dateCreated
		if (!project.dateCreated) {
			messages.push({ message: 'Missing dateCreated', type: 'warning' });
			messages = messages;
			loading = false;
			return;
		}

		//validate text
		project.text.forEach((section, index) => {
			if (!section.title) {
				messages.push({ message: 'Missing title in section ' + index, type: 'warning' });
				messages = messages;
				loading = false;
				return;
			}
			if (!section.description) {
				messages.push({ message: 'Missing description in section ' + index, type: 'warning' });
				messages = messages;
				loading = false;
				return;
			}
		});

		//validate images
		progressText = 'Uploading main images';
		if (!project.imageFile || !project.imageSmallFile) {
			messages.push({ message: 'Missing main image', type: 'error' });
			messages = messages;
			loading = false;
			return;
		}

		//upload images
		const images = await uploadImageToFirebase(
			project.imageFile,
			project.imageSmallFile,
			project.title
		);
		if (!images) {
			messages.push({ message: 'Error uploading main image', type: 'error' });
			messages = messages;
			loading = false;
			return;
		}
		progress += progressPart;
		project.image = images.image;
		project.imageSmall = images.imageSmall;
		//delete image files
		delete project.imageFile;
		delete project.imageSmallFile;

		//upload text images
		for (let i = 0; i < project.text.length; i++) {
			progressText = 'Uploading section images' + i;

			if (!project.text[i].imageFile || !project.text[i].imageSmallFile) {
				messages.push({ message: 'Missing section image at index ' + i, type: 'error' });
				messages = messages;
				loading = false;
				return;
			}
			if (!project.text[i].title) {
				messages.push({ message: 'Missing section title at index ' + i, type: 'error' });
				messages = messages;
				loading = false;
				return;
			}
			const images = await uploadImageToFirebase(
				project.text[i].imageFile!,
				project.text[i].imageSmallFile!,
				project.text[i].title
			);
			if (!images) {
				messages.push({ message: 'Error uploading text image', type: 'error' });
				messages = messages;
				loading = false;
				return;
			}
			progress += progressPart;

			project.text[i].image = images.image;
			project.text[i].imageSmall = images.imageSmall;
			delete project.text[i].imageFile;
			delete project.text[i].imageSmallFile;
		}
		progressText = 'Uploading project data';
		const res = await fetch('/api/projekter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(project)
		});
		progress += progressPart;
		loading = false;
		if (res.ok) {
			progressText = 'Done!';
			const data = await res.json();
			goto('/projekter/' + data.id);
		} else {
			messages.push({ message: 'Error uploading project data', type: 'error' });
			messages = messages;
			loading = false;
			return;
		}
	}

	async function uploadImageToFirebase(
		image: string,
		imageSmall: string,
		imageName: string
	): Promise<{ imageSmall: string; image: string } | void> {
		try {
			if (!image || !imageSmall) return;
			//bucket project_images
			const storageRef = ref(firebaseStorage, 'project_images/' + imageName);
			const storageRefSmall = ref(firebaseStorage, 'project_images/' + imageName + '_small');
			//upload image
			const imgBlob = await fetch(image).then((r) => r.blob());
			const imgSmallBlob = await fetch(imageSmall).then((r) => r.blob());

			const snapshot = await uploadBytes(storageRef, imgBlob);
			const snapshotSmall = await uploadBytes(storageRefSmall, imgSmallBlob);
			//get download url
			const imageURL = await getDownloadURL(snapshot.ref);
			const imageSmallURL = await getDownloadURL(snapshotSmall.ref);

			return { imageSmall: imageSmallURL, image: imageURL };
		} catch (err) {
			console.log(err);
		}
	}

	async function uploadImage(e: any): Promise<{ image: string; imageSmall: string } | void> {
		const file: File | undefined = e.target.files[0];

		if (file) {
			const imageUrl = URL.createObjectURL(file);
			try {
				const img = await loadImage(imageUrl);
				const _convertedImage = convertToWebp(img);
				if (!_convertedImage) {
					messages.push({ message: 'Error converting image', type: 'error' });
					messages = messages;
					return;
				}
				const compressedImage = await compressImage(_convertedImage, 30);
				if (!compressedImage) {
					messages.push({ message: 'Error compressing image', type: 'error' });
					messages = messages;
					return;
				}
				const message = 'Image uploaded, converted and compressing seccessfully';
				messages.push({ message, type: 'success' });
				messages = messages;
				clearMessage(message);
				return {
					image: _convertedImage,
					imageSmall: compressedImage
				};
			} catch (error) {
				// Handle errors, e.g., when loading the image fails.
			}
		}
	}
</script>

<svelte:head>
	<title>ADMIN</title>
	<meta name="description" content="Admin page for adding new projects" />
</svelte:head>
<div class="fixed left-0 right-0 p-4 flex flex-col gap-2 z-50">
	{#each messages as message, index}
		<div class="alert alert-{message.type} f-full" in:fly={{ duration: 500, y: -25 }} out:fade>
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
			<span>{message.message}</span>
			<div>
				<button
					on:click={() => {
						messages.splice(index, 1);
						messages = messages;
					}}
					name="delete-message"
					class="btn btn-sm btn-ghost"><i class="fa-solid fa-minus" /></button
				>
			</div>
		</div>
	{/each}
</div>

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
		<LazyImg
			image={project.imageFile ?? 'https://placehold.co/600x400/555/aaa'}
			imageSmall={project.imageSmallFile ?? 'https://placehold.co/45x30/555/aaa'}
			alt={project.title}
		/>
		<div class="form-control w-full max-w-xs absolute p-8 bg-base-100/50 rounded-2xl backdrop-blur">
			<label class="label" for="main-image">
				<span class="label-text font-semibold">Pick the main image</span>
			</label>
			<input
				on:change={async (e) => {
					const images = await uploadImage(e);
					if (!images) return;
					project.imageFile = images.image;
					project.imageSmallFile = images.imageSmall;
				}}
				name="main-image"
				bind:value={project.imageFile}
				type="file"
				aria-label="main-image"
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
					image={project.text[sectionIndex].imageFile ?? 'https://placehold.co/600x400/555/aaa'}
					imageSmall={project.text[sectionIndex].imageSmallFile ??
						'https://placehold.co/45x30/555/aaa'}
					alt={project.text[sectionIndex].title}
				/>

				<div
					class="form-control w-full max-w-xs absolute p-8 bg-base-100/50 rounded-2xl backdrop-blur"
				>
					<label class="label" for="main-image">
						<span class="label-text font-semibold">Pick the main image</span>
					</label>
					<input
						on:change={async (e) => {
							const images = await uploadImage(e);
							if (!images) return;
							project.text[sectionIndex].imageFile = images.image;
							project.text[sectionIndex].imageSmallFile = images.imageSmall;
						}}
						name="main-image"
						bind:value={project.text[sectionIndex].imageFile}
						type="file"
						aria-label="main-image"
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
	<button class="btn btn-wide btn-info btn-lg mb-8"> save draft </button>

	<button
		class="btn btn-wide btn-warning btn-lg mb-8"
		on:click={() => {
			confirm('Are you sure you want to publish this project?');

			uploadProject();
		}}>Upload and publish</button
	>
</div>
{#if loading}
	<div
		class="fixed top-0 left-0 w-screen h-screen bg-base-100 bg-opacity-75 flex justify-center items-center"
	>
		<div class="flex flex-col gap-16 items-center w-full p-16">
			<span class="loading loading-spinner loading-lg bg-warning" />
			<div class="flex flex-col w-full gap-2 items-center">
				<p class="text-lg">{progressText}</p>
				<progress class="progress w-full" value={progress} max="100" />
			</div>
		</div>
	</div>
{/if}
