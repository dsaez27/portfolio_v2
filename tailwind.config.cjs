/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#212336",
                //darken 10%
                darken: "#1c1e2b",
                primary: "#3bba9c",
                secondary: "#30987c",
                tertiary: "#2E3047",
                quaternary: "#43455c",
                quinary: "#5a5c73",

                //Scrollbar colors
                scrollbarBG: "#cfd8dc",
                scrollbarThumbBG: "#4b5153",
            },
            backgroundImage: {
                project: "linear-gradient(to top, transparent, #0c031e)",
                card: "linear-gradient(to top, #0c031e 20%, transparent 80%)",
                underline: "none repeat scroll 0 0 transparent",
            },
            transition: {},
            animation: {
                astronaut: "astronaut 10s ease infinite",
                underline: "transform 0.25s ease-out",
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
                underline: {
                    "0%": {
                        width: "0%",
                        background: "#f44653",
                    },
                    "50%": {
                        width: "50%",
                        background: "#f44653",
                    },
                    "100%": {
                        width: "50%",
                        background: "#f44653",
                    },
                },
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
