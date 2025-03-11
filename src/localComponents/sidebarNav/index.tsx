import React, {useState} from 'react';
import { SidebarNavProps } from '../../types';
import SidebarItem from '../../common/sidebarItem';
import GetStarted  from "../../assets/images/getStarted.svg";
import Dashboard  from "../../assets/images/dashboard.svg";

const SidebarNav: React.FC<SidebarNavProps> = ({
    onSettingsSubItemClick,
    onItemClick,
    currentView,
  }) => {
    const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
    const settingsSubItems = [
      { text: "General" },
      { text: "Integration" },
      { text: "Configurations" },
      { text: "Marketplace Design" },
    ];
    const handleSubItemClick = (item: string) => {
      setSelectedSubItem(item);
      onSettingsSubItemClick(item);
    };
    return (
      <nav className="space-y-1">
        <SidebarItem
          icon={<img src={GetStarted}/>}
          text="Get Started"
          onClick={() => onItemClick("get-started")}
          active={currentView === "get-started"}
        />
        <SidebarItem
          icon={<img src={Dashboard}/>}
          text="Dashboard"
          onClick={() => onItemClick("dashboard")}
          active={currentView === "dashboard"}
        />
        {/* <SidebarItem icon={<Orders />} text="Orders" hasSubmenu />
        <SidebarItem icon={<Menu />} text="Menu" hasSubmenu />
        <SidebarItem icon={<Customers />} text="Customers" />
        <SidebarItem icon={<Stores />} text="Stores" hasSubmenu />
        <SidebarItem
          icon={<Settings />}
          text="Settings"
          hasSubmenu={true}
          subItems={settingsSubItems}
          selectedSubItem={selectedSubItem}
          onSubItemClick={handleSubItemClick}
          active={currentView === "settings"}
        /> */}
      </nav>
    );
  };

  export default SidebarNav;