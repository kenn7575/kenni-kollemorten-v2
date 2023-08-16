<script lang="ts">
	import agreement from '$lib/img/Agreement.svg';
	import coworking from '$lib/img/Co-working.svg';
	import customersurvey from '$lib/img/Customer-survey.svg';
	import coding from '$lib/img/coding.svg';
	import type { PageData } from './$types';

	export let data: PageData;

	function SmoothVerticalScrolling(e: any, time: number, where: string) {
		var element = document.getElementById(e);
		if (!element) return;
		console.log(element);
		var eTop = element.getBoundingClientRect().top - 100;
		var eAmt = eTop / 100;
		var curTime = 0;
		while (curTime <= time) {
			window.setTimeout(SVS_B, curTime, eAmt, where);
			curTime += time / 100;
		}
	}

	function SVS_B(eAmt: any, where: string) {
		if (where == 'center' || where == '') window.scrollBy(0, eAmt / 2);
		console.log(eAmt);
		if (where == 'top') window.scrollBy(0, eAmt);
	}
</script>

<section class="flex items-center flex-col pt-16 pb-32">
	<p class="text-base-content/60 font-thin">At ansætte en elev er simpelt</p>
	<h1 class="font-bold text-4xl mt-2">Bare følg disse 3 trin</h1>

	<div class="flex mt-16 flex-col gap-8 md:gap-4 md:flex-row px-2 md:px-4">
		<div class="card w-96 md:w-1/3 bg-base-100 border-base-content/500 border">
			<div class="card-body">
				<h2 class="card-title text-3xl text-base-content/60">1</h2>
				<p>Bliv godkendt</p>
			</div>
			<figure><img src={customersurvey} alt="Shoes" /></figure>
			<button
				on:click={() => {
					SmoothVerticalScrolling('bliv-godkendt', 400, 'top');
				}}
				class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Læs mere</button
			>
		</div>
		<div class="card w-96 md:w-1/3 bg-base-100 border-base-content/500 border">
			<div class="card-body">
				<h2 class="card-title text-3xl text-base-content/60">2</h2>
				<p>Vælg uddannelsesaftale</p>
			</div>
			<figure><img src={coworking} alt="Shoes" /></figure>
			<button
				on:click={() => {
					SmoothVerticalScrolling('Vaelg-uddannelsesaftale', 400, 'top');
				}}
				class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Læs mere</button
			>
		</div>

		<div class="card w-96 md:w-1/3 bg-base-100 border-base-content/500 border">
			<div class="card-body">
				<h2 class="card-title text-3xl text-base-content/60">3</h2>
				<p>Underskriv</p>
			</div>
			<figure><img src={agreement} alt="Shoes" /></figure>

			<button
				on:click={() => {
					SmoothVerticalScrolling('underskriv', 400, 'top');
				}}
				class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Læs mere</button
			>
		</div>
	</div>
</section>
<div class="divider" />
<section class="pt-16 pb-32 flex items-center flex-col">
	<h1 class="font-bold text-4xl">Men først</h1>
	<p class="text-base-content font-thin my-2">Lidt infomation om uddandelsesforløbet</p>
	<button
		on:click={() => {
			SmoothVerticalScrolling('bliv-godkendt', 400, 'top');
		}}
		class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Spring over</button
	>
</section>
<section class="px-4 md:px-8 flex flex-col items-center w-full" id="intro">
	<h1 class="font-normal text-3xl text-center">Læringsgrundlag</h1>

	<article class="flex mt-16 w-full items-center flex-col-reverse md:flex-row">
		<div class="w-1/2">
			<h2 class="text-xl font-semibold">Jeg lære om disse emner</h2>
			<ul class="text-base-content/60 mt-4">
				<li>
					<p class="leading-normal">
						<span class="text-base-content font-bold">1. </span>Grundlaggende- og
						objektorienteret-programmering i teori og praksis.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">2. </span>At udvikle software under temaer
						som; Backend, Businesslogic og Frontend ud fra princippet om Separation of Concerns.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">3. </span>At arbejde Agilt og teamorienteret
						med Scrum, Kanban og Extreme programming.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">4. </span>Software arkitekturer og design
						patterns fx Singleton, Factory og MVC
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">5. </span>Normalisering, design og
						implementering af databaser med SQL
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">6. </span>Teori og afprovning af Big Data og
						Machine Learning.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">7. </span>Software udviklingsprojekter fra
						design og styring til produktion.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">8. </span>Debugging og test med UnitTesting,
						TDD og integration tests.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">9. </span>Udvikling af services og APl'er
						herunder REST baseret web-services.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">10. </span>UX-design og udvikling af
						brugergranseflader.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">11. </span>Cross-platform App udvikling.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">12. </span>Udvikling til embedded systemer
						herunder: IOT.
					</p>
				</li>
				<li class="mt-2">
					<p class="leading-normal">
						<span class="text-base-content font-bold">13. </span>Dokumentation og udvikling med UML
						og versionsstyring med GIT.
					</p>
				</li>
			</ul>
			<a href="https://itd.sde.dk/?edu=programming&s_type=EUD" class="btn btn-primary mt-4"
				>Se hovedforløb</a
			>
		</div>
		<figure class="w-full md:w-1/2">
			<img src={coding} alt="CodingWorkshop" />
		</figure>
	</article>
	<h1 class="">Opbygning</h1>
	<h1 class="">Løn og økonomi</h1>
	<h1>Lærepladsen.dk</h1>
</section>
<section id="bliv-godkendt">
	<h1 class="h-screen">Bliv godkendt</h1>
</section>
<section id="Vaelg-uddannelsesaftale">
	<h1 class="h-screen">Vlæg uddannelsesaftale</h1>
</section>
<section id="underskriv">
	<h1 class="h-screen">Skriv under</h1>
</section>
