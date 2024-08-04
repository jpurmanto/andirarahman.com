import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				text: 'var(--text)',
				background: 'var(--background)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)'
			},

			fontFamily: {
				sans: ['Gantari', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: []
} as Config;
