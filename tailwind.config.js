/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          950: "#0A0A0B",
        },
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A"
        },
        accent: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B"
        },
        success: {
          500: "#22C55E"
        },
        warn: {
          500: "#F59E0B"
        },
        danger: {
          500: "#EF4444"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        softDark: "0 10px 30px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};