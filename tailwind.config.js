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
      'min2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }

      'minxl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

      'minlg': {'min': '1080px'},
      // => @media (min-width: 1080px) { ... }

      'minmd': {'min': '768px'},
      // => @media (min-width: 768px) { ... }

      'minsm': {'min': '640px'},
      // => @media (min-width: 640px) { ... }

      'max2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }

      'maxxl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'maxlg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'maxmd': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'maxsm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }
    }
  },
  plugins: [],
}