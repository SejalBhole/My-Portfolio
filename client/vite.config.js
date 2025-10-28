import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { VitePWA } from 'vite-plugin-pwa'; // ⛔ temporarily disabled

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ⛔ Commented out to fix Vercel build error
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2}'],
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'google-fonts-cache',
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
    //           },
    //           cacheKeyWillBeUsed: async ({ request }) => {
    //             return `${request.url}?${Date.now()}`;
    //           }
    //         }
    //       },
    //       {
    //         urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
    //         handler: 'CacheFirst',
    //         options: {
    //           cacheName: 'gstatic-fonts-cache',
    //           expiration: {
    //             maxEntries: 10,
    //             maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
    //           }
    //         }
    //       }
    //     ]
    //   },
    //   manifest: {
    //     name: "Sejal Bhole Portfolio",
    //     short_name: "Sejal Portfolio",
    //     description: "Full Stack Developer Portfolio - React, Node.js, MongoDB",
    //     start_url: "/",
    //     display: "standalone",
    //     background_color: "#ffffff",
    //     theme_color: "#576cbc",
    //     icons: [
    //       {
    //         src: "/favicon.ico",
    //         sizes: "64x64",
    //         type: "image/png"
    //       },
    //       {
    //         src: "/favicon.ico",
    //         sizes: "192x192",
    //         type: "image/png",
    //         purpose: "any maskable"
    //       },
    //       {
    //         src: "/favicon.ico",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable"
    //       }
    //     ]
    //   }
    // })
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons', 'lucide-react'],
          fonts: ['@fontsource/outfit', '@fontsource/roboto']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons', 'lucide-react']
  },
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  }
});
