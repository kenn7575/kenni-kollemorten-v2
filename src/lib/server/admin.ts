import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { FB_PRIVATE_KEY, FB_PROJECT_ID, FB_CLIENT_EMAIL } from '$app/env/private';

if (!getApps().length) {
	initializeApp({
		credential: cert({
			projectId: FB_PROJECT_ID,
			privateKey: FB_PRIVATE_KEY,
			clientEmail: FB_CLIENT_EMAIL
		})
	});
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
export const adminStorage = getStorage();
