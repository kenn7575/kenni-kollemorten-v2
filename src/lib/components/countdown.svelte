<script>
	import { onMount } from 'svelte';

	let isLoaded = false;
	let now = new Date().getTime();

	onMount(() => {
		isLoaded = true;
		const interval = setInterval(() => {
			now = new Date().getTime();
		}, 1);

		return () => {
			clearInterval(interval);
		};
	});

	const targetDate = new Date('2027-01-24 12:00').getTime();

	$: distance = targetDate - now;
	$: years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
	$: months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
	$: days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
	$: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	$: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	$: seconds = Math.floor((distance % (1000 * 60)) / 1000);
</script>

<div class="flex flex-wrap gap-4 justify-center">
	<div class="flex flex-col w-24 items-center bg-warning rounded-box text-warning-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{years};" />
		</span>
		years
	</div>
	<div class="flex flex-col items-center w-24 bg-warning rounded-box text-warning-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{months};" />
		</span>
		Months
	</div>
	<div class="flex flex-col items-center w-24 bg-warning rounded-box text-warning-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{days};" />
		</span>
		days
	</div>
	<div class="flex flex-col items-center w-24 bg-warning rounded-box text-warning-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{hours};" />
		</span>
		hours
	</div>
	<div class="flex flex-col items-center w-24 bg-warning rounded-box text-warning-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{minutes};" />
		</span>
		min
	</div>
	<div class="flex flex-col items-center w-24 bg-warning rounded-box text-warning-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{seconds};" />
		</span>
		sec
	</div>
</div>
