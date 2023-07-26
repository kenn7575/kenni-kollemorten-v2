import type { PageServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';

const docs = adminDB.collection('projects');
const docsData = await docs.get().then((snapshot) => {
	console.log('snapshot', snapshot);
	const data = snapshot.docs.map((doc) => doc.data());
	return data;
});

export const load = (async () => {
	return { projects: docsData };
}) satisfies PageServerLoad;
