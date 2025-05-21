import remoteUrls from "./remote-urls.js";

export const mfConfig = {
  name: "dhaam_main_app_ui",
  exposes: {},
  remotes: {
    ...remoteUrls,
  },
  shared: ["react", "react-dom"],
};
