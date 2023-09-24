<script lang="ts">
	let image: string | undefined;
	let convertedImage: string | undefined;

	// async function displayImage(e: any) {
	// 	const file: File | undefined = e.target.files[0];
	// 	if (file) {
	// 		image = URL.createObjectURL(file);
	// 		convertToWebp();
	// 	}
	// }

	// function convertToWebp() {
	// 	const canvas: HTMLCanvasElement = document.createElement('canvas');
	// 	const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
	// 	const img: HTMLImageElement = new Image();

	// 	img.onload = function () {
	// 		if (ctx) {
	// 			canvas.width = img.width;
	// 			canvas.height = img.height;
	// 			ctx.drawImage(img, 0, 0);

	// 			// Convert the image to WebP format with a quality of 0.8 (adjust as needed)
	// 			convertedImage = canvas.toDataURL('image/webp', 1);
	// 		}
	// 	};

	// 	if (image) {
	// 		img.src = image;
	// 	}
	// }

	async function loadImage(imageUrl: string): Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => resolve(img);
			img.onerror = reject;
			img.src = imageUrl;
		});
	}

	function convertToWebp(img: HTMLImageElement): string | undefined {
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

	async function displayImage(e: any) {
		const file: File | undefined = e.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			image = imageUrl;
			try {
				const img = await loadImage(imageUrl);
				const _convertedImage = convertToWebp(img);
				convertedImage = _convertedImage;
			} catch (error) {
				// Handle errors, e.g., when loading the image fails.
			}
		}
	}
</script>

<input on:change={displayImage} name="main-image" type="file" />

<img src={image} alt="Original Image" />
<img src={convertedImage} alt="Converted Image" />
