import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import pkg from 'firebase-admin';

const firebaseConfig = {
	credential: pkg.credential.cert({
		projectId: process.env.FB_PROJECT_ID,
		privateKey: process.env.FB_PRIVATE_KEY,
		clientEmail: process.env.FB_CLIENT_EMAIL
	})
};

try {
	pkg.initializeApp(firebaseConfig);
} catch (error: any) {
	if (!/already exists/u.test(error.message)) {
		console.error('Firebase admin initialization error', error.stack);
	}
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
