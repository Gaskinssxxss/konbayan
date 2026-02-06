const { defineConfig } = require("@vue/cli-service");

const NGROK_HOST =
  "72b9-2001-448a-50c2-3cdb-98b8-98b8-4935-85ff.ngrok-free.app";

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 8081,

    // biar ngrok host gak ditolak
    allowedHosts: "all",

    // penting: arahkan websocket client ke ngrok lewat WSS
    client: {
      webSocketURL: `wss://${NGROK_HOST}/ws`,
    },
  },
});
