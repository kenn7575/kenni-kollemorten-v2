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
			}
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#FB3737',
					secondary: '#1EA5FA',
					accent: '#C60240',
					neutral: '#181a2a',
					'base-100': '#ffffff',
					info: '#3abff8',
					success: '#36d399',
					warning: '#fbbd23',
					error: '#f87272'
				}
			},
			'night'
		]
	}
};

module.exports = config;
