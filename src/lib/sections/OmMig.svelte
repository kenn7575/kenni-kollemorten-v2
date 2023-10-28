<script lang="ts">
	import Me from '$lib/img/Me.webp';
	import MeSmall from '$lib/img/MeSmall.jpeg';
	import getYear from '$lib/functions/hovedforløbUdregner';
	import calcAge from '$lib/functions/aldersUdregner';
	import LazyImg from '$lib/components/LazyImg.svelte';
	import IntersectionAnimation from '$lib/components/IntersectionAnimation.svelte';
	let year = getYear(new Date());
	let age = calcAge(new Date('2004-06-05'));
</script>

<section
	class="flex flex-col items-center justify-around gap-16 py-16 px-4 bg-base-100
    xl:px-16 xl:gap-16 md:flex-row xl:justify-between"
>
	<div class="avatar relative">
		<div class="w-56 md:w-64 mask mask-hexagon-2 z-10 flex items-center">
			<LazyImg alt="Me" image={Me} imageSmall={MeSmall} aspectRatio="aspect-squre" />
		</div>
		<div
			class="mask mask-hexagon-2 absolute w-full h-full bg-primary/20 scale-110 -translate-x-10 -translate-y-10 z-0"
		/>
	</div>
	<div class="xl:w-full">
		<IntersectionAnimation direcrtion="right">
			<div class="max-w-128 mb-16">
				<h3 class="text-3xl font-bold mb-4">Om mig 👋</h3>

				<p class=" text-base-content/70 text-lg">
					Jeg er {age} år og bor i svendborg. Jeg har en kæmpe passion for

					<span class="badge badge-outline badge-secondary">programmering</span>
					og design af
					<span class="badge badge-outline badge-secondary">UI/UX</span> Jeg har lavet den her
					hjemmeside, fordi jeg mangler en
					<span class="rotate-3 underline text-base-content">elevplads</span>
					i forbindelse med min uddandelse.
				</p>
				<a href=" https://github.com/kenn7575" target="_blank" class="btn btn-outline mt-4">
					github
					<i class="fa-brands fa-github text-3xl" />
				</a>
			</div>
		</IntersectionAnimation>
		<IntersectionAnimation direcrtion="right">
			<div class="mt-8 max-w-128 mx-auto xl:!delay-150 mb-16">
				<h3 class="text-3xl font-bold mb-4">Uddannelse 📚</h3>

				<p class="text-base-content/70 text-lg">
					Jeg studere data og kommunikation, som datatekniker med speciale i programmering på
					Syddansk Erhvervsskole og er lige nu på
					<span class="badge badge-outline badge-secondary">{year}. år</span>
					Som datatekniker lære jeg at udvilke store og små software systemer, og hvordan man laver code
					som er
					<span class="badge badge-outline badge-secondary">DRY</span>
					<span class="badge badge-outline badge-secondary">SOLID</span>
					<span class="badge badge-outline badge-secondary">læsbar</span>
				</p>
				<a href="/cv" class="btn btn-primary mt-4">
					Gå til CV
					<i class="fa-solid fa-arrow-right" />
				</a>
			</div>
		</IntersectionAnimation>
		<IntersectionAnimation direcrtion="right">
			<div class=" max-w-128 ml-auto xl:!delay-300">
				<h3 class="text-3xl font-bold mt-8 mb-4">Programmering 👾</h3>

				<p class="text-base-content/70 text-lg">
					Jeg har stor erfaring med at udvikle i
					<span class="badge badge-outline badge-secondary">JavaScript</span>
					og
					<span class="badge badge-outline badge-secondary">C#</span>

					Jeg arbejder meget med
					<span class="badge badge-outline badge-secondary">Webudvikling</span>
					både front- og backend, og med frameworks som bl.a.
					<span class="badge badge-outline badge-secondary">Svelte</span>
					<span class="badge badge-outline badge-secondary">SvelteKit</span>
				</p>

				<a href="/projekter" class="btn btn-primary mt-4">
					Gå til projekter
					<i class="fa-solid fa-arrow-right" />
				</a>
			</div>
		</IntersectionAnimation>
	</div>
</section>
