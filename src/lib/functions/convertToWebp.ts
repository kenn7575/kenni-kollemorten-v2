export function convertToWebp(img: HTMLImageElement): string | undefined {
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	if (ctx) {
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage(img, 0, 0);

		// Convert the image to WebP format with a quality of 0.8 (adjust as needed)
		return canvas.toDataURL('image/webp', 0.8);
	}

	return undefined;
}
