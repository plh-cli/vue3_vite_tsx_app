import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: "./",
    plugins: [
      legacy({
          targets: [
              "Android > 39",
              "Chrome >= 60",
              "Safari >= 10.1",
              "iOS >= 10.3",
              "Firefox >= 54",
              "Edge >= 15",
          ],
          modernPolyfills: true
      }),
      vue(),
      vueJsx()
    ],
    //静态资源处理
    assetsInclude: "**/*.glb",
    build: {
        target: ['ios11', 'Chrome 64']
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/style.scss";'
        }
      }
    },
    server: {
      hmr: true,
      port: 5166,
      host: '0.0.0.0',
      proxy: {
        "/api": {
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};