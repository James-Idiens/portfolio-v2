/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				bounce: 'bounce 1s infinite',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite'
			},
			keyframes: {
				'text-slide': {
					'0%, 13.33%': {
						transform: 'translateY(0%)'
					},
					'16.66%, 30%': {
						transform: 'translateY(-14.28%)'
					},
					'33.33%, 46.66%': {
						transform: 'translateY(-28.57%)'
					},
					'50%, 63.33%': {
						transform: 'translateY(-42.85%)'
					},
					'66.66%, 80%': {
						transform: 'translateY(-57.14%)'
					},
					'83.33%, 96.66%': {
						transform: 'translateY(-71.42%)'
					},
					'100%, 125%': {
						transform: 'translateY(-85.71%)'
					}
				}
			}
		}
	},
	plugins: []
};
