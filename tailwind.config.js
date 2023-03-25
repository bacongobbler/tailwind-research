/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

const Color = require('color')
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()
const negate = (clr) => Color(clr).negate().rgb().string()

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		screens: {
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1536px"
		},
		fontFamily: {
			"sans": ["Space Grotesk", ...defaultTheme.fontFamily.sans],
			"serif": [...defaultTheme.fontFamily.serif],
			"mono": ["SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "Courier", "monospace"]
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFFFFF',
			black: '#000000',
			seagreen: {
				DEFAULT: '#34E8BD',
				invert: negate('#34E8BD'),
				light: lighten('#34E8BD', 0.1),
				xlight: lighten('#34E8BD', 0.2),
				dark: darken('#34E8BD', 0.1),
				xdark: darken('#34E8BD', 0.2),
			},
			oxfordblue: {
				DEFAULT: '#0D203F',
				invert: negate('#0D203F'),
				light: lighten('#0D203F', 0.05),
				xlight: lighten('#0D203F', 0.1),
				dark: darken('#0D203F', 0.05),
				xdark: darken('#0D203F', 0.1),
			},
			rust: {
				DEFAULT: '#EF946C',
				invert: negate('#EF946C'),
				light: lighten('#EF946C', 0.1),
				xlight: lighten('#EF946C', 0.2),
				dark: darken('#EF946C', 0.1),
				xdark: darken('#EF946C', 0.2),
			},
			lavender: {
				DEFAULT: '#BEA7E5',
				invert: negate('#BEA7E5'),
				light: lighten('#BEA7E5', 0.1),
				xlight: lighten('#BEA7E5', 0.2),
				dark: darken('#BEA7E5', 0.1),
				xdark: darken('#BEA7E5', 0.2),
			},
			colablue: {
				DEFAULT: '#0E8FDD',
				invert: negate('#0E8FDD'),
				light: lighten('#0E8FDD', 0.1),
				xlight: lighten('#0E8FDD', 0.2),
				dark: darken('#0E8FDD', 0.1),
				xdark: darken('#0E8FDD', 0.2),
			},
			darkspace: {
				DEFAULT: '#213762',
				invert: negate('#213762'),
				light: lighten('#213762', 0.1),
				xlight: lighten('#213762', 0.2),
				dark: darken('#213762', 0.1),
				xdark: darken('#213762', 0.2),
			},
			darkocean: {
				DEFAULT: '#0A455A',
				invert: negate('#0A455A'),
				light: lighten('#0A455A', 0.05),
				xlight: lighten('#0A455A', 0.1),
				dark: darken('#0A455A', 0.05),
				xdark: darken('#0A455A', 0.1),
			},
			darkolive: {
				DEFAULT: '#1F7A8C',
				invert: negate('#1F7A8C'),
				light: lighten('#1F7A8C', 0.05),
				xlight: lighten('#1F7A8C', 0.1),
				dark: darken('#1F7A8C', 0.05),
				xdark: darken('#1F7A8C', 0.1),
			},
			darkplum: {
				DEFAULT: '#525776',
				invert: negate('#525776'),
				light: lighten('#525776', 0.05),
				xlight: lighten('#525776', 0.1),
				dark: darken('#525776', 0.05),
				xdark: darken('#525776', 0.1),
			},
			midgreen: {
				DEFAULT: '#1FBCA0',
				invert: negate('#1FBCA0'),
				light: lighten('#1FBCA0', 0.1),
				xlight: lighten('#1FBCA0', 0.2),
				dark: darken('#1FBCA0', 0.1),
				xdark: darken('#1FBCA0', 0.2),
			},
			midblue: {
				DEFAULT: '#345995',
				invert: negate('#345995'),
				light: lighten('#345995', 0.1),
				xlight: lighten('#345995', 0.2),
				dark: darken('#345995', 0.1),
				xdark: darken('#345995', 0.2),
			},
			midgrey: {
				DEFAULT: '#E8EEF6',
				invert: negate('#E8EEF6'),
				light: lighten('#E8EEF6', 0.1),
				xlight: lighten('#E8EEF6', 0.2),
				dark: darken('#E8EEF6', 0.1),
				xdark: darken('#E8EEF6', 0.2),
			},
			red: {
				DEFAULT: '#CE5050',
				invert: negate('#CE5050'),
				light: lighten('#CE5050', 0.1),
				xlight: lighten('#CE5050', 0.2),
				dark: darken('#CE5050', 0.1),
				xdark: darken('#CE5050', 0.2),
			},
			lightgrey: {
				DEFAULT: '#D9DBE8',
				invert: negate('#D9DBE8'),
				light: lighten('#D9DBE8', 0.05),
				xlight: lighten('#D9DBE8', 0.1),
				dark: darken('#D9DBE8', 0.05),
				xdark: darken('#D9DBE8', 0.1),
			},
			lightplum: {
				DEFAULT: '#D3C3D9',
				invert: negate('#D3C3D9'),
				light: lighten('#D3C3D9', 0.01),
				xlight: lighten('#D3C3D9', 0.03),
				dark: darken('#D3C3D9', 0.01),
				xdark: darken('#D3C3D9', 0.03),
			},
			lightlavender: {
				DEFAULT: '#ECE5EE',
				invert: negate('#ECE5EE'),
				light: lighten('#ECE5EE', 0.01),
				xlight: lighten('#ECE5EE', 0.03),
				dark: darken('#ECE5EE', 0.01),
				xdark: darken('#ECE5EE', 0.03),
			},
			lightlemon: {
				DEFAULT: '#F9F7EE',
				invert: negate('#F9F7EE'),
				light: lighten('#F9F7EE', 0.01),
				xlight: lighten('#F9F7EE', 0.03),
				dark: darken('#F9F7EE', 0.01),
				xdark: darken('#F9F7EE', 0.03),
			}
		}
	},
	plugins: [],
}
