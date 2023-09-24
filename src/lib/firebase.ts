import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDE3Ako6YekqZUODOxzQm6yChWZo5gaxAA',
	authDomain: 'kenni-kollemorten.firebaseapp.com',
	projectId: 'kenni-kollemorten',
	storageBucket: 'kenni-kollemorten.appspot.com',
	messagingSenderId: '846866233715',
	appId: '1:846866233715:web:7a911811cb535126ca6d06',
	measurementId: 'G-DWRRMG5HVN'
};
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);

export async function signOutUser() {
	await signOut(firebaseAuth);
	const res = fetch('/api/signin', {
		method: 'Delete'
	});
}

function userStore() {
	let unsubscribe: () => void;

	if (!firebaseAuth || !globalThis.window) {
		console.warn(!firebaseAuth ? 'Auth is not initialized' : 'Window is not defined');
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(firebaseAuth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
			set(user);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}
export const user = userStore();
