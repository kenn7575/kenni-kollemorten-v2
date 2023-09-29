import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { adminDB } from '$lib/server/admin';
import type { IProjectToUpload } from '$lib/types/interfaces';

export const POST: RequestHandler = async ({ request, locals }) => {
	const uid = locals.userId;
	if (!uid) {
		throw redirect(301, '/admin');
	}
	try {
		const data = (await request.json()) as IProjectToUpload; //get data
		const projectId = data.id;

		//add project to firebase
		if (!projectId) throw new Error('No project id');
		const projectRef = adminDB.collection('projects').doc(projectId);

		const res = await projectRef.update({ ...data });
		// get data
		const doc = await projectRef.get();
		const id = doc.id;

		return new Response(JSON.stringify({ id }));
	} catch (e: any) {
		console.log(e);
		return new Response(JSON.stringify({ error: e.message }));
	}
};
