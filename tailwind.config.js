/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2F0069", // Roxo Luxy
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#FC4C04", // Laranja Luxy
                    foreground: "#ffffff",
                },
            }
        },
    },
    plugins: [],
}