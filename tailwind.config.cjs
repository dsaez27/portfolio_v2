/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Primary colors
                primary: "#f44653",
                secondary: "##f5646f",
                tertiary: "#100426",
                quaternary: "#0c031e",
                quinary: "#f5f5f5",
                // Gradient colors
                gradientGreen: "#86efac",
                gradientBlue: "#3b82f6",
                gradientPurple: "#9333ea",
            },
            backgroundImage: {
                gradient: "linear-gradient(to right, #86efac, #3b82f6, #9333ea)",
                project: "linear-gradient(to top, transparent, #0c031e)",
                card: "linear-gradient(to top, #0c031e 5%, transparent 90%)",
            },
            animation: {
                astronaut: "astronaut 10s ease infinite",
                text: "text 10s linear infinite",
            },
            keyframes: {
                astronaut: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-50px)",
                    },
                },
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
        },
    },
    plugins: [],
};
