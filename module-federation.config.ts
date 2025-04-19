export const mfConfig = {
  name: "dhaam_main_app_ui",
  exposes: {},
  remotes: {
    dhaam_order_app_ui: "dhaam_order_app_ui@http://localhost:3002/dhaam_order_app_ui.js",
    dhaam_settings_app_ui: "dhaam_settings_app_ui@http://localhost:3003/dhaam_settings_app_ui.js",
    dhaam_store_app_ui: "dhaam_store_app_ui@http://localhost:3004/dhaam_store_app_ui.js",
    dhaam_menu_app_ui: "dhaam_menu_app_ui@http://localhost:3006/dhaam_menu_app_ui.js",
  },
  shared: ["react", "react-dom"],
};
