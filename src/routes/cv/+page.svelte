<script lang="ts">
	import Countdown from '$lib/components/countdown.svelte';
	import type { ICV } from '../../lib/types/interfaces';
	export let data;

	import LazyImg from '$lib/components/LazyImg.svelte';
	const cvData = data.cv[0] as ICV;

	let selectedImage = 0;

	import CCNAITN from '$lib/img/CCNAITN.png';
	import introductionToCybersecurity from '$lib/img/introduction-to-cybersecurity.png';

	let spinDeg = 0;
	let lastYPos = 0;
	let yPos = 0;
	$: scrollHandler(yPos, lastYPos);
	//increase the degree of rotation on scroll
	function scrollHandler(yPosition: number, lastYPosition: number) {
		if (yPosition > lastYPosition) {
			spinDeg += 0.5;
		} else if (yPosition < lastYPosition) {
			spinDeg -= 0.5;
		}
		lastYPos = yPosition;
	}
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="personal portfolio website" />
</svelte:head>
<svelte:window bind:scrollY={yPos} />

<!-- intro -->
<section id="ddd" class="w-full flex flex-col items-center justify-center">
	<div
		class="bg-base-100 aspect-square p-16 rounded-full flex justify-center flex-col text-primary items-center"
	>
		<p class=" font-light text-2xl">Velkommen til mit</p>
		<h1 class="text-8xl font-bold">CV</h1>
	</div>
</section>

<section class="mt-16">
	<h2 class="text-center text-4xl font-semibold md:text-7xl text-primary">Certificeringer</h2>
	<div
		class="flex flex-col-reverse justify-around px-8 gap-8 mt-16 items-start lg:items-center
	 lg:flex-row lg:mx-16"
	>
		<a
			class="w-full lg:w-1/2 flex justify-start"
			target="_blank"
			href="https://www.credly.com/badges/29150412-3701-4e4c-965d-5dc73959554a/public_url"
			aria-label="Se badge"
		>
			<img class="w-96 object-contain" src={CCNAITN} alt="Badge" />
		</a>
		<div class="">
			<p class="uppercase text-primary">Cisco</p>
			<h3 class="text-4xl mt-4 sm:text-6xl">Certified Network Associate</h3>
			<div class="flex mt-8 gap-4">
				<i class="fa-solid fa-user-graduate text-3xl text-primary" />
				<p class=" text-base-content/80 max-w-128 tracking-wide">
					Jeg har taget Cisco CCNA introduction to networks, som er et 70 timers
					undervisningsforløb. Jeg har lært alt det grundlæggende omkring Networking, og har fået en
					forståelse for hvordan internetet hænger sammen.
				</p>
			</div>
		</div>
	</div>

	<div
		class="flex flex-col-reverse justify-around px-8 gap-8 mt-32 mb-16 items-start lg:items-center
	 lg:flex-row-reverse lg:mx-16"
	>
		<a
			class="w-full lg:w-1/2 flex justify-start lg:justify-end"
			target="_blank"
			href="https://www.credly.com/badges/ab0dc599-2084-42ef-a7c4-c20bd5911fcf/public_url"
			aria-label="Se badge"
		>
			<img class="w-96 object-contain" src={introductionToCybersecurity} alt="Badge" />
		</a>
		<div class="">
			<p class="uppercase text-primary">Cisco</p>
			<h3 class="text-4xl mt-4 sm:text-6xl">Certified Cybersecurity Associate</h3>
			<div class="flex mt-8 gap-4">
				<i class="fa-solid fa-user-graduate text-3xl text-primary" />
				<p class=" text-base-content/80 max-w-128 tracking-wide">
					Jeg har taget Cisco CCNA introduction to networks, som er et 70 timers
					undervisningsforløb. Jeg har lært alt det grundlæggende omkring Networking, og har fået en
					forståelse for hvordan internetet hænger sammen.
				</p>
			</div>
		</div>
	</div>
</section>
<div class="divider" />
<section class="w-full flex justify-center px-2 mt-16 sm:px-8" id="advancements">
	<div class="flex flex-col items-center w-full max-w-192">
		<h1 class="text-4xl font-bold">Uddannelse</h1>
		{#if cvData.advancements.reverse()}
			{#each cvData.advancements as advancement, index}
				<div class="my-2 w-full sm:my-4">
					<div class="collapse collapse-arrow bg-base-200 border-2 border-primary">
						<input
							type="radio"
							name="my-accordion-2"
							on:click={() => {
								selectedImage = index;
							}}
							checked={index == 0 ? true : false}
						/>
						<div class="collapse-title text-xl font-medium">
							<p class="font-thin text-base-content/60 text-sm">{advancement.time}</p>
							<h3 class="text-2xl font-bold">{advancement.title}</h3>
							<p class="font-thin text-base">{advancement.place}</p>
						</div>
						<div class="collapse-content">
							{#each advancement?.content ?? [{ subject: 'Ingen karaktere i perioden' }] as text, index}
								<div class="flex mt-4 flex-wrap">
									<p class="font-bold text-primary">{text.subject}</p>
									{#if text.view}
										<div class="divider divider-horizontal" />
										<p class="text-base-content/80">Standpunkt: {text.view}</p>
									{/if}
									{#if text.grade}
										<div class="divider divider-horizontal" />
										<p class="text-base-content/80">Karakter: {text.grade}</p>
									{/if}
									{#if text.other}
										<div class="divider divider-horizontal" />
										<p class="text-base-content/80">{text.other}</p>
									{/if}
								</div>
								{#if index != advancement.content?.length - 1 && advancement.content?.length > 1}
									<div class="divider m-2 before:h-0.32 after:h-0.32" />
								{/if}
							{/each}
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>
<section class="w-full flex flex-col justify-center px-2 mt-32 sm:px-8 mb-16">
	<h1 class="text-4xl font-bold my-8 text-center">Praktikker</h1>
	<div class="w-full flex justify-center">
		<div class="carousel carousel-center space-x-8 xl:space-x-16">
			{#each cvData.apprenticeships as apprenticeship}
				<div class="carousel-item border border-base-content rounded-2xl">
					<div class="card bg-primary rounded-2xl w-80 shadow-primary text-primary-content">
						<figure>
							<LazyImg
								alt={apprenticeship.title}
								image={apprenticeship.image}
								aspectRatio="aspect-video"
								imageSmall={apprenticeship.image_small}
							/>
						</figure>
						<div class="card-body">
							<div class="badge badge-outline mb-2">
								{apprenticeship.time}
							</div>
							<h2 class="card-title mb-2">{apprenticeship.title}</h2>
							<p>{apprenticeship.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<Countdown />

<style>
	#ddd {
		height: calc(100vh - 4rem);
		background-color: #e5e5f7;
		opacity: 0.8;
		background-image: radial-gradient(circle at center center, var(--primary), #e5e5f7),
			repeating-radial-gradient(
				circle at center center,
				var(--primary),
				var(--primary),
				10px,
				transparent 40px,
				transparent 20px
			);
		background-blend-mode: multiply;
	}
	* {
		/* border: red 1px solid; */
	}
</style>
