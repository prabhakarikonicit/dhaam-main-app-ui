import ReactDOM from "react-dom/client";
import { RemoteOrderDivComponent, RemoteSettingsDivComponent, RemoteStoreDivComponent, RemoteAdminDivComponent } from "./remoteComponents";
import "./index.css";
import SidebarNav from "./localComponents/sidebarNav";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./localComponents/topHeader";


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
    <BrowserRouter>
      <div>
      <div className="flex flex-col h-screen">
      <TopHeader
        userName="Aman Kumar"
        onMenuClick={toggleSidebar}
        width={width}
      />
        <SidebarNav
          onSettingsSubItemClick={handleSettingsSubItemClick}
          onItemClick={handleItemClick}
          currentView={currentView}
        />
      </div>
      </div>
      <Routes>
        <Route path="/stores" element={<RemoteStoreDivComponent />} />
        <Route path="/settings" element={<RemoteSettingsDivComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);