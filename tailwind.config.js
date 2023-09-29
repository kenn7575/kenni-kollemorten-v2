/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', '.src/*.{html,js,svelte,ts,svg}'],

	theme: {
		extend: {
			height: {
				192: '48rem', // Adds a new height value h-100 with 25rem (400px) height
				0.32: '0.08rem'
			},
			maxHeight: {
				192: '48rem'
			},
			maxWidth: {
				128: '32rem',
				192: '48rem',
				250: '62.5rem',
				300: '75rem'
			},
			minWidth: {
				128: '32rem',
				192: '48rem'
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/4': '3 / 4'
			},
			backgroundSize: {
				'50%': '50%'
			},
			scale: {
				125: '1.25'
			}
			
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: ['night', 'light']
	}
};

module.exports = config;
