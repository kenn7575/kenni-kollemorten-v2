<script>
	import frontend from '$lib/img/Design-process.svg';
	import svelteLogo from '$lib/img/Svelte_Logo.svg';
	import htmlLogo from '$lib/img/HTML_Logo.svg';
	import tailwindLogo from '$lib/img/Tailwind_Logo.svg';

	let page = 6;
	function increase() {
		if (page < 10) page++;
	}
	function decrease() {
		if (page > 1) page--;
	}

	let steps = 2;
</script>

<div class="grid grid-cols-3 grid-rows-5 relative">
	<!-- 1 -->
	<div class="col-start-1 row-start-1 flex items-center justify-center z-10 -rotate-3">
		<div class="rating gap-1 bg-base-200 px-8 py-4 rounded shadow-lg">
			<input type="radio" name="rating-3" class="mask mask-heart bg-red-400 border" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" checked />
			<input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
		</div>
	</div>
	<!-- 1 end -->
	<!-- 2 -->
	<div
		class="col-start-2 row-start-1 flex items-center justify-center z-10 rotate-3 translate-y-10
		sm:translate-y-0"
	>
		<img class="h-24" src={htmlLogo} alt="" />
	</div>
	<!-- 2 end -->
	<!-- 2,6 -->
	<div class="col-start-3 row-start-1 row-span-2 flex items-center justify-center z-10 rotate-6">
		<ul class="steps steps-vertical">
			<button
				on:click={() => {
					steps = 1;
				}}
				class:step-primary={steps > 0}
				class="step">Register</button
			>
			<button
				on:click={() => {
					steps = 2;
				}}
				class:step-primary={steps > 1}
				class="step">Choose plan</button
			>
			<button
				on:click={() => {
					steps = 3;
				}}
				class:step-primary={steps > 2}
				class="step">Purchase</button
			>
			<button
				on:click={() => {
					steps = 4;
				}}
				class:step-primary={steps > 3}
				class="step">Receive Product</button
			>
		</ul>
	</div>

	<!-- 2,6 end -->
	<!-- 4,7 -->
	<div
		class="col-start-1 row-start-2 row-span-2 flex items-end justify-center z-10 -rotate-3
	lg:items-start"
	>
		<img class="h-24 lg:h-36" src={tailwindLogo} alt="" />
	</div>
	<!-- 4,7 end -->
	<!-- 5,8,11 -->
	<div class="col-start-2 row-start-2 row-span-3 flex items-center justify-center">
		<div class="card bg-base-100 shadow-xl">
			<figure><img src={frontend} alt="Shoes" /></figure>
			<div class="card-body bg-base-200 rounded-b-2xl">
				<h2 class="card-title">
					Frontend
					<div class="badge badge-primary">dev</div>
				</h2>
				<p>Jeg har øje for detailjerne</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">CSS</div>
					<div class="badge badge-outline">HTML</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 5,8,11 end -->
	<!-- 9,12 -->
	<div class="col-start-3 row-start-3 row-span-2 flex items-center justify-center z-10">
		<img class="h-32 lg:h-48" src={svelteLogo} alt="" />
	</div>
	<!-- 9,12 end -->
	<!-- 13 -->
	<div class="col-start-1 row-start-5 flex items-center justify-center z-10 rotate-12">
		<div class="join shadow-lg">
			<button on:click={decrease} class="join-item btn">«</button>
			<button class="join-item btn">Page {page}</button>
			<button on:click={increase} class="join-item btn">»</button>
		</div>
	</div>
	<!-- 13 end -->
	<!-- 14,15 -->
	<div
		class="col-start-2 row-start-5 col-span-2 justify-end flex items-center sm:justify-center z-10 -rotate-2
		"
	>
		<div class="alert shadow-lg w-fit sm:w-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-info shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Have some cookies.</span>
			<div>
				<button class="btn btn-sm btn-error">Nope!</button>
				<button class="btn btn-sm btn-success">Eat😋</button>
			</div>
		</div>
	</div>
	<!-- 14,15 end -->
</div>
