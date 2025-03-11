import ReactDOM from "react-dom/client";
import { RemoteOrderDivComponent, RemoteSettingsDivComponent, RemoteStoreDivComponent, RemoteAdminDivComponent } from "./remoteComponents";
import "./index.css";
import SidebarNav from "./localComponents/sidebarNav";
import { useState } from "react";


const App = () => {
  const [selectedSettingsItem, setSelectedSettingsItem] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const handleSettingsSubItemClick = (item: string) => {
    setSelectedSettingsItem(item);
    setCurrentView("settings");
  };
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const handleItemClick = (view: string) => {
    setCurrentView(view);
    if (view === "dashboard") {
      setSelectedSettingsItem(null);
    }
    if (width < 640) {
      toggleSidebar();
    }
  };
  // <div className="mt-10 text-3xl mx-auto max-w-6xl">
  //   <div>Name: dhaam_main_app_ui</div>
  //   <div>Framework: react-19</div>
  //   <RemoteOrderDivComponent/>
  //   <RemoteSettingsDivComponent/>
  //   <RemoteStoreDivComponent/>
  //   <RemoteAdminDivComponent/>
  // </div>
  return (
    <div>
      <SidebarNav
        onSettingsSubItemClick={handleSettingsSubItemClick}
        onItemClick={handleItemClick}
        currentView={currentView}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);