import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteExternalsPlugin } from "vite-plugin-externals";
import { viteTrantorPlugin } from "@terminus/t-package-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "console2.app.terminus.io",
      port: 3002,
    },
    plugins: [
      react(),
      viteExternalsPlugin({
        react: "React",
        "react-dom": "ReactDOM",
        "@terminus/t-runtime": "TRuntime",
        "@formily/react": "FormilyReact",
        "@formily/core": "FormilyCore",
        "@tanstack/react-query": "ReactQuery",
        '@terminus/t-console-designer-runtime': 'TConsoleDesignerRuntime',
        "@terminus/t-console-designer-components": "TConsoleDesignerComponents",
      }),
      viteTrantorPlugin({
        /**
         * ！以下配置为必填项，请使用自己的配置代替
         */
        namespace: "custom-example", // 命名空间，一个组件库工程项目有且仅有一个唯一的namespace
        development: {
          // 开发调试环境
          target: "https://portal-dev.app.terminus.io",
          // 设计器环境
          designer: "https://console-dev.app.terminus.io",
        },
      }),
    ],
    define: {
      // 定义全局常量替换方式
      "process.env.NODE_ENV":
        mode === "production" ? '"production"' : '"development"',
    },
    build: {
      // 打包配置
      rollupOptions: {
        input: {
          runtime: resolve(__dirname, "src/runtime/index.tsx"),
          designer: resolve(__dirname, "src/designer/index.tsx"),
        },
      },
      minify: false,
    },
  };
});
