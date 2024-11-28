import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./styles.css";

function Header() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <Navbar className="navbar" dark expand="md">
        <Nav className="navbar-container" navbar>
          <NavItem>
            <NavLink
              href="#home"
              active={activeTab === "home"}
              onClick={() => setActiveTab("home")}
            >
              Anasayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#menu"
              active={activeTab === "menu"}
              onClick={() => setActiveTab("menu")}
            >
              Seçenekler
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#order"
              active={activeTab === "order"}
              onClick={() => setActiveTab("order")}
            >
              Sipariş Oluştur
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
