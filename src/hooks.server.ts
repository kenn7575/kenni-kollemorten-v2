import {sequence} from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import { adminAuth } from '$lib/server/admin';
import type { Handle } from '@sveltejs/kit';

Sentry.init({
    dsn: "https://150f7c206fb701681c24d808df791e86@o4506763001331712.ingest.sentry.io/4506763004674049",
    tracesSampleRate: 1
})

export const handle = sequence(Sentry.sentryHandle(), (async ({ event, resolve }) => {
	const sessionCookie = event.cookies.get('__session');

	try {
		const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
		event.locals.userId = decodedClaims.uid;
	} catch (e) {
		event.locals.userId = null;
		return resolve(event);
	}
	return resolve(event);
}) satisfies Handle);
export const handleError = Sentry.handleErrorWithSentry();