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
            "light-blue-color": "var(--light-blue-color)",
            "dark-gray-color": "var(--dark-gray-color)",
            "gray-color": "var(--gray-color)",
            "light-yellow-color": "var(--light-yellow-color)",
            "light-green-color": "var(--light-green-color)",
            "light-pink-color": "var(--light-pink-color)",
        },
    },
    plugins: [
        function({ addUtilities }) {
            addUtilities({
                '.bg-clip-text': {
                    'background-clip': 'text',
                    '-webkit-background-clip': 'text',
                },
                '.text-fill-transparent': {
                    'text-fill-color': 'transparent',
                    '-webkit-text-fill-color': 'transparent',
                },
            });
        },
    ],
}

