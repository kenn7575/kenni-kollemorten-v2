import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { adminDB } from '$lib/server/admin';

export const POST: RequestHandler = async ({ request, locals }) => {
	const uid = locals.userId;
	if (!uid) {
		throw redirect(301, '/admin');
	}
	const data = await request.json();

	const ref = adminDB.collection('projects');
	const doc = await ref.add(data);
	const id = doc.id;
	console.log('Document written with ID: ', id);

	return new Response(JSON.stringify({ id }));
};
