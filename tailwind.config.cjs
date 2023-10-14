/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				
				
				
			  },
		},
	},
	plugins: [
		require('@tailwindcss/container-queries'),
	],
}
