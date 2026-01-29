import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: "d:/projects/java/crm-project2/demo/demo/frontend-crm/node_modules/react",
      "react-dom": "d:/projects/java/crm-project2/demo/demo/frontend-crm/node_modules/react-dom",
    },
  },
})
