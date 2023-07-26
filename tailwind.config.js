/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', '.src/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			height: {
				192: '48rem' // Adds a new height value h-100 with 25rem (400px) height
			},
			maxHeight: {
				192: '48rem'
			},
			maxWidth: {
				128: '32rem'
			},
			aspectRatio: {
				'4/3': '4 / 3'
			}
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: ['synthwave', 'acid']
	}
};

module.exports = config;
