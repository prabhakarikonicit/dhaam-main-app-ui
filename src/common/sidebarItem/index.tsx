import React, { useState } from 'react';
import { SidebarItemProps } from '../../types';
import { ChevronDown } from "lucide-react";

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon,
    text,
    active = false,
    hasSubmenu = false,
    children,
    onClick,
    subItems,
    onSubItemClick,
    selectedSubItem,
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleClick = () => {
      if (hasSubmenu) {
        setIsExpanded(!isExpanded);
      }
      if (onClick) {
        onClick();
      }
    };
  
    const handleSubItemClick = (item: string) => {
      if (onSubItemClick) {
        onSubItemClick(item);
      }
    };
  
    return (
      <div>
        <div
          onClick={handleClick}
          className={`flex items-center px-4 py-2 my-1 rounded-lg cursor-pointer ${
            active
              ? "bg-subMenus"
              : isExpanded
              ? "bg-gray-100"
              : "hover:bg-gray-50"
          }`}
        >
          <div className="text-gray-600 mr-3">{icon}</div>
          <span className="text-gray-700 flex-1 font-inter text-[14px] leading-[21px] font-[500]">
            {text}
          </span>
          {hasSubmenu && (
            <ChevronDown
              className={`h-4 w-4 text-gray-400 transform transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
        {isExpanded && subItems && (
          <div className="ml-4">
            {subItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center px-4 py-2 my-1 rounded-lg cursor-pointer ${
                  selectedSubItem === item.text
                    ? "bg-subMenus"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => handleSubItemClick(item.text)}
              >
                <span className="text-gray-700 flex-1 font-inter text-[14px] leading-[21px] font-[500]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    );
  };

  export default SidebarItem;