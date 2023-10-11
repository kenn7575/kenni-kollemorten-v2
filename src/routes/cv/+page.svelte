<script lang="ts">
	import Countdown from '$lib/components/countdown.svelte';
	import type { ICV } from '../../lib/types/interfaces';
	import designImg from '$lib/img/Design-process.svg';
	export let data;

	import LazyImg from '$lib/components/LazyImg.svelte';
	const cvData = data.cv[0] as ICV;

	let images = [
		'https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg'
	];
	let selectedImage = 0;

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
<Countdown />
<section class="w-full flex flex-col items-center mt-16">
	<p class="text-base-content/60 font-thin">Velkommen til mit</p>
	<h1 class="text-4xl font-bold">CV</h1>
	<img src={designImg} alt="cv" class="" />
</section>

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

<style>
	.small-grid {
		grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
		gap: 1rem;
	}
</style>
