import ReactDOM from "react-dom/client";
import React from "react";
const RemoteComponent = React.lazy(() => import('dhaam_order_app_ui/OrderButton'));

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: dhaam_main_app_ui</div>
    <div>Framework: react-19</div>
    <RemoteComponent/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);