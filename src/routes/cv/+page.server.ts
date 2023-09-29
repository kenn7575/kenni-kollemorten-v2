import type { PageServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';
import { error } from '@sveltejs/kit';



export const load = (async () => {
    //get data
    const ref = adminDB.collection('cv');
	const snapshot = await ref.get();

    if (snapshot.empty) {
		throw error(404, 'Project not found :(');
	} else {
		const data = snapshot.docs.map((doc) => doc.data());

		
		return { cv: data ?? [] };
	}
}) satisfies PageServerLoad;