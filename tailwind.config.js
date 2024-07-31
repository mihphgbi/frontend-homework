/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',],
    theme: {
        extend: {},
        colors: {
            "white-color": "var(--white-color)",
            "black-color": "var(--black-color)",
            "dark-blue-color": "var(--dark-blue-color)",
            "blue-color": "var(--blue-color)",
            "gray-color": "var(--gray-color)",
            "light-yellow-color": "var(--light-yellow-color)",
            "light-green-color": "var(--light-green-color)",
            "light-pink-color": "var(--light-pink-color)",
        },
        backgroundColor: {
          'blue-gradient': "var(--primary-gradient)"
        }
    },
    plugins: [],
}

