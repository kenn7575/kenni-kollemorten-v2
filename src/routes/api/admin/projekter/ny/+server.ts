import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { adminDB } from '#lib/server/admin.js';
import { adminStorage } from '#lib/server/admin.js';
import type { IProjectToUpload } from '#lib/types/interfaces.js';

export const POST: RequestHandler = async ({ request, locals }) => {
	const uid = locals.userId;
	if (!uid) {
		redirect(301, '/admin');
	}

	const data = (await request.json()) as IProjectToUpload; //get data

	//add project to firebase
	const ref = adminDB.collection('projects');
	const doc = await ref.add(data);
	const id = doc.id;

	return new Response(JSON.stringify({ id }));
};
