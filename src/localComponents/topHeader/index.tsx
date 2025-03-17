import React from 'react';
import { Bell, Search, Info } from "lucide-react";
import { TopHeaderProps } from '../../types';
import Logo from '../../assets/images/logo.svg';
import GlobeAlt from '../../assets/images/globe-alt.svg';
import ExternalLink from '../../assets/images/external-link.svg';
import Calendar from '../../assets/images/calendar.svg';

const TopHeader: React.FC<TopHeaderProps> = ({
    userName,
    userImage,
    onMenuClick,
    width = 0,
  }) => {
    // const isMobile = width < 640 && width <= 466;
    const isMobile = width < 640;
  
    return (
      <div className=" flex flex-col">
        {/* Top Bar */}
        <div className=" bg-[#7C43DF] flex items-center px-3 py-3 gap-3">
          {isMobile && (
            <button
              onClick={onMenuClick}
              className="p-2 text-white hover:bg-white/10 rounded-lg font-inter font-[600] bg-backgroundWhite border border-reloadBorder  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
                  fill="#212121"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
                  fill="#212121"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z"
                  fill="#212121"
                />
              </svg>
            </button>
          )}
  
          {!isMobile && <img width="138" height="33" src={Logo} className="h-8 text-white " />}
  
          {/* Search */}
  
          <div className="flex-1 relative">
            <div className="flex items-center gap-4 justify-center ">
              <div
                className={`flex items-center bg-reloadBackground p-0 justify-start sm:w-1/2 md:w-1/2 py-[2px] ${
                  isMobile ? "bg-white" : "bg-white"
                } rounded-lg`}
              >
                <div
                  className={`absolute inset-y-0 left-50 pl-3 flex items-center pointer-events-none font-inter font-[600] bg-backgroundWhite rounded-custom `}
                >
                  <Search
                    className={`h-4 w-4 ${
                      isMobile ? "text-gray-500" : "text-gray-500"
                    }`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className={`w-3/4 h-9 pl-10 pr-3 rounded-lg ${
                    isMobile
                      ? "bg-white text-white placeholder-gray/60"
                      : "bg-white text-gray-900 placeholder-gray-500"
                  } text-[12px] focus:outline-none`}
                />
              </div>
  
              {!isMobile && (
                <button className="hidden md:flex sm:flex items-center h-[30px] bg-backgroundWhite rounded-lg px-4 ">
                  <img src={GlobeAlt} />
                  <span className="text-[12px] sm:px-1 md:px-1 font-inter font-[600] leading-[15.6px] text-gray-900">
                    www.design-mart.com
                  </span>
                  <img src={ExternalLink} />
                </button>
              )}
            </div>
          </div>
  
          {/* Desktop-only website link */}
          {/* Right section */}
          <div className="flex items-center gap-3">
            {!isMobile && (
              <button className="hidden md:flex items-center gap-2 px-3 py-1.5 font-[600] rounded-lg text-whiteColor text-[12px] font-inter">
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 1.4C3.88661 1.4 4.2 1.71342 4.2 2.1V2.8H4.9C5.28661 2.8 5.6 3.11342 5.6 3.5C5.6 3.88658 5.28661 4.2 4.9 4.2H4.2V4.9C4.2 5.28658 3.88661 5.6 3.5 5.6C3.11339 5.6 2.8 5.28658 2.8 4.9V4.2H2.1C1.71339 4.2 1.4 3.88658 1.4 3.5C1.4 3.11342 1.71339 2.8 2.1 2.8H2.8V2.1C2.8 1.71342 3.11339 1.4 3.5 1.4Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.4 1.4C8.71761 1.4 8.99541 1.61386 9.07668 1.9209L9.90213 5.03928L12.2498 6.39369C12.4665 6.51871 12.6 6.74986 12.6 7C12.6 7.25014 12.4665 7.48129 12.2498 7.60631L9.90213 8.96072L9.07668 12.0791C8.99541 12.3861 8.71761 12.6 8.4 12.6C8.08239 12.6 7.80459 12.3861 7.72332 12.0791L6.89787 8.96072L4.55025 7.60631C4.33356 7.48129 4.20005 7.25014 4.20005 7C4.20005 6.74986 4.33356 6.51871 4.55025 6.39369L6.89787 5.03928L7.72332 1.9209C7.80459 1.61386 8.08239 1.4 8.4 1.4Z"
                    fill="white"
                  />
                </svg>
                DHAAM AI
              </button>
            )}
  
            {/* Notification Bell */}
            <button
              className={`relative p-2 ${
                isMobile
                  ? "bg-backgroundWhite  hover:bg-white/10"
                  : "bg-backgroundWhite"
              } rounded-custom border border-reloadBorder`}
            >
              <Bell
                className={`h-5 w-5 ${
                  isMobile ? "bg-backgroundWhite" : "bg-white "
                }`}
              />
              {/* <div className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" /> */}
            </button>
  
            {/* User Profile */}
            {isMobile ? (
              <button className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={userImage || "/api/placeholder/32/32"}
                  alt={userName}
                  className="w-full h-full object-cover"
                />
              </button>
            ) : (
              <button className="flex items-center gap-2 pl-2 pr-1 py-1 bg-white rounded-lg">
                <span className="text-[12px] font-inter text-[12px] font-[600] leading-[15.6px]">
                  {userName}
                </span>
                <img
                  src={userImage || "/api/placeholder/32/32"}
                  alt={userName}
                  className="h-8 w-8 rounded-full"
                />
              </button>
            )}
          </div>
        </div>
  
        {/* Mobile Analytics Header */}
        {isMobile && (
          <div className="flex items-center justify-between p-3 bg-hidden">
            <h1 className="text-xl sm:text-xl px-6 font-inter font-[600] text-gray-800">
              Analytics
            </h1>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-8  px-8 sm:px-2 py-2  rounded-md text-gray-600 text-[12px] font-inter font-[600] bg-backgroundWhite border border-reloadBorder">
                Today
                <Calendar />
              </button>
              <button className="p-2 hover:bg-white/10 mx-3 font-inter font-[600] bg-backgroundWhite border border-reloadBorder rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z"
                    fill="#212121"
                  />
                  <path
                    d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z"
                    fill="#212121"
                  />
                  <path
                    d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z"
                    fill="#212121"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default TopHeader;