module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'main-bg': "url('/bg.jpg')"
          }
      },
    },
    plugins: [],
  }