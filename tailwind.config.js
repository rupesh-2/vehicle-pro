/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#262626",
        card: "#ffffff",
        "card-foreground": "#262626",
        popover: "#ffffff",
        "popover-foreground": "#262626",
        primary: "#f97316",
        "primary-foreground": "#ffffff",
        secondary: "#f5f5f5",
        "secondary-foreground": "#404040",
        muted: "#f0f0f0",
        "muted-foreground": "#737373",
        accent: "#f97316",
        "accent-foreground": "#ffffff",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        border: "#e5e5e5",
        input: "#f5f5f5",
        ring: "#f97316",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
    },
  },
  plugins: [],
};
