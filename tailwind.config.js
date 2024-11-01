/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js}"],
    theme: {
        extend: {
            colors: {
                "dodgeroll-gold": "#F79F1A",
                "apple-green": "#046E1B",
                "dire-wolf": "#292727",
            },
        },

        container: {
            center: true,
            padding: "2rem",
        },
    },
};
