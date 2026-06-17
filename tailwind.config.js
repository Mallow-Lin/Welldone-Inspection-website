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
                'brand-teal': '#208080',
                'brand-gold': '#ecb403',
            },
            fontFamily: {
                oswald: ['var(--font-oswald)', 'sans-serif'],
                aleo: ['var(--font-aleo)', 'sans-serif'],
                merriweather: ['var(--font-merriweather)', 'serif'],
                roboto: ['var(--font-roboto)', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 10px 30px -12px rgba(15, 23, 42, 0.18)',
                'soft': '0 2px 8px rgba(15, 23, 42, 0.06)',
                'elevated': '0 18px 40px -20px rgba(15, 23, 42, 0.28)',
            },
            fontSize: {
                'display': ['3rem', { lineHeight: '1.1' }],
                'heading': ['2.25rem', { lineHeight: '1.15' }],
                'subheading': ['1.5rem', { lineHeight: '1.25' }],
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