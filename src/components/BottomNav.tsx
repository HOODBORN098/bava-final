import React from "react";
import { FaHome, FaUtensils, FaCalendarAlt, FaPhone } from "react-icons/fa";
import "./BottomNav.css";

const BottomNav: React.FC = () => (
  <nav className="bottom-nav">
    <a href="/" className="nav-item">
      <FaHome className="nav-icon" />
      Home
    </a>
    <a href="/menu" className="nav-item">
      <FaUtensils className="nav-icon" />
      Menu
    </a>
    <a href="/reserve" className="nav-item">
      <FaCalendarAlt className="nav-icon" />
      Reserve
    </a>
    <a href="/contact" className="nav-item">
      <FaPhone className="nav-icon" />
      Contact
    </a>
  </nav>
);

export default BottomNav;