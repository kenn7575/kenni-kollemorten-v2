export default function calculateAge(birthDate: Date) {
	const birthYear = new Date(birthDate).getFullYear();
	const currentYear = new Date().getFullYear();
	const age = currentYear - birthYear;

	const birthMonth = new Date(birthDate).getMonth();
	const currentMonth = new Date().getMonth();

	// Check if the birth date has passed this year
	if (
		currentMonth < birthMonth ||
		(currentMonth === birthMonth && new Date().getDate() < new Date(birthDate).getDate())
	) {
		return age - 1;
	}

	return age;
}
