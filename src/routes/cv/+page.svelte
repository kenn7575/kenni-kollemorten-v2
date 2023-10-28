<script lang="ts">
	import Countdown from '$lib/components/countdown.svelte';
	import type { ICV } from '../../lib/types/interfaces';
	export let data;

	import LazyImg from '$lib/components/LazyImg.svelte';
	import LazyImgVertical from '$lib/components/LazyImgVertical.svelte';
	const cvData = data.cv[0] as ICV;

	import CCNAITN from '$lib/img/CCNAITN.png';
	import introductionToCybersecurity from '$lib/img/introduction-to-cybersecurity.png';
	import IntersectionAnimationfrom from '$lib/components/IntersectionAnimation.svelte';
	import StackedAnimation from '$lib/components/StackedAnimation.svelte';
	import IntersectionAnimation from '$lib/components/IntersectionAnimation.svelte';

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
		class="bg-base-100 aspect-square p-16 rounded-full flex justify-center flex-col text-primary items-center sticky top-8"
	>
		<p class=" font-light text-2xl">Velkommen til mit</p>
		<h1 class="text-8xl font-bold">CV</h1>
	</div>
</section>

<!-- aprentice -->
<section class="mt-32 px-2 sm:px-6">
	<h2 class="text-center text-4xl font-semibold md:text-7xl text-primary mb-16">Praktikker</h2>
	<div class="divider" />
	<StackedAnimation>
		<div
			class="grid-container grid gap-4
			grid-cols-2
			md:grid-cols-3
			xl:grid-cols-6
		"
		>
			<div
				class="bg-primary/25 p-8 rounded-2xl
				col-span-2
				
				xl:col-start-1 xl:row-start-1 xl:col-span-3 xl:row-span-2
			"
			>
				<p class="text-primary font-light">Marts 2022</p>
				<h1 class="mt-8 text-3xl font-medium text-primary">TDC Group</h1>
				<p class="max-w-128 mt-4 text-base-content">
					Jeg var i skolepraktik hos TDC Group i én uge, hvor jeg lærte om fiber internet hvordan
					man organiserer fiber-kabler i hovedfordeler, samt installerede PDS stik. Jeg installerede
					bla.a. fiber i en helt boligblok.
				</p>
			</div>
			<div
				class="bg-neutral rounded-2xl overflow-hidden
				col-span-2
				md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1
				xl:col-span-3 xl:row-span-4 xl:col-start-4 xl:row-start-1"
			>
				<LazyImgVertical
					alt={'Fiber Installation i boligblok'}
					image={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/project_images%2Ff_nJpf58?alt=media&token=34191f40-a826-4e88-bcd4-3f2e950c642d'}
					aspectRatio="aspect-video"
					imageSmall={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/project_images%2Ff_small_nJpf58?alt=media&token=fc31f939-d3eb-481d-9122-30f8cecba782'}
				/>
			</div>
			<div
				class="bg-neutral rounded-2xl overflow-hidden
				col-span-1
				xl:col-span-2 xl:row-span-2 xl:col-start-1 xl:row-start-3"
			>
				<LazyImg
					alt={'Afisoleret fiber kabel'}
					image={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/project_images%2Ff_akcdlh?alt=media&token=41da27a2-1c07-4ed0-a696-71068e76bc40'}
					aspectRatio="aspect-video"
					imageSmall={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/project_images%2Ff_small_akcdlh?alt=media&token=85be1b25-bc1b-43dd-8fa5-7c2227b86054'}
				/>
			</div>
			<div
				class="bg-white rounded-2xl overflow-hidden
				xl:col-span-1 xl:row-span-2 xl:col-start-3 xl:row-start-3"
			>
				<LazyImg
					alt={'TDC Group logo'}
					ojbectFit="object-contain"
					image={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2FtdcGroup.webp?alt=media&token=a24b4cb1-a24d-476b-8b3c-9d01488bda3f&_gl=1*14js9as*_ga*MTg4NjYzNjYzNi4xNjk1NDg0NTQx*_ga_CW55HF8NVT*MTY5NzE4NzY2My4yMi4xLjE2OTcxODc3MTguNS4wLjA.'}
					aspectRatio="aspect-video"
					imageSmall={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2FtdcGroup_57x30.webp?alt=media&token=2715e53b-6209-4af5-94b3-e62ffabe967d&_gl=1*17dvdp7*_ga*MTg4NjYzNjYzNi4xNjk1NDg0NTQx*_ga_CW55HF8NVT*MTY5NzE4NzY2My4yMi4xLjE2OTcxODc3NzkuNjAuMC4w'}
				/>
			</div>
			<div
				class="bg-neutral rounded-2xl overflow-hidden
				col-span-1
				xl:col-span-1 xl:row-span-2 xl:col-start-1 xl:row-start-5"
			>
				<LazyImg
					alt={'Svendborg IT logo'}
					image={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fsvendborg.webp?alt=media&token=324b5897-7d3f-4033-98d8-86681446299c&_gl=1*18le3cb*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODM4NDcxOC4xLjEuMTY5ODM4NDc5MS40OS4wLjA.'}
					aspectRatio="aspect-video"
					imageSmall={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fsvendborg_40x30.webp?alt=media&token=f1f1d9de-345a-4412-9902-683b730e29ea&_gl=1*19v1suw*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODM4NDcxOC4xLjEuMTY5ODM4NDg4Mi42MC4wLjA.'}
				/>
			</div>
			<div
				class="bg-primary/25 p-8 rounded-2xl
				row-start-4 col-span-2
				md:row-start-3
			xl:col-start-2 xl:row-start-5 xl:col-span-2 xl:row-span-2"
			>
				<p class="text-primary font-light">December 2021</p>
				<h1 class="mt-8 text-3xl font-medium text-primary">Svendborg IT, Data & Digitalisering</h1>
				<p class="max-w-128 mt-4 text-base-content">
					Jeg var senere i en uges skolepraktik hos Svendborg Rådhus IT Data & Digitalisering. Der
					lærte jeg om netværk, infrastruktur og central bruger administration.
				</p>
			</div>
			<div
				class="bg-neutral rounded-2xl overflow-hidden
				xl:col-span-1 xl:row-span-2 xl:col-start-4 xl:row-start-5"
			>
				<LazyImg
					alt={'TDC net logo'}
					image={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Ftdc.webp?alt=media&token=bd985209-ebfd-43a8-a055-b920980f83c5&_gl=1*bzuurd*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODM4NDcxOC4xLjEuMTY5ODM4NDk0Mi42MC4wLjA.'}
					aspectRatio="aspect-video"
					imageSmall={'https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Ftdc_small.webp?alt=media&token=5a17cfa8-d0f1-4b5e-b6a3-9498a410f183&_gl=1*ko64mz*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODM4NDcxOC4xLjEuMTY5ODM4NDk1Ni40Ni4wLjA.'}
				/>
			</div>

			<div
				class="bg-primary/25 p-8 rounded-2xl
			xl:col-start-5 xl:row-start-5 col-span-2 xl:row-span-2"
			>
				<p class="text-primary font-light">September 2021</p>
				<h1 class="mt-8 text-3xl font-medium text-primary">TDC Net</h1>
				<p class="max-w-128 mt-4 text-base-content">
					Jeg var i én uges skolepraktik hos TDC Net, hvor jeg lærte om coax, kabel-tv og internet.
					Jeg lærte at afisolere coax-kabler, installere connectere og installere coax vægudtag.
				</p>
			</div>
		</div>
	</StackedAnimation>
</section>

<!-- Cercificates -->
<section class="mt-32 px-2 sm:px-6">
	<h2 class="text-center text-4xl font-semibold md:text-7xl text-primary">Certificeringer</h2>
	<div class="divider" />

	<IntersectionAnimationfrom>
		<div
			class="flex flex-col-reverse justify-around gap-8 mt-16 items-start lg:items-center
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
						undervisningsforløb. Jeg har lært alt det grundlæggende omkring Networking, og har fået
						en forståelse for hvordan internetet hænger sammen.
					</p>
				</div>
			</div>
		</div>
	</IntersectionAnimationfrom>
	<IntersectionAnimationfrom>
		<div
			class="flex flex-col-reverse justify-around gap-8 mt-16 mb-16 items-start lg:items-center
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
						undervisningsforløb. Jeg har lært alt det grundlæggende omkring Networking, og har fået
						en forståelse for hvordan internetet hænger sammen.
					</p>
				</div>
			</div>
		</div>
	</IntersectionAnimationfrom>
</section>

<!-- Erfaring -->
<section class="w-full flex flex-col justify-center mt-32 px-2 sm:px-6">
	<h2 class="text-center text-4xl font-semibold md:text-7xl text-primary mb-16">
		Erhvervserfaring
	</h2>
	<div class="divider" />

	<IntersectionAnimation direcrtion="up">
		<div
			class="flex flex-col-reverse gap-8 w-full
		lg:flex-row"
		>
			<div
				class=" flex flex-col gap-4
			lg:w-1/2"
			>
				<div class="mr-auto w-4/5">
					<LazyImg
						alt="Cafebiografen undenfor"
						aspectRatio="aspect-video"
						imageSmall="https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fcafe_out_small.webp?alt=media&token=8aee5769-8e84-45c1-a822-1e663d11eb2d&_gl=1*jzd7vh*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODQ4Njc5My4yLjEuMTY5ODQ4NjkzNC42MC4wLjA."
						image="https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fcafe_out.webp?alt=media&token=d848fbd8-1b15-4ff9-b8ed-ff3c08ae72f0&_gl=1*hxv3gl*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODQ4Njc5My4yLjEuMTY5ODQ4Njg3OS40MS4wLjA."
					/>
				</div>
				<div class="ml-auto w-4/5">
					<LazyImg
						alt="Cafebiografen undenfor"
						aspectRatio="aspect-video"
						imageSmall="https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fcafe_in_small.webp?alt=media&token=621d64ba-43ab-4dda-b56f-c442db4037e2&_gl=1*1sgl2sw*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODQ4Njc5My4yLjEuMTY5ODQ4NzQ3NS40NS4wLjA."
						image="https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fcafe_in.webp?alt=media&token=3872868c-8ee9-4186-bc3f-61b11603805b&_gl=1*bxylb9*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODQ4Njc5My4yLjEuMTY5ODQ4NzQ2MC42MC4wLjA."
					/>
				</div>
			</div>

			<div
				class="flex flex-col gap-8
				lg:w-1/2"
			>
				<p class="uppercase text-primary">Juli 2019 - Nu</p>
				<h3 class="text-4xl sm:text-6xl">Fritidsarbejde <br />på Cafebiografen</h3>
				<p class="ml-8">
					Jeg har arbejdet på cafebiografen siden juni 2019. I den tid har jeg lært en masse om
					kundeservice, og jeg har lært at arbejde i et team. Jeg har fået en masse gode kollegaer,
					og vi har et rigtig godt sammenhold.
				</p>
				<ul class="timeline ml-16">
					<li class="timeline-item pl-10 relative">
						<div class="timeline-infouppercase whitespace-nowrap">
							<span class="text-primary">Juli 2019</span>
						</div>
						<div class="timeline-marker absolute top-0 bottom-0 left-0 w-4" />
						<div class="timeline-content pb-10">
							<h3 class="mt-2 text-lg font-bold">Opvasker - ungarbejder</h3>
							<p class="mt-1">
								Jeg var en uge i praktik, og blev ansat som opvasker 6 måneder senere.
							</p>
						</div>
					</li>
					<li class="timeline-item pl-10 relative">
						<div class="timeline-info uppercase whitespace-nowrap">
							<span class="text-primary">Juni 2022</span>
						</div>
						<div class="timeline-marker absolute top-0 bottom-0 left-0 w-4" />
						<div class="timeline-content">
							<h3 class="mt-2 text-lg font-bold">Tjener - afrydder</h3>
							<p class="mt-1">Da jeg blev 18 år, blev jeg tjener og afrydder.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</IntersectionAnimation>
	<IntersectionAnimation direcrtion="up">
		<div
			class="flex flex-col-reverse gap-8 mt-16
		lg:flex-row-reverse"
		>
			<div
				class=" flex flex-col gap-4
			lg:w-1/2"
			>
				<LazyImg
					alt="Cafebiografen undenfor"
					aspectRatio="aspect-video"
					imageSmall="https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fcover_Mob_dev_53x30.webp?alt=media&token=2403bf90-999d-4215-a2d5-a5ae9978ea23&_gl=1*1lkrrjf*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODQ5MjQ3NC4zLjEuMTY5ODQ5MjYwNS4yLjAuMA.."
					image="https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/cv_images%2Fcover_Mob_dev.webp?alt=media&token=e3b432b7-0173-449c-b4ac-fe9d43abe52c&_gl=1*fi3itn*_ga*MTcwMDQ2NTI2OC4xNjk4Mzg0NzE4*_ga_CW55HF8NVT*MTY5ODQ5MjQ3NC4zLjEuMTY5ODQ5MjU5Mi4xNS4wLjA."
				/>
			</div>
			<div
				class="flex flex-col gap-8
			lg:w-1/2"
			>
				<p class="uppercase text-primary">Oktober 2023 - Nu</p>
				<h3 class="text-4xl sm:text-6xl">Stifter og interessent af InstaMatch I/S</h3>
				<p class="ml-8">
					Jeg og 3 af mine venner har startet et firma, hvor vi udvikler apps og hjemmesider. Det
					startede med en ide til en app, og vi er nu i gang med at udvikle den. Jeg lære en masse
					ogkring udvikling af apps, hjemmesider og markedsføring, og jeg har fået en masse erfaring
					inde for erhvervsøkonomi.
				</p>
			</div>
		</div>
	</IntersectionAnimation>
</section>

<!-- uddannelse -->
<section
	class="w-full flex flex-col justify-center items-center mb-16 mt-32 px-2 sm:px-6"
	id="advancements"
>
	<h2 class="text-center text-4xl font-semibold md:text-7xl text-primary mb-16">Uddannelse</h2>
	<div class="divider" />
	<div class="flex flex-col items-center w-full max-w-192">
		{#if cvData.advancements}
			{#each cvData.advancements as advancement, index}
				<div class="my-2 w-full sm:my-4">
					<div class="collapse collapse-arrow bg-base-200 border-2 border-primary">
						<input type="radio" name="my-accordion-2" checked={index == 0 ? true : false} />
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
	<div class="mt-8">
		<h2 class="text-2xl font-semibold text-center mb-4">Færdig med uddannelsen om</h2>
		<Countdown />
	</div>
</section>

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
	.grid-container :nth-child(2) {
		transition-delay: 300ms;
	}
	.grid-container :nth-child(3) {
		transition-delay: 100ms;
	}
	.grid-container :nth-child(4) {
		transition-delay: 200ms;
	}
	.grid-container :nth-child(5) {
		transition-delay: 400ms;
	}
	.grid-container :nth-child(6) {
		transition-delay: 500ms;
	}
	.grid-container :nth-child(7) {
		transition-delay: 600ms;
	}
	.grid-container :nth-child(8) {
		transition-delay: 700ms;
	}

	.grid-container :nth-child(9) {
		transition-delay: 800ms;
	}
	.grid-container :nth-child(10) {
		transition-delay: 900ms;
	}

	.timeline h3 {
		line-height: inherit;
	}

	.timeline-marker:before {
		background: var(--secondary);
		border: 3px solid transparent;
		border-radius: 100%;
		content: '';
		display: block;
		height: 15px;
		position: absolute;
		top: 4px;
		left: 0;
		width: 15px;
		transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
	}
	.timeline-marker:after {
		content: '';
		width: 3px;
		background: #ccd5db;
		display: block;
		position: absolute;
		top: 24px;
		bottom: 0;
		left: 6px;
	}
	.timeline-item:last-child .timeline-marker:after {
		content: none;
	}

	.timeline-item:not(.period):hover .timeline-marker:before {
		background: transparent;
		border: 3px solid var(--secondary);
	}
</style>
