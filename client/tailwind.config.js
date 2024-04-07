/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        trees: "url('https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg')",
        myimg:"url('./assets/images/lastproducy.jpeg')",
        sky:"url('./assets/images/sky.jpeg')"
      }
    },
    colors:{
      "primaryColor":"#0D6EFD",
      "white":"rgb(255 255 255)",
      "gray-200":"#e2e8f0",
      "gray-500":"#8B96A5",
      "black":"#000000",
      "blue-heavy":"#8CB7F5",   
      "red-heavy":"#FFE3E3",
      "red":"#EB001B"
    }
  },
  plugins: [],
}