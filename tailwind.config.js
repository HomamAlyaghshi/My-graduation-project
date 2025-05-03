module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // تعديل المسار حسب ملفات مشروعك
  ],
  theme: {
    extend: {
      colors: {
        blue: "#377DFF",
        // === Space Theme Colors ===
        spaceDark: "#0B0F26", // خلفية داكنة (أساسية)
        spaceMid: "#1C1F3A", // لون ثانوي للبطاقات
        neon: "#4F46E5", // لون نيون للأزرار أو التفاصيل البارزة
        star: "#FBBF24", // أصفر نجم
        lightText: "#E5E7EB", // نص رئيسي فاتح
        subText: "#9CA3AF", // نص فرعي أو ثانوي
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(135deg, #0B0F26, #4F46E5, #00FFC6)",
        "space-text": "linear-gradient(90deg, #FF6A00, #FF9E00, #FFD700)",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
