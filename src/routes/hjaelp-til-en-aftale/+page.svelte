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

<svelte:head>
	<title>Hlælp til en aftale - Portfolio website</title>
	<meta
		name="description"
		content="Discover how our tailored solutions empower companies to find and nurture top talent. Transform your hiring process and build a dynamic team for the future."
	/>
	<meta charset="utf-8" />
	<meta
		name="keywords"
		content="kenni, kollemorten, kenni kollemorten, portfolio, læreplads, elevplads, apprenticeship"
	/>
	<meta name="author" content="Kenni Kollemorten" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Help providing an apprenticeship" />
</svelte:head>
<section class="flex px-4 lg:px-8 items-center flex-col my-16">
	<p class="text-base-content/60 font-thin">At ansætte en elev er simpelt</p>
	<h1 class="font-bold text-4xl mt-2">Bare følg disse 3 trin</h1>

	<div class="flex mt-16 flex-col gap-8 md:gap-4 md:flex-row px-2 md:px-4">
		<div class="card w-full max-w-128 md:w-1/3 bg-base-100 border-base-content/500 border">
			<div class="card-body">
				<h2 class="card-title text-3xl text-base-content/60">1</h2>
				<p>Bliv godkendt</p>
			</div>
			<figure><img src={customersurvey} alt="Bliv godgendt" /></figure>
			<button
				on:click={() => {
					SmoothVerticalScrolling('bliv-godkendt', 400, 'top');
				}}
				class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Læs mere</button
			>
		</div>
		<div class="card w-full max-w-128 md:w-1/3 bg-base-100 border-base-content/500 border">
			<div class="card-body">
				<h2 class="card-title text-3xl text-base-content/60">2</h2>
				<p>Vælg uddannelsesaftale</p>
			</div>
			<figure><img src={coworking} alt="uddannelsesaftale" /></figure>
			<button
				on:click={() => {
					SmoothVerticalScrolling('Vaelg-uddannelsesaftale', 400, 'top');
				}}
				class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Læs mere</button
			>
		</div>

		<div class="card w-full max-w-128 md:w-1/3 bg-base-100 border-base-content/500 border">
			<div class="card-body">
				<h2 class="card-title text-3xl text-base-content/60">3</h2>
				<p>Underskriv</p>
			</div>
			<figure><img src={agreement} alt="Underskriv" /></figure>

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
<section class="my-16 px-8 flex items-center flex-col">
	<h1 class="font-bold text-4xl">Men først</h1>
	<p class="text-base-content font-thin my-2">Lidt infomation om uddandelsesforløbet</p>
	<button
		on:click={() => {
			SmoothVerticalScrolling('bliv-godkendt', 400, 'top');
		}}
		class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Spring over</button
	>
</section>
<section class="my-16 px-8 flex flex-col items-center w-full" id="intro">
	<h1 class="font-normal text-3xl text-center">Læringsgrundlag</h1>

	<article class="flex my-16 w-full items-center flex-col-reverse md:flex-row">
		<div class="w-full md:w-1/2">
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
			<a
				rel="noreferrer"
				target="_blank"
				href="https://itd.sde.dk/?edu=programming&s_type=EUD"
				class="btn btn-primary mt-4">Se hovedforløb</a
			>
		</div>
		<figure class="w-full md:w-1/2">
			<img src={coding} alt="CodingWorkshop" />
		</figure>
	</article>
	<div class="flex flex-col xl:flex-row gap-4">
		<article class="my-16 flex flex-col items-center">
			<h1 class="font-normal mt-16 text-3xl text-center">Opbygning</h1>
			<p class="mt-8 max-w-128 text-center">
				Uddannelsen til datatekniker veksler mellem skoleophold og tid pá larepladsen, hvor
				størstedelen af uddannelsen foregar ude hos jer i virksomheden.
			</p>
			<a
				rel="noreferrer"
				target="_blank"
				href="https://firebasestorage.googleapis.com/v0/b/kenni-kollemorten.appspot.com/o/project_images%2Fresources%2FAns%C3%A6t%20en%20l%C3%A6rling.pdf?alt=media&token=69b21e75-a404-4101-ae74-8c26ba01d04f"
				class="btn btn-primary mt-8">Se pdf</a
			>
		</article>
		<div class="divider divider-horizontal hidden xl:flex" />

		<article class="my-16 flex flex-col items-center">
			<h1 class="font-normal mt-16 text-3xl text-center">Løn og økonomi</h1>
			<p class="mt-8 max-w-128 text-center">
				Som virksomhed betaler I lærlingeløn efter gældende overenskomst. I modtager refusion til
				løn og kørsel, når lærlingen er på skoleophold.
			</p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.sde.dk/tilskud"
				class="btn btn-primary mt-8">Læs mere</a
			>
		</article>
		<div class="divider divider-horizontal hidden xl:flex" />
		<article class="my-16 flex flex-col items-center">
			<h1 class="font-normal mt-16 text-3xl text-center">Lærepladsen.dk</h1>
			<p class="mt-8 max-w-128 text-center">
				Lærepladsen.dk er et mødested for elever og virksomheder. Medarbejdere på erhvervsskoler kan
				anvende Lærepladsen.dk som værktøj til formidling af lærepladser og støtte for både elever
				og virksomheder.
			</p>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.laerepladsen.dk/"
				class="btn btn-primary mt-8">Besøg</a
			>
		</article>
	</div>
</section>
<div class="divider" />

<section class="flex px-4 lg:px-8 items-center flex-col my-16" id="bliv-godkendt">
	<h1 class="font-bold text-4xl mt-2">
		<span class="text-primary">#1</span>
		Bliv godkendt
	</h1>
	<div class="stats stats-vertical lg:stats-horizontal shadow mt-16">
		<div class="stat">
			<div class="stat-figure text-secondary">
				<i class="fa-solid fa-circle-check text-3xl" />
			</div>
			<div class="stat-title text-base-content text-md xl:text-2xl">Godkendte læresteder</div>
			<div class="stat-value text-secondary text-4xl xl:text-5xl xl:my-2">56,000+</div>
			<div class="stat-desc text-base-content text-xs xl:text-sm">Hop med på bøjlen!</div>
		</div>
		<div class="stat border">
			<div class="stat-figure text-primary">
				<i class="fa-solid fa-bolt text-3xl" />
			</div>
			<div class="stat-title text-base-content text-md xl:text-2xl">Ledige lærepladser</div>
			<div class="stat-value text-primary text-4xl xl:text-5xl xl:my-2">2,800+</div>
			<div class="stat-desc text-base-content text-xs xl:text-sm">
				På tværs af alle uddannelser.
			</div>
		</div>
		<div class="stat border">
			<div class="stat-figure text-error">
				<i class="fa-solid fa-triangle-exclamation text-3xl" />
			</div>
			<div class="stat-title text-base-content text-md xl:text-2xl">Ledige lærepladser</div>
			<div class="stat-value text-error text-4xl xl:text-5xl xl:my-2">1 {'<'}</div>
			<div class="stat-desc text-base-content text-xs xl:text-sm">
				Datatekniker med programmering
			</div>
		</div>
	</div>
	<p class="mt-16 max-w-192 text-center">
		Som du kan se, er altalet af ledige lærepladser inde for mit fag meget lavt. Det er en skam,
		fordi der er hundredvis af datatekniker elever som mangler en læreplads. Men i kan stadig nå at
		gøre en forskel, og blive godkendt til at tage elever/lærlinge.
	</p>
	<a
		rel="noreferrer"
		target="_blank"
		href="https://pms.laerepladsen.dk/laerested-ansoeg-godkendelse"
		class="btn btn-primary mt-8">Se hvordan i bliver godkendt</a
	>
</section>
<section class="flex px-4 lg:px-8 items-center flex-col mt-32 mb-16" id="Vaelg-uddannelsesaftale">
	<h1 class="font-bold text-4xl mt-2">
		<span class="text-primary">#2</span>
		Vlæg uddannelsesaftale
	</h1>
	<p class="mt-16 max-w-192 text-center">
		uddannelsesaftaler er 100% digitale, og de findes inde på lærepladsen.dk. Lærepladsen.dk hjælper
		jer også med at holde styr på, hvem der skal tage næste skridt mod indgåelse af aftalen og giver
		automatisk besked til virksomhed, lærling og erhvervsskole.
	</p>
	<div class="flex gap-4 mt-8">
		<a
			rel="noreferrer"
			target="_blank"
			href="https://www.stil.dk/-/media/filer/stil/pdf22/maj/220524-indgaa-uddannelsesaftaler-digitalt-paa-laerepladsen-dk.pdf"
			class="btn btn-secondary">Læs mere</a
		>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://ua.laerepladsen.dk/aftaleoversigt"
			class="btn btn-primary">Se uddannelsesaftaler</a
		>
	</div>
</section>
<section class="flex px-4 lg:px-8 items-center flex-col my-32" id="underskriv">
	<h1 class="font-bold text-4xl mt-2">
		<span class="text-primary">#3</span>
		Skriv under
	</h1>
	<p class="mt-16 max-w-192 text-center">
		Når vi er blevet enige om en god uddannelsesaftale, så er der ikke andet tilbage en at
		underskrive den, og så har i en datatekniker elev klar til at arbejde.
	</p>
	<h2 class="font-bold text-2 mt-16">
		Hvis det lyder som noget for jer, så kantakt mig via email.
	</h2>
	<a href="mailto:kontakt@kennik.dk" rel="noreferrer" class="btn btn-primary btn-lg mt-8"
		>Kontakt mig <span class="text-3xl">😃</span></a
	>
</section>
<section class="flex px-4 lg:px-8 items-center flex-col my-32" id="underskriv">
	<h1 class="font-bold text-4xl mt-2">Hør mere</h1>
	<p class="mt-16 max-w-192 text-center">
		Tag en snak med skolen, og hør mere om hvordan i kan hjælpe mig og andre elever med at få en
		læreplads.
	</p>
	<h2 class="font-bold text-2 mt-16">Kontakt Virksomhedskonsulent Per</h2>
	<div class="flex gap-2 flex-wrap">
		<a href="mailto:phr@sde.dk" rel="noreferrer" class="btn normal-case btn-primary mt-8"
			>phr@sde.dk</a
		>
		<a href="tel:4073 6562" rel="noreferrer" class="btn normal-case btn-primary mt-8">4073 6562</a>
	</div>
</section>
