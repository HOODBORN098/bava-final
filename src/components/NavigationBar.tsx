import React, { useState, useRef, useEffect } from "react";
import { FaHome, FaUtensils, FaCalendarAlt, FaPhone } from "react-icons/fa";
import "./NavigationBar.css";

const foodCategories = [
  {
    name: "Burgers",
    items: [
      {
        name: "Classic Beef Burger",
        photo: "https://source.unsplash.com/400x300/?burger,beef",
      },
      {
        name: "Chicken Burger",
        photo: "https://source.unsplash.com/400x300/?burger,chicken",
      },
      {
        name: "Veggie Burger",
        photo: "https://source.unsplash.com/400x300/?burger,veggie",
      },
    ],
  },
  {
    name: "Rice",
    items: [
      {
        name: "Chicken Biryani",
        photo: "https://source.unsplash.com/400x300/?biryani,chicken",
      },
      {
        name: "Beef Pilau",
        photo: "https://source.unsplash.com/400x300/?pilau,beef",
      },
      {
        name: "Vegetable Fried Rice",
        photo: "https://source.unsplash.com/400x300/?fried-rice,vegetable",
      },
    ],
  },
  {
    name: "Pizzas",
    items: [
      {
        name: "Margherita Pizza",
        photo: "https://source.unsplash.com/400x300/?pizza,margherita",
      },
      {
        name: "Pepperoni Pizza",
        photo: "https://source.unsplash.com/400x300/?pizza,pepperoni",
      },
      {
        name: "Veggie Pizza",
        photo: "https://source.unsplash.com/400x300/?pizza,vegetable",
      },
    ],
  },
  {
    name: "Platters",
    items: [
      {
        name: "Family Mixed Grill",
        photo: "https://source.unsplash.com/400x300/?grill,platter",
      },
    ],
  },
];

const NavigationBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setSelectedCategory(null);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navigation-bar">
      <a href="/" className="nav-link">
        <FaHome className="nav-icon" />
        Home
      </a>
      <div
        className="nav-link dropdown"
        ref={dropdownRef}
        onClick={() => setDropdownOpen((open) => !open)}
        tabIndex={0}
        style={{ userSelect: "none" }}
      >
        <FaUtensils className="nav-icon" />
        Menu
        {dropdownOpen && (
          <div className="dropdown-content">
            {foodCategories.map((cat, idx) => (
              <div key={cat.name}>
                <button
                  className="dropdown-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(
                      selectedCategory === idx ? null : idx
                    );
                  }}
                >
                  {cat.name}
                </button>
                {selectedCategory === idx && (
                  <div className="dropdown-submenu">
                    {cat.items.map((item) => (
                      <div className="dropdown-item" key={item.name}>
                        <img
                          src={item.photo}
                          alt={item.name}
                          className="dropdown-photo"
                        />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <a href="/reserve" className="nav-link">
        <FaCalendarAlt className="nav-icon" />
        Reserve
      </a>
      <a href="/contact" className="nav-link">
        <FaPhone className="nav-icon" />
        Contact
      </a>
    </nav>
  );
};

export default NavigationBar;