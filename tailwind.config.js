/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        'gradient-linear': 'linear-gradient(to right, rgb(98, 0, 234) 0%, rgb(236, 64, 122) 50%, rgb(98, 0, 234) 100%)',
      }),
      animation: {
        'bounce': 'bounce 3s infinite',
      }
    }
  },
  plugins: []
};