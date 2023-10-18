/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px'
		},
		extend: {
			colors: {
				
				
				
			  },
		},
	},
	plugins: [
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/aspect-ratio'),
	],
}
