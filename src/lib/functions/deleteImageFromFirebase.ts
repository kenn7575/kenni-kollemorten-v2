import { firebaseStorage } from './firebase';
import { ref, deleteObject } from 'firebase/storage';

export async function deleteImageFromFirebase(imageRef: string): Promise<boolean> {
	const storageRef = ref(firebaseStorage, imageRef);
	return await deleteObject(storageRef)
		.then(() => {
			return true;
		})
		.catch((error) => {
			return false;
		});
}
