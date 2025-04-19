import React, { useState } from "react";
import { SidebarNavProps } from "../../types";
import SidebarItem from "../../common/sidebarItem";
import GetStarted from "../../assets/images/getStarted.svg";
import Dashboard from "../../assets/images/dashboard.svg";
import Stores from "../../assets/images/stores.svg";
import Settings from "../../assets/images/settings.svg";
import Orders from "../../assets/images/orders.svg";
import Menu from "../../assets/images/menu.svg";
import Customers from "../../assets/images/customers.svg";
import { useNavigate } from "react-router-dom";

const SidebarNav: React.FC<SidebarNavProps> = ({
  onSettingsSubItemClick,
  currentView,
  setCurrentView
}) => {
  const navigate = useNavigate();
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  const settingsSubItems = [
    { text: "General" },
    { text: "Integration" },
    { text: "Configurations" },
    { text: "Marketplace Design" },
  ];
  const menuSubItems = [
    { text: "Category" },
    { text: "Product" },
    { text: "AddOns" },
    { text: "Combos" },
    { text: "Deals" },
  ];
  const handleSubItemClick = (item: string) => {
      const path = `${currentView}/${item.toLocaleLowerCase().replace(' ', '_')}`
      navigate(path);
    setSelectedSubItem(item);
    onSettingsSubItemClick(item);
  };

  const handleItemClick = (view: string, hasSubItems:boolean) => {
    if(!hasSubItems) navigate(`/${view}`);
    setCurrentView(view)
  };
  return (
    <nav className="space-y-1">
      <SidebarItem
        icon={<img src={GetStarted} />}
        text="Get Started"
        onClick={() => handleItemClick("get_started", false)}
        active={currentView === "get_started"}
      />
      <SidebarItem
        icon={<img src={Dashboard} />}
        text="Dashboard"
        onClick={() => handleItemClick("dashboard", false)}
        active={currentView === "dashboard"}
      />
      <SidebarItem
        icon={<img src={Orders} />}
        text="Orders"
        onClick={() => handleItemClick("orders", false)}
        active={currentView === "orders"}
      />
      <SidebarItem
        icon={<img src={Menu} />}
        text="Menu"
        subItems={menuSubItems}
        selectedSubItem={selectedSubItem}
        onSubItemClick={handleSubItemClick}
        onClick={() => handleItemClick("menu", true)}
        active={currentView === "menu"}
        hasSubmenu
      />
      <SidebarItem icon={<img src={Customers} />} text="Customers" />
      <SidebarItem
        icon={<img src={Stores} />}
        text="Stores"
        onClick={() => handleItemClick("stores", false)}
        active={currentView === "stores"}
      />
      <SidebarItem
        icon={<img src={Settings} />}
        text="Settings"
        subItems={settingsSubItems}
        selectedSubItem={selectedSubItem}
        onSubItemClick={handleSubItemClick}
        onClick={() => handleItemClick("settings", true)}
        active={currentView === "settings"}
        hasSubmenu
      />
    </nav>
  );
};

export default SidebarNav;
