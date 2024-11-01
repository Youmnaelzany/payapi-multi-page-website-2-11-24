/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"Dark-Pink": '#BA4270',
			"Link-Water-White": '#E1E1E1',
			"San-Juan-Blue": '#36536B',
			"Mirage-Blue": '#1B262F',
			"Charm-Pink": '#DA6D97',
			"Light-San-Juan-Blue": '#6C8294',
			"White-Smoke": '#FBFCFE',
		},
		extend: {
			fontFamily: {
				sans: ['Public Sans', 'sans-serif'],
				serif: ['DM Serif Display', 'serif'],
			},
		},
	},
	plugins: [],
}
