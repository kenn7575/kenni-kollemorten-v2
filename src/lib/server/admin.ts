import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

// import { FB_PROJECT_ID, FB_PRIVATE_KEY, FB_CLIENT_EMAIL } from '$env/static/private';
import pkg from 'firebase-admin';

try {
	// Vercel
	const raw = process.env.FB_PRIVATE_KEY;
	const key = raw?.replaceAll('[REPLACE]', '\n');
	console.warn('key', key);
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: process.env.FB_PROJECT_ID,
			privateKey: key,
			clientEmail: process.env.FB_CLIENT_EMAIL
		})
	});
} catch (error: any) {
	if (!/already exists/u.test(error.message)) {
		console.error('Firebase admin initialization error', error.stack);
	}
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
export const adminStorage = getStorage();
