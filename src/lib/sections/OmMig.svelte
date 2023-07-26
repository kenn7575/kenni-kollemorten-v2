<script lang="ts">
	import Me from '$lib/img/Me.jpeg';
	import getYear from '$lib/functions/hovedforløbUdregner';
	import calcAge from '$lib/functions/aldersUdregner';

	let year = getYear(new Date());
	let age = calcAge(new Date('2004-06-05'));
</script>

<section
	class="flex flex-col items-center justify-around gap-8 py-16 px-4 bg-base-100
    xl:px-16 xl:gap-16 md:flex-row xl:justify-between"
>
	<div class="avatar relative">
		<div class="w-56 md:w-64 mask mask-hexagon-2 z-10">
			<img src={Me} alt="Me" class="w-1/3 relative" />
		</div>
		<div
			class="mask mask-hexagon-2 absolute w-full h-full bg-primary/20 scale-110 -translate-x-10 -translate-y-10 z-0"
		/>
	</div>
	<div class="xl:w-full">
		<div class="max-w-128">
			<h3 class="text-3xl font-bold">Om mig 👋</h3>
			<p class=" text-base-content/70 text-lg">
				Jeg er {age} år og bor i svendborg. Jeg har en kæmpe passion for

				<span class="badge badge-outline badge-primary">programmering</span>
				og design af
				<span class="badge badge-outline badge-secondary">UI/UX</span> Jeg har lavet den her hjemmeside,
				fordi jeg mangler en elevplads i forbindelse med min uddandelse.
			</p>
		</div>
		<div class="mt-8 max-w-128 mx-auto">
			<h3 class="text-3xl font-bold">Uddannelse 📚</h3>
			<p class="text-base-content/70 text-lg">
				Jeg studere data og kommunikation, som datatekniker med speciale i programmering på Syddansk
				Erhvervsskole og er lige nu på
				<span class="badge badge-outline badge-primary">{year + 1}. år</span>
				Som datatekniker lære jeg at udvilke store og små software systemer, og hvordan man laver code
				som er
				<span class="badge badge-outline badge-primary">DRY</span>
				<span class="badge badge-outline badge-secondary">SOLID</span>
				<span class="badge badge-outline badge-secondary">læsbar</span>
			</p>
			<a href="/cv" class="btn btn-primary mt-4">
				Gå til CV
				<i class="fa-solid fa-arrow-right" />
			</a>
		</div>
		<div class="max-w-128 ml-auto">
			<h3 class="text-3xl font-bold mt-8">Programmering 👾</h3>
			<p class="text-base-content/70 text-lg">
				Jeg har stor erfaring med at udvikle i
				<span class="badge badge-outline badge-primary">JavaScript</span>
				og
				<span class="badge badge-outline badge-secondary">C#</span>

				Jeg arbejder meget med
				<span class="badge badge-outline badge-secondary">Webudvikling</span>
				både front- og backend, og med frameworks som bl.a.
				<span class="badge badge-outline badge-error">Svelte</span>
				<span class="badge badge-outline badge-error">SvelteKit</span>
			</p>
			<a href="/cv" class="btn btn-primary mt-4">
				Gå til projekter
				<i class="fa-solid fa-arrow-right" />
			</a>
		</div>
	</div>
</section>
