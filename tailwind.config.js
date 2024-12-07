/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: [' "Parkinsans", sans-serif'],
      body: [' "Parkinsans", sans-serif'],
    },
    container: {
      center: true,
      padding:'2rem',
    },
  },
  plugins: [],
};
