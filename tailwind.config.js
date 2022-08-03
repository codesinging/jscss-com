/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './contents/**/*.{md,yml}',
        './components/**/*.{vue,js,ts}',
        './composables/**/*.{vue,js,ts}',
        './plugins/**/*.{vue,js,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
