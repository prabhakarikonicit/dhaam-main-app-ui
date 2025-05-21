const env = process.env.NODE_ENV || "local";

console.log("Environment:", process.env.NODE_ENV);
const urls = {
  local: {
    dhaam_order_app_ui: "dhaam_order_app_ui@http://localhost:3002/dhaam_order_app_ui.js",
    dhaam_settings_app_ui: "dhaam_settings_app_ui@http://localhost:3003/dhaam_settings_app_ui.js",
    dhaam_store_app_ui: "dhaam_store_app_ui@http://localhost:3004/dhaam_store_app_ui.js",
    dhaam_menu_app_ui: "dhaam_menu_app_ui@http://localhost:3006/dhaam_menu_app_ui.js",
  },
  dev: {
    dhaam_order_app_ui: "dhaam_order_app_ui@http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-order/dhaam_order_app_ui.js",
    dhaam_settings_app_ui: "dhaam_settings_app_ui@http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-settings/dhaam_settings_app_ui.js",
    dhaam_store_app_ui: "dhaam_store_app_ui@http://http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-store/dhaam_store_app_ui.js",
    dhaam_menu_app_ui: "dhaam_menu_app_ui@http://http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-menu/dhaam_menu_app_ui.js",
  },
  test: {
    // ...add test URLs
  },
  stage: {
    // ...add stage URLs
  },
  prod: {
    dhaam_order_app_ui: "dhaam_order_app_ui@http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-order/dhaam_order_app_ui.js",
    dhaam_settings_app_ui: "dhaam_settings_app_ui@http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-settings/dhaam_settings_app_ui.js",
    dhaam_store_app_ui: "dhaam_store_app_ui@http://http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-store/dhaam_store_app_ui.js",
    dhaam_menu_app_ui: "dhaam_menu_app_ui@http://http://dhaam-react.s3-website-us-west-2.amazonaws.com/dhaam-menu/dhaam_menu_app_ui.js",
  },
};

export default urls[env];