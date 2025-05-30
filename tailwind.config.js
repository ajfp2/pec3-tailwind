/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  // Archivos a analizar para generar clases
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#123456'
      },
    },
  }
}