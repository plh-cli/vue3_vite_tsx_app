import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: "./",
    plugins: [vue(), vueJsx()],
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
      // 禁用或配置 HMR 连接
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
    // //构建
    // build: {
    //   //浏览器兼容性  "esnext"|"modules"
    //   target: "modules",
    //   //输出路径
    //   outDir: "dist",
    //   //生成静态资源的存放路径
    //   assetsDir: "assets",
    //   //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    //   assetsInlineLimit: 4096,
    //   //启用/禁用 CSS 代码拆分
    //   cssCodeSplit: true,
    //   //构建后是否生成 source map 文件
    //   sourcemap: false,
    //   //自定义底层的 Rollup 打包配置
    //   rollupOptions: {},
    //   //@rollup/plugin-commonjs 插件的选项
    //   commonjsOptions: {},
    //   //当设置为 true，构建后将会生成 manifest.json 文件
    //   manifest: false,
    //   //设置为 false 可以禁用最小化混淆，
    //   //或是用来指定使用哪种混淆器
    //   //boolean | 'terser' | 'esbuild'
    //   minify: "terser",
    //   //传递给 Terser 的更多 minify 选项。
    //   terserOptions: {},
    //   //设置为 false 来禁用将构建后的文件写入磁盘
    //   write: true,
    //   //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    //   emptyOutDir: true,
    //   //chunk 大小警告的限制
    //   chunkSizeWarningLimit: 500
    // },
    // //SSR 选项
    // ssr: {
    //   //列出的是要为 SSR 强制外部化的依赖
    //   external: [],
    //   //列出的是防止被 SSR 外部化依赖项。
    //   noExternal: []
    // }
  });
};
