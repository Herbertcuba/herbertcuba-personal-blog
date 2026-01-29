/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{njk,md,html,js}"],
  theme: {
    extend: {
      colors: {
        // Core Palette
        abyss: "#000000",
        void: "#0a0a0a",
        obsidian: "#111111",
        graphite: "#1a1a1a",
        slate: "#2a2a2a",
        
        // Text Hierarchy
        bone: "#f5f5f5",
        ash: "#a0a0a0",
        smoke: "#666666",
        
        // Electric Accents (use sparingly)
        acid: "#b0ff00",        // Primary accent
        "acid-dim": "#8acc00",
        volt: "#00ff88",        // Secondary
        hyper: "#7c3aed",       // Tertiary
        ember: "#ff4d00",       // International Orange
        
        // Semantic
        line: "#1f1f1f",
        "line-bright": "#333333",
      },
      fontFamily: {
        // Display: Bold, brutal headlines
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        // Body: Clean, readable
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        // Mono: Technical metadata
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        // Massive display scale
        "display-2xl": ["clamp(4rem, 12vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3rem, 8vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 5vw, 3rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "grid-gap": "1.5rem",
        "section": "clamp(4rem, 10vh, 8rem)",
      },
      borderRadius: {
        brutal: "0px",
        subtle: "2px",
        soft: "6px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(176, 255, 0, 0.3)",
        "glow-hover": "0 0 60px -10px rgba(176, 255, 0, 0.5)",
        hard: "8px 8px 0 0 #1a1a1a",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glitch": "glitch 0.3s ease-in-out",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
}
