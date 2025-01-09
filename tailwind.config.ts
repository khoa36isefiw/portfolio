import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				headerBg: '#3f3f3f',
				headerBorder: '#9595954d',
				'primary-color': '#ffc86a',
				'warning-msg-text': '#FAAD14',
				'warning-msg-bg': '#D6B464',
				'success-msg-text': '#FAAD14',
				'success-msg-bg': '#39BF2D',
				'error-msg-bg': '#EC0C0C',





				// successBorder: '#18920D',
				// errorBg: '#F7E4E4',
				// errorIcon: '#EC0C0C',
				// warningBg: '#F5EDDA',

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},


		},
		dropShadow: {
			'xl': '0 0px 8px #ffc86a',
		},


		keyframes: {
			typing: {
				"0%": { width: "0%" },
				"100%": { width: "100%" },
			},
			blink: {
				"50%": { borderColor: "transparent" },
				"100%": { borderColor: "white" },
			},
		},
		animation: {
			typing: "typing 2s steps(20, end) infinite alternate",
			blink: "blink 0.7s step-end infinite",
		},


	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
