/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', '.src/*.{html,js,svelte,ts,svg}'],

	theme: {
		extend: {
			height: {
				192: '48rem', // Adds a new height value h-100 with 25rem (400px) height
				0.32: '0.08rem'
			},
			keyframes: {
				riseup: {
				  '0%': { 
							transform: 'translateY(20px)',
							opacity: '0' 
						},
						'20%': {
							transform: 'translateY(20px)',
							opacity: '0' 
						},
				  '100%': { transform: 'translateY(0px)', opacity: '100' },
				}
			},
			animation: {
				'rise': 'riseup 500ms ease-in-out',
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
