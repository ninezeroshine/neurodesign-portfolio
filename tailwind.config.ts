
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neuro: {
					100: '#e4e6ff',
					200: '#c6cbfd',
					300: '#a3adfc',
					400: '#818df9',
					500: '#6c6ff8',
					600: '#5a4cd9',
					700: '#4734ab',
					800: '#32227c',
					900: '#1d1546',
				},
				aurora: {
					blue: '#0ea5e9',
					purple: '#8b5cf6',
					pink: '#ec4899',
					cyan: '#06b6d4',
					green: '#10b981',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"blur-in": {
					"0%": { opacity: "0", filter: "blur(10px)" },
					"100%": { opacity: "1", filter: "blur(0)" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				},
				"text-gradient": {
					"0%": { "background-position": "0% 50%" },
					"100%": { "background-position": "100% 50%" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out forwards",
				"fade-up": "fade-up 0.7s ease-out forwards",
				"blur-in": "blur-in 0.6s ease-out forwards",
				"float": "float 6s ease-in-out infinite",
				"pulse-soft": "pulse-soft 3s ease-in-out infinite",
				"text-gradient": "text-gradient 4s linear infinite"
			},
			backgroundSize: {
				"200%": "200% 200%",
			},
			typography: {
				DEFAULT: {
					css: {
						color: 'rgb(var(--foreground))',
						a: {
							color: 'hsl(var(--primary))',
							'&:hover': {
								color: 'hsl(var(--primary))',
							},
						},
						'h1, h2, h3, h4, h5, h6': {
							color: 'rgb(var(--foreground))',
							fontFamily: 'Space Grotesk, sans-serif',
						},
						blockquote: {
							borderLeftColor: 'hsl(var(--primary))',
							backgroundColor: 'hsl(var(--muted))',
							padding: '1rem',
							borderRadius: '0.5rem',
						},
						hr: {
							borderColor: 'hsl(var(--border))',
						},
						strong: {
							color: 'hsl(var(--primary))',
						},
						pre: {
							backgroundColor: 'rgb(var(--muted))',
							color: 'rgb(var(--foreground))',
							borderRadius: '0.5rem',
						},
						code: {
							backgroundColor: 'rgba(var(--muted), 0.5)',
							color: 'rgb(var(--foreground))',
							padding: '0.2rem 0.4rem',
							borderRadius: '0.25rem',
						},
						img: {
							borderRadius: '0.5rem',
						},
						ol: {
							li: {
								'&::marker': {
									color: 'hsl(var(--primary))',
								},
							},
						},
						ul: {
							li: {
								'&::marker': {
									color: 'hsl(var(--primary))',
								},
							},
						},
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography'),
	],
} satisfies Config;
