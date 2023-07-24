<script>
	import frontend from '$lib/img/Design-process.svg';
</script>

<div class="grid grid-cols-3 grid-rows-5 relative">
	<!-- 1 -->
	<div class="col-start-1 row-start-1 flex items-center justify-center">
		<div class="rating gap-1 bg-base-200 px-8 py-4 rounded shadow-lg">
			<input type="radio" name="rating-3" class="mask mask-heart bg-red-400 border" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
			<input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
			<input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
		</div>
	</div>
	<!-- 1 end -->
	<!-- 2,6 -->
	<div class="col-start-3 row-start-1 row-span-2 flex items-center justify-center">
		<ul class="steps steps-vertical">
			<li class="step step-primary">Register</li>
			<li class="step step-primary">Choose plan</li>
			<li class="step">Purchase</li>
			<li class="step">Receive Product</li>
		</ul>
	</div>

	<!-- 2,6 end -->
	<!-- 5,8,11 -->
	<div class="col-start-2 row-start-2 row-span-3 flex items-center justify-center">
		<div class="card bg-base-100 shadow-xl">
			<figure><img src={frontend} alt="Shoes" /></figure>
			<div class="card-body bg-base-200">
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
	<!-- 13 -->
	<div class="col-start-1 row-start-5 flex items-center justify-center">
		<div class="join shadow-lg">
			<button class="join-item btn">«</button>
			<button class="join-item btn">Page 22</button>
			<button class="join-item btn">»</button>
		</div>
	</div>
	<!-- 13 end -->
	<!-- 14,15 -->
	<div class="col-start-2 row-start-5 col-span-2 flex items-center justify-center">
		<div class="alert shadow-lg">
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
