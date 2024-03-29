import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// import viteCompression from 'vite-plugin-compression'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 监听所有地址（包括局域网与公网），方便内网调试
    host: '0.0.0.0',
  },
  base: './',
  plugins: [
    // viteCompression({
    //   algorithm: 'gzip',
    //   threshold: 256, // >=256字节时压缩
    //   verbose: true, // 打印压缩结果
    //   deleteOriginFile: false, // 不删除源文件
    //   filter: /\.(js|json|css)$/i // 文件名匹配
    // }),
    {
      // script执行前阻止网页渲染
      // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script
      // https://segmentfault.com/q/1010000042185350
      name: "scriptBlockingRender",
      transformIndexHtml(html) {
        return html.replaceAll(
          '<script type="module"',
          '<script type="module" blocking="render" async'
        );
      }
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'es2021',
    reportCompressedSize: false, // 不使用vite自带的方式打印压缩后的大小
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash:22].js`,
        chunkFileNames: `assets/[name].[hash:22].js`,
        assetFileNames: `assets/[name].[hash:22].[ext]`,
      }
    }
  }
})
