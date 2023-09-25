export function generateRandomBase64Code(): string {
	const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'; // Base64 character set
	let result = '';

	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * charset.length);
		result += charset.charAt(randomIndex);
	}

	return result;
}
