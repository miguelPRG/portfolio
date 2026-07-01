import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command, mode }) => {
  let server;

  if (command === "serve") {
    const serverEnv = loadEnv(mode, path.resolve(__dirname, "server"), "");
    const apiPort = serverEnv.PORT;

    if (!apiPort) {
      throw new Error("PORT is missing from server/.env");
    }

    server = {
      host: "::",
      port: 3000,
      strictPort: true,
      proxy: {
        "/api": `http://localhost:${apiPort}`,
      },
    };
  }

  return {
    server,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
