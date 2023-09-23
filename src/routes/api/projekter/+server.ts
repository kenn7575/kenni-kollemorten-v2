import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { adminDB } from '$lib/server/admin';
import { adminStorage } from '$lib/server/admin';

export const POST: RequestHandler = async ({ request, locals }) => {
	const uid = locals.userId;
	if (!uid) {
		throw redirect(301, '/admin');
	}

	const data = await request.json();
	const image = data.image;
	//convert image file to webp
	const imageBuffer = Buffer.from(image, 'base64');
	const sharp = require('sharp');
	const webp = await sharp(imageBuffer).webp().toBuffer();

	//upload image to firebase storage
	const bucket = adminStorage.bucket('project_images');
	const file = bucket.file(data.name + '.webp');

	const ref = adminDB.collection('projects');
	const doc = await ref.add(data);
	const id = doc.id;
	console.log('Document written with ID: ', id);

	return new Response(JSON.stringify({ id }));
};
