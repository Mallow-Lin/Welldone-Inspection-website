/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,mdx}",
        "./data/**/*.{js,jsx,ts,tsx,mdx}",
        "./lib/**/*.{js,jsx,ts,tsx,mdx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-teal': '#1b6666',
                'brand-gold': '#ecb403',
            },
            fontFamily: {
                oswald: ['var(--font-oswald)', 'sans-serif'],
                aleo: ['var(--font-aleo)', 'sans-serif'],
                merriweather: ['var(--font-merriweather)', 'serif'],
                roboto: ['var(--font-roboto)', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 70px 63px -60px #000',
            }
        },
    },
    plugins: [],
    safelist: [
        'translate-y-0',
        'translate-x-0',
        'translate-x-full',
        'translate-y-full',
        '-translate-x-full',
        '-translate-y-full',
    ]
}