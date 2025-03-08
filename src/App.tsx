import ReactDOM from "react-dom/client";
import { RemoteOrderDivComponent } from "./remoteComponents";
import "./index.css";


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: dhaam_main_app_ui</div>
    <div>Framework: react-19</div>
    <RemoteOrderDivComponent/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);