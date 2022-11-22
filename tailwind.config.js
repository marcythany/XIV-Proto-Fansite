/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"open-sans": ["Open Sans", "sans-serif"],
				saira: ["Saira", "sans-serif"],
			},
			backgroundImage: {
				"hero-bg": "url('/BuriedMemoriesBg.jpg')",
			},
		},
	},
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					primary: "#0f766e",
					secondary: "#ca8a04",
					accent: "#0891b2",
					neutral: "#2C1A2D",
					"base-100": "#404040",
					info: "#71B2E0",
					success: "#1DD384",
					warning: "#EFBE61",
					error: "#FA527C",
				},
			},
			"dark",
			"garden",
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
