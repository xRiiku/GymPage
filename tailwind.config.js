/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'oswald': ['Oswald'],
      'body': ['Open Sans'],
    },
    screens: {
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}