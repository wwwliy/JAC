/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
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
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			/* JAC Titan Logistics Palette */
  			jac: {
  				yellow: '#FFCC00',
  				'yellow-hover': '#E6B800',
  				'yellow-dark': '#CC9F00',
  				obsidian: '#111111',
  				'obsidian-light': '#1A1A1A',
  				'obsidian-card': '#1E1E1E',
  				steel: '#F2F2F2',
  				'steel-dark': '#E0E0E0',
  				amber: '#E6B800',
  				sand: '#C4A668',
  			}
  		},
  		fontFamily: {
  			heading: ['Arial', 'Helvetica', 'sans-serif'],
  			body: ['Arial', 'Helvetica', 'sans-serif'],
  			display: ['Arial', 'Helvetica', 'sans-serif'],
  			mono: ['var(--font-mono)'],
  			arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
  			chinese: ['Noto Sans SC', 'sans-serif'],
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'heavy-lift': {
  				'0%': { opacity: '0', transform: 'translateY(40px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'beacon-pulse': {
  				'0%, 100%': { transform: 'scale(1)', opacity: '1' },
  				'50%': { transform: 'scale(1.8)', opacity: '0.4' }
  			},
  			'marquee': {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(-50%)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'heavy-lift': 'heavy-lift 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  			'beacon-pulse': 'beacon-pulse 2s ease-in-out infinite',
  			'marquee': 'marquee 30s linear infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
