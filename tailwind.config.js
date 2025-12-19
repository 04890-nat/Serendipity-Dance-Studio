/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0d0d12",
                surface: "#16161e",
                primary: {
                    DEFAULT: "#6667AB", // Pantone 2022 Very Peri
                    hover: "#555691",
                },
                accent: {
                    green: "#8ED462", // From reference
                    red: "#ff705d",   // From reference
                    yellow: "#f5e211",// From reference
                    blue: "#4b9ff9",  // From reference
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slow-spin': 'spin 20s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
