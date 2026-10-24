import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	// Firebase Admin service account
	FB_PROJECT_ID: {},
	FB_CLIENT_EMAIL: {},
	FB_PRIVATE_KEY: {
		// Newlines in the key are stored as [REPLACE] (Vercel) or \n (local .env)
		schema: (input) => {
			if (!input) throw new Error('FB_PRIVATE_KEY is not set');
			return input.replaceAll('[REPLACE]', '\n').replaceAll('\\n', '\n');
		}
	},
	// Only used by /api/githubStats
	GITHUB_TOKEN: { schema: (input) => input }
});
