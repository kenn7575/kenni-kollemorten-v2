import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';
import type { IProject } from '$lib/types/interfaces';

export const load = (async ({ locals, params, url }) => {
	const uid = locals.userId;
	if (!uid) {
		const fromURL = url.pathname;
		throw redirect(302, '/admin?redirect=' + fromURL);
	}
	//find projectId
	const { projectId } = params;
	console.log(projectId);
	// Get a reference to the project in Firebase when the page is loaded
	const docRef = adminDB.collection('projects').doc(projectId);
	// Get the project data
	const doc = await docRef.get();
	const data = doc.data() as IProject;

	return {
		project: {
			...data,
			id: projectId
		}
	};
}) satisfies PageServerLoad;
