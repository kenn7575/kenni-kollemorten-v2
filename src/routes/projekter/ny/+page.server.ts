import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const uid = locals.userId;

	if (!uid) {
		throw redirect(301, '/admin');
	}
	return {};
}) satisfies PageServerLoad;
