/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardbg: '#f5f5f7',
        white: '#fff',
        black: '#000',
        grey: '#333333',
        blue: '#0071e3'
      },
      screens: {
        '2xs': '320px',
        'xs': '480px',
        '2sm': '568px',
        'sm': '640px',
        '2md': '768px',
        'md': '850px',
        'lg': '1024px',
        'xl': '1280px',
        '1xl': '1376px',
        '2xl': '1536px',
        '3xl': '1700px',
        
      },
      fontSize: {
        "2xs": "11px",
        "xs": "12px",
        "2sm": "13px",
        "sm": "14px",
        "1base": "15px",
        "base": "16px",
    }
    },
  },
  plugins: [],
}

