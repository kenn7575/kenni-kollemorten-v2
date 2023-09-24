export async function compressImage(dataURL: string, minSideSize: number): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const img = new Image();

		img.onload = () => {
			const width = img.width;
			const height = img.height;
			let newWidth, newHeight;

			if (width <= height) {
				newWidth = minSideSize;
				newHeight = (height / width) * minSideSize;
			} else {
				newHeight = minSideSize;
				newWidth = (width / height) * minSideSize;
			}

			const canvas = document.createElement('canvas');
			canvas.width = newWidth;
			canvas.height = newHeight;

			const ctx = canvas.getContext('2d')!;
			ctx.drawImage(img, 0, 0, newWidth, newHeight);

			canvas.toBlob(
				(blob) => {
					if (blob) {
						const reader = new FileReader();
						reader.onloadend = () => {
							if (typeof reader.result === 'string') {
								resolve(reader.result);
							} else {
								reject(new Error('Failed to convert blob to string.'));
							}
						};
						reader.readAsDataURL(blob);
					} else {
						reject(new Error('Failed to create blob.'));
					}
				},
				'image/webp',
				0.9 // You can adjust the compression quality here (0.0 - 1.0)
			);
		};

		img.onerror = () => {
			reject(new Error('Failed to load the image.'));
		};

		img.src = dataURL;
	});
}
