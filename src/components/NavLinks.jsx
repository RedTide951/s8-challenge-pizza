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
      >
        <Tab
          label="Ana Sayfa -"
          value="home"
          sx={{
            fontWeight: activeTab === "home" ? "bold" : "normal",
            padding: "1px",
            margin: "1px",
          }}
        />
        <Tab
          label="Seçenekler -"
          value="preferences"
          sx={{
            fontWeight: activeTab === "preferences" ? "bold" : "normal",
            padding: "1px",
            margin: "1px",
          }}
        />
        <Tab
          label="Sipariş Oluştur"
          value="order"
          sx={{
            fontWeight: activeTab === "order" ? "bold" : "normal",
            padding: "1px",
            margin: "1px",
          }}
        />
      </Tabs>
    </div>
  );
}

export default NavLinks;
