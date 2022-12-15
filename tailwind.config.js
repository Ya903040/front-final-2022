/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'flag_stone': "url('/src/assets/images/stone_flag.jpg')",
        'alatoo_logo': "url('/src/assets/images/alatoo_logo.jpg')",
        'broke_flag': "url('/src/assets/images/broke_flag.jpg')",
        'common_flag': "url('/src/assets/images/common_flag.png')",
        'country_flag': "url('/src/assets/images/country_flag.jpg')",
        'logo_flag': "url('/src/assets/images/logo_flag.png')",
        'stone_flag_blur': "url('/src/assets/images/stone_flag_blur.jpg')",
      }
    },
  },
  plugins: [],
}