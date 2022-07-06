/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/component/**/**/*.{jsx, js, ts, tsx}",
    "./src/component/**/**/**/*.{jsx, js, ts, tsx}",
	"./src/pages/**/**/*.{jsx, js, ts, tsx}",
    "./src/pages/**/**/**/*.{jsx, js, ts, tsx}",  
  ],
  theme: { 
	extend:{
		fontFamily: {
      		'poppins': ['Poppins', 'sans-serif'],
      		'open-sans': ['Open Sans', 'sans-serif']
    		},
		colors:{
			'green': '#019267'
    		},
		screens: {
			'android': '300px'
		},
		fontSize: {
			'40px': '40px',
			'80%': '80%',
		},
		padding: {
			'10': '10px',
			'20': '20px'
		}
	},
  },
  plugins: [],
}
