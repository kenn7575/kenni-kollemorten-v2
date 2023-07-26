<script>
	import FrontendEffect from '$lib/components/frontendEffect.svelte';
	import BackendEffect from '$lib/components/backendEffect.svelte';
	import { fly } from 'svelte/transition';
	let FrontendMode = true;
</script>

<header class="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-7 p-2">
	<div
		class="flex flex-col justify-center gap-2 z-20 my-8
    xl:col-span-2"
	>
		<div class="w-full flex flex-col justify-center items-start px-8">
			<p class="text-base-content font-bold">Hej, mit navn er</p>
			<h1
				class=" text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent my-8 leading-10
			sm:text-6xl lg:text-7xl"
			>
				Kenni <br /> Kollemorten
			</h1>
			<div class="chat chat-start">
				<div class="chat-bubble bg-base-300 text-base-content max-w-128">
					Jeg er datatekniker med speciale i programmering elev på SDE og jeg mangler en elevplads.
				</div>
				<div class="chat-footer opacity-50">Leveret</div>
			</div>
		</div>
	</div>
	<!-- Mode start -->
	<div
		class="flex flex-col gap-2 justify-center
		lg:col-start-1 lg:col-end-4 lg:row-start-2
		xl:col-start-7 xl:col-span-1 xl:row-start-1"
	>
		<!-- <div class="divider hidden lg:flex xl:hidden" /> -->
		<div class="divider lg:hidden" />

		<div
			class="w-full flex justify-center items-center
        "
		>
			<div class="divider divider-horizontal h-96 hidden xl:flex" />

			<div class="join xl:join-vertical">
				<button
					class="btn join-item hover:bg-base-300 w-32
                    lg:w-60
                    xl:h-24 xl:w-44"
					class:bg-primary={FrontendMode}
					class:text-white={FrontendMode}
					class:hover:bg-primary={FrontendMode}
					on:click={() => {
						FrontendMode = true;
					}}
				>
					Frontend</button
				>

				<button
					class="btn join-item hover:bg-base-300 w-32
                    lg:w-60
                    xl:h-24 xl:w-44"
					class:bg-primary={!FrontendMode}
					class:text-white={!FrontendMode}
					class:hover:bg-primary={!FrontendMode}
					on:click={() => {
						FrontendMode = false;
					}}>Backend</button
				>
			</div>
		</div>
	</div>
	<!-- Mode end -->

	<div
		class="flex flex-col gap-2 justify-center
			lg:col-start-2 lg:col-end-4 lg:row-start-1
			xl:col-start-3 xl:col-span-4 xl:row-start-1"
	>
		{#if FrontendMode}
			<div in:fly class="effect-bg w-full"><FrontendEffect /></div>
		{:else}
			<div in:fly class="effect-bg w-full"><BackendEffect /></div>
		{/if}
	</div>
</header>

<style>
	.effect-bg {
		background: var(--primary);
		background: radial-gradient(circle, var(--primary) 0%, rgba(255, 255, 255, 0) 63%);
	}

	header {
		min-height: calc(100vh - 4rem);
	}
	h1 {
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
