export const mfConfig = {
  name: "dhaam_main_app_ui",
  exposes: {},
  remotes: {
    dhaam_order_app_ui: "dhaam_order_app_ui@http://localhost:3002/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
