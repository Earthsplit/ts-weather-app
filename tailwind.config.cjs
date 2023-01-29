/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Cabin, sans-serif']
		},
		extend: {
			colors: {
				whiteDimmed: 'rgb(239, 231, 225)'
			}
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px'
		}
	},
	plugins: []
}
