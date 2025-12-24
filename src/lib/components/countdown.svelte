<script>
	import { onMount } from 'svelte';

	let isLoaded = false;
	let now = new Date().getTime();

	onMount(() => {
		isLoaded = true;
		const interval = setInterval(() => {
			now = new Date().getTime();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	const targetDate = new Date('2027-01-24 12:00');

	const calculateCalendarDiff = (fromDate, toDate) => {
		if (toDate <= fromDate) {
			return {
				years: 0,
				months: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			};
		}

		let cursor = new Date(fromDate);
		let years = 0;
		let months = 0;
		let days = 0;

		while (true) {
			const nextYear = new Date(cursor);
			nextYear.setFullYear(nextYear.getFullYear() + 1);

			if (nextYear <= toDate) {
				years += 1;
				cursor = nextYear;
			} else {
				break;
			}
		}

		while (true) {
			const nextMonth = new Date(cursor);
			nextMonth.setMonth(nextMonth.getMonth() + 1);

			if (nextMonth <= toDate) {
				months += 1;
				cursor = nextMonth;
			} else {
				break;
			}
		}

		while (true) {
			const nextDay = new Date(cursor);
			nextDay.setDate(nextDay.getDate() + 1);

			if (nextDay <= toDate) {
				days += 1;
				cursor = nextDay;
			} else {
				break;
			}
		}

		const remainingMs = toDate - cursor;
		const hours = Math.floor(remainingMs / (1000 * 60 * 60));
		const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

		return { years, months, days, hours, minutes, seconds };
	};

	$: nowDate = new Date(now);
	$: ({ years, months, days, hours, minutes, seconds } = calculateCalendarDiff(nowDate, targetDate));
</script>

<div class="flex flex-wrap gap-4 justify-center">
	<div class="flex flex-col w-24 items-center bg-primary rounded-box py-2 text-primary-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{years};" />
		</span>
		years
	</div>
	<div class="flex flex-col items-center w-24 bg-primary rounded-box py-2 text-primary-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{months};" />
		</span>
		Months
	</div>
	<div class="flex flex-col items-center w-24 bg-primary rounded-box py-2 text-primary-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{days};" />
		</span>
		days
	</div>
	<div class="flex flex-col items-center w-24 bg-primary rounded-box py-2 text-primary-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{hours};" />
		</span>
		hours
	</div>
	<div class="flex flex-col items-center w-24 bg-primary rounded-box py-2 text-primary-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{minutes};" />
		</span>
		min
	</div>
	<div class="flex flex-col items-center w-24 bg-primary rounded-box py-2 text-primary-content">
		<span class="countdown font-mono text-5xl">
			<span style="--value:{seconds};" />
		</span>
		sec
	</div>
</div>
