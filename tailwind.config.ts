import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
      backgroundImage: {
        "radial-hero": "radial-gradient(circle at center,  #EA168E 0%, #1F154B 72%)",
      },

      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui']
      },
      
      colors: {
        twitter: "#FFFFFF",
        instagram: "#F00073",
        whatsapp: "#25D366",
        facebook: "#1877F2",
        linkedin: "#2867B2",
        youtube: "#FF0000",
        tiktok: "#000000"
      }
    },
  },
  plugins: [],
};
export default config;

// hsl(0, 0%, 50.2%), hsl(292.5, 72%, 18.8%);;
// (circle at center, #EA168E 0%, #1F154B 72%)