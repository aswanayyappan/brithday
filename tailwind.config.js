/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'retro-black': '#000000',
                'retro-pink': '#FF69B4',
                'retro-gold': '#FFD700',
                'aqsa-pink': '#feecea',
                'aqsa-black': '#333333',
                'aqsa-text': '#FF7882',
                'aqsa-bg-letter': '#fff8e4',
                'aqsa-border': '#DACCBF',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Poppins"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in forwards',
                'wiggle': 'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            }
        },
    },
    plugins: [],
}
