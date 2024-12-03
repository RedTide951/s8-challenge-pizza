import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function NavLinks() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div className="nav-links">
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => {
          setActiveTab(newValue); // Update state
        }}
        textColor="white"
        indicatorColor="secondary"
        className="nav-links"
      >
        <Tab
          label="Ana Sayfa"
          value="home"
          sx={{
            fontWeight: activeTab === "home" ? "bold" : "normal",
          }}
        />
        <Tab
          label="Seçenekler"
          value="preferences"
          sx={{
            fontWeight: activeTab === "preferences" ? "bold" : "normal",
          }}
        />
        <Tab
          label="Sipariş Oluştur"
          value="order"
          sx={{
            fontWeight: activeTab === "order" ? "bold" : "normal",
          }}
        />
      </Tabs>
    </div>
  );
}

export default NavLinks;
