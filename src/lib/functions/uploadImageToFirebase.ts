import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { firebaseStorage } from '$lib/firebase';
import { generateRandomBase64Code } from '$lib/functions/generateRandomBase64Code';

export async function uploadImageToFirebase(
	image: string,
	imageSmall: string,
	imageName: string
): Promise<{ imageSmall: string; image: string; path: string; pathSmall: string } | void> {
	try {
		if (!image || !imageSmall) return;
		//bucket project_images
		const path = 'project_images/' + imageName;
		const randomBase64Code = generateRandomBase64Code();
		const storageRef = ref(firebaseStorage, path + '_' + randomBase64Code);
		const storageRefSmall = ref(firebaseStorage, path + '_small' + '_' + randomBase64Code);
		//upload image
		const imgBlob = await fetch(image).then((r) => r.blob());
		const imgSmallBlob = await fetch(imageSmall).then((r) => r.blob());

		const snapshot = await uploadBytes(storageRef, imgBlob);
		const snapshotSmall = await uploadBytes(storageRefSmall, imgSmallBlob);
		//get download url
		const imageURL = await getDownloadURL(snapshot.ref);
		const imageSmallURL = await getDownloadURL(snapshotSmall.ref);

		return {
			imageSmall: imageSmallURL,
			image: imageURL,
			path: path + '_' + randomBase64Code,
			pathSmall: path + '_small' + '_' + randomBase64Code
		};
	} catch (err) {
		console.log(err);
	}
}
