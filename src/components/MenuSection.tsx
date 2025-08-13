import React from "react";
import { popular } from "../data/menu";

const MenuSection: React.FC = () => (
  <section>
    <h1>Popular Dishes</h1>
    {popular && popular.length > 0 ? (
      popular.map(item => (
        <div className="card" key={item.id}>
          {/* If you have images, place them in public/images/ and uncomment the next line */}
          {/* <img src={`/images/${item.photo}`} alt={item.name} style={{ width: "100%", borderRadius: "12px", marginBottom: "1em" }} /> */}
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p><strong>Price:</strong> KES {item.price}</p>
          <button>Order Now</button>
        </div>
      ))
    ) : (
      <p>No popular dishes available.</p>
    )}
  </section>
);

export default MenuSection;