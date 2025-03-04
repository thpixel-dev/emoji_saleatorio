import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'emoji',
        short_name: 'emj',
        description: 'um game de emoji',
        theme_color: 'image/png',
        icons: [
          {
            src: 'hugeicons--game192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'hugeicons--game592.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});