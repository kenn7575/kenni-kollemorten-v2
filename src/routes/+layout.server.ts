import type { LayoutServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';
import { error } from '@sveltejs/kit';
import type { IProject } from '$lib/types/interfaces';

export const load = (async () => {
	//get data where projects == id
	const ref = adminDB.collection('projects');
	const snapshot = await ref.get();

	if (snapshot.empty) {
		throw error(404, 'Project not found :(');
	} else {
		const data = snapshot.docs.map((doc) => doc.data());
		const ids = snapshot.docs.map((doc) => doc.id);
		//return new list where every item has an id
		const projects = data.map((item, index) => {
			return { ...item, id: ids[index] };
		}) as IProject[];
		return { projects: projects ?? [] };
	}
}) satisfies LayoutServerLoad;
