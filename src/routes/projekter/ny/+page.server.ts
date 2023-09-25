import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';
import { adminStorage } from '$lib/server/admin';
import type { IProjectToUpload } from '$lib/types/interfaces';

export const load = (async ({ locals, params, url }) => {
	const uid = locals.userId;
	if (!uid) {
		const fromURL = url.pathname;

		throw redirect(302, '/admin?redirect=' + fromURL);
	}
	return {};
}) satisfies PageServerLoad;
