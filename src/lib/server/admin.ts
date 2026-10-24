import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { env } from '$env/dynamic/private';

if (!getApps().length) {
	// Newlines in the private key are stored as [REPLACE] (Vercel) or \n (local .env)
	const privateKey = env.FB_PRIVATE_KEY?.replaceAll('[REPLACE]', '\n').replaceAll('\\n', '\n');
	initializeApp({
		credential: cert({
			projectId: env.FB_PROJECT_ID,
			privateKey,
			clientEmail: env.FB_CLIENT_EMAIL
		})
	});
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
export const adminStorage = getStorage();
