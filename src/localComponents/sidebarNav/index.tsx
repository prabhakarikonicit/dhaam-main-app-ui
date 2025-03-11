import React, {useState} from 'react';
import { SidebarNavProps } from '../../types';
import SidebarItem from '../../common/sidebarItem';
import GetStarted  from "../../assets/images/getStarted.svg";
import Dashboard  from "../../assets/images/dashboard.svg";
import Stores  from "../../assets/images/stores.svg";
import Settings  from "../../assets/images/settings.svg";
import {useNavigate} from "react-router-dom";

const SidebarNav: React.FC<SidebarNavProps> = ({
    onSettingsSubItemClick,
    onItemClick,
    currentView,
  }) => {
    const navigate = useNavigate();
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

    const handleItemClick = (view:string) => {
      navigate(`/${view}`);
      onItemClick(view);
    }
    return (
      <nav className="space-y-1">
        <SidebarItem
          icon={<img src={Stores}/>}
          text="Stores"
          onClick={() => handleItemClick('stores')}
          active={currentView === "stores"}
        />
        <SidebarItem
          icon={<img src={Settings}/>}
          text="Settings"
          onClick={() => handleItemClick('settings')}
          active={currentView === "settings"}
        />
        {/* <SidebarItem icon={<Orders />} text="Orders" hasSubmenu /> */}
        {/* <SidebarItem icon={<Menu />} text="Menu" hasSubmenu /> */}
        {/* <SidebarItem icon={<Customers />} text="Customers" /> */}
        {/* <SidebarItem icon={<img src={Stores} />} text="Stores" hasSubmenu />
        <SidebarItem
          icon={<img src={Settings} />}
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