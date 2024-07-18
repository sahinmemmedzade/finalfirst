import React, { useState } from "react";
import "./menu.css";
import { RiLiveFill, RiCloseFill } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    { text: "İlham Əliyevin Britaniya səfəri" },
    { text: "Avropa Siyasi Birliyi Sammiti - 2024" },
    { text: "Şəhid dəfni" },
    { text: "Parlament seçkisi - 2024" },
    { text: "Hava proqnozu" },
    { text: "Günün əsas xəbərləri" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    
  };

  const toggleMenuClicked = () => {
    const menuContent = document.querySelector(".menu-content");
    menuContent.classList.add("menu-content-clicked");
    
  };

  return (
    <div className={`menu-header ${sidebarOpen ? "opened" : ""}`}>
      <a href="/" className="logo">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"
          alt="Logo"
        />
      </a>
      <div className="menu-icon" onClick={toggleSidebar}>
        <IoIosMenu />
      </div>
      <div className="menu-content">
        <div className="close-icon" onClick={toggleSidebar}>
          <RiCloseFill />
        </div>
        {items.map((item, i) => (
          <div key={i} className="menu-item" onClick={toggleMenuClicked}>
            <div className="menu-item-inner">
              <span className="item-text">{item.text}</span>
            </div>
          </div>
        ))}
        {sidebarOpen && (
          <div className="camera-icon-bottom">
            <RiLiveFill />
          </div>
        )}
        {!sidebarOpen && (
          <div className="camera-icon-near">
            <RiLiveFill />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
