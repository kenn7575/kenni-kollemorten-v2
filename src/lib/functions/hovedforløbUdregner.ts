export default function getNumberBasedOnDate(inputDate: Date) {
	const ranges = [
		{ start: new Date('2023-01-09'), end: new Date('2023-10-16'), number: 1 },
		{ start: new Date('2023-10-16'), end: new Date('2024-08-05'), number: 2 },
		{ start: new Date('2024-08-05'), end: new Date('2025-03-24'), number: 3 },
		{ start: new Date('2025-03-24'), end: new Date('2026-01-05'), number: 4 },
		{ start: new Date('2026-01-05'), end: new Date('2026-10-12'), number: 5 },
		{ start: new Date('2026-10-12'), end: new Date('2026-11-13'), number: 6 }
	];

	for (const range of ranges) {
		if (inputDate >= range.start && inputDate < range.end) {
			return range.number;
		}
	}

	return 0; // If the inputDate does not fall into any range
}
