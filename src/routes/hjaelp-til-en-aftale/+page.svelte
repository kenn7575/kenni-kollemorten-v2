<script lang="ts">
	import agreement from '$lib/img/Agreement.svg';
	import coworking from '$lib/img/Co-working.svg';
	import customersurvey from '$lib/img/Customer-survey.svg';
	import mysteriousman from '$lib/img/Mysterious-man.svg';
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
<section class="py-16 flex items-center flex-col">
	<h1 class="font-bold text-4xl">Men først</h1>
	<p class="text-base-content font-thin my-2">Lidt infomation om uddandelsesforløbet</p>
	<button
		on:click={() => {
			SmoothVerticalScrolling('bliv-godkendt', 400, 'top');
		}}
		class="btn btn-ghost btn-sm text-base-content/60 font-medium normal-case">Spring over</button
	>
</section>
<section class="h-screen" id="intro">
	<h1 class="">Læringsgrundlag</h1>
	<h1 class="">Opbygning</h1>
	<h1 class="">Løn og økonomi</h1>
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
