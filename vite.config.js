import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import it
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [react(), // 2. Add it to the plugins array
  tailwindcss(), flowbiteReact()],
})