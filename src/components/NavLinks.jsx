import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function NavLinks() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="nav-links">
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        textColor="white"
        indicatorColor="secondary"
        className="nav-links"
      >
        <Tab label="Ana Sayfa" value="home" />
        <Tab label="Seçenekler" value="preferences" />
        <Tab label="Sipariş Oluştur" value="order" />
      </Tabs>
    </div>
  );
}

export default NavLinks;
