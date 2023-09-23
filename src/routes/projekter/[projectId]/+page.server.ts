import type { PageServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	try {
		// Get the project id from the URL
		const { projectId } = params;
		// Get a reference to the project in Firebase when the page is loaded
		const docRef = adminDB.collection('projects').doc(projectId);
		// Get the project data, including the "visits" count

		const doc = await docRef.get();

		const data = doc.data();

		if (!data) {
			throw error(404, 'Project not found :(');
		}
		// Update the visits count
		const visits = data.visits + 1;
		await docRef.update({ visits });
		return { ...data };
	} catch (e: any) {
		// Handle any errors that occur during Firestore operations
		throw error(404, 'Project not found :(');
	} finally {
	}
}) satisfies PageServerLoad;
