/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Cubano', 'sans-serif']
			},
			colors: {
				primary: '#646cff',
				background: '#242424',
				foreground: '#1a1a1a',
				underground: '#2f2f2f',
				text: '#f0f0f0'
			}
		}
	},
	plugins: []
};
