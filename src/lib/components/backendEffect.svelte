<script>
	import backend from '$lib/img/Software-code-testing.svg';
	import githubLogo from '$lib/img/Github_Logo.avif';
	import FirebaseLogo from '$lib/img/Firebase_Logo.svg';
	import nodejsLogo from '$lib/img/Nodejs_Logo.svg';
	import svelteKitLogo from '$lib/img/Sveltekit_Logo.webp';

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
	<!-- 1,2 -->
	<div class="col-start-1 row-start-1 flex items-center justify-center z-10 -rotate-3 col-span-2">
		<div class="mockup-code text-sm">
			<pre data-prefix="$"><code>npm install -g nodemon</code></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-success"><code>Done!</code></pre>
		</div>
	</div>
	<!-- 1,2 end -->
	<!-- 3 -->
	<div
		class="col-start-3 row-start-1 flex items-center justify-center z-10 rotate-6 translate-y-10"
	>
		<img class="h-24 lg:h-36" src={githubLogo} alt="Github" />
	</div>
	<!-- 3 end -->
	<!-- 4 -->
	<div
		class="col-start-1 row-start-2 flex items-center justify-center z-10 rotate-6 translate-y-10"
	>
		<img class="h-24" src={nodejsLogo} alt="NodeJs" />
	</div>
	<!-- 4 end -->
	<!-- 5,8,11 -->
	<div class="col-start-2 row-start-2 row-span-3 flex items-center justify-center">
		<div class="card bg-base-100 shadow-xl">
			<figure><img src={backend} alt="Backend" /></figure>
			<div class="card-body bg-base-200 rounded-b-2xl">
				<h2 class="card-title">
					Backend
					<div class="badge badge-primary">dev</div>
				</h2>
				<p>Frontend er kun toppen af isbjerget</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">NodeJS</div>
					<div class="badge badge-outline">API</div>
					<div class="badge badge-outline">Security</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 5,8,11 end -->
	<!-- 12 -->
	<div class="col-start-3 row-start-4 flex items-center justify-center z-10 -rotate-3">
		<img class="max-h-36" src={FirebaseLogo} alt="Firebase" />
	</div>
	<!-- 12 end -->
	<!-- 10 -->
	<div class="col-start-1 row-start-4 flex items-center justify-center z-10 -rotate-3">
		<img class="max-h-36" src={svelteKitLogo} alt="SvelteKit" />
	</div>
	<!-- 10 end -->
	<!-- 14,15 -->
	<div
		class="col-start-2 row-start-5 col-span-2 justify-end flex items-center sm:justify-center z-10 rotate-2
		"
	>
		<div class="mockup-code text-sm">
			<pre data-prefix="$"><code>npm run test</code></pre>
			<pre data-prefix=">"><code>Testing...</code></pre>
			<pre data-prefix=">" class="bg-success text-success-content"><code>All tests passed</code
				></pre>
		</div>
	</div>
	<!-- 14,15 end -->
</div>
