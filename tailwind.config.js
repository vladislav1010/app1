module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        
      gray: {
        900: 'hsl(0,0%,20%)',
      }
      }
    },
  },
  variants: {
    extend: { 
    },
  },
  plugins: [],
};
