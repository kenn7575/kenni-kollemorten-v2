<script>
	import FrontendEffect from '$lib/components/frontendEffect.svelte';

	let FrontendMode = true;
</script>

<header class="flex flex-col lg:grid lg:grid-cols-3 xl:grid-cols-7">
	<div
		class="flex flex-col justify-center gap-2
    xl:col-span-2"
	>
		<div class="w-full flex flex-col justify-center items-start px-8">
			<p>Hej, jeg er</p>
			<h1 class="text-5xl w-72 font-semibold text-accent">Kenni Kollemorten</h1>
		</div>
	</div>

	<!-- Mode start -->
	<div
		class="flex flex-col gap-2 justify-center
		lg:col-start-1 lg:col-end-4 lg:row-start-2
		xl:col-start-7 xl:col-span-1 xl:row-start-1"
	>
		<div class="divider hidden lg:flex xl:hidden" />

		<div
			class="w-full flex justify-center items-center
        "
		>
			<div class="divider divider-horizontal h-96 hidden xl:flex" />

			<div class="join xl:join-vertical">
				<button
					class="btn join-item hover:bg-primary hover:text-white w-32
                    lg:w-60
                    xl:h-24 xl:w-44"
					class:bg-primary={FrontendMode}
					class:text-white={FrontendMode}
					on:click={() => {
						FrontendMode = true;
					}}
				>
					Frontend</button
				>

				<button
					class="btn join-item hover:bg-primary hover:text-white w-32
                    lg:w-60
                    xl:h-24 xl:w-44"
					class:bg-primary={!FrontendMode}
					class:text-white={!FrontendMode}
					on:click={() => {
						FrontendMode = false;
					}}>Backend</button
				>
			</div>
		</div>
		<div class="divider lg:hidden" />
	</div>
	<!-- Mode end -->

	<div
		class="flex flex-col gap-2 justify-center
			lg:col-start-2 lg:col-end-4 lg:row-start-1
			xl:col-start-3 xl:col-span-4 xl:row-start-1"
	>
		<div class="w-full"><FrontendEffect /></div>
	</div>
</header>

<style>
</style>
