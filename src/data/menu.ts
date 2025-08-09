import type { MenuItem } from "@/config/site";

export const popular: MenuItem[] = [
  { id: "burger-classic", name: "Classic Beef Burger", description: "Grilled beef patty, cheese, lettuce, tomato, house sauce.", price: 650, category: "Burgers", isHalal: true },
  { id: "biryani-chicken", name: "Chicken Biryani", description: "Aromatic basmati rice, tender chicken, saffron & spices.", price: 750, category: "Rice", isHalal: true },
  { id: "pizza-margherita", name: "Margherita Pizza", description: "Tomato, fresh mozzarella, basil.", price: 900, category: "Pizzas", isHalal: true },
  { id: "platter-family", name: "Family Mixed Grill", description: "Chicken tikka, beef skewers, fries, coleslaw.", price: 2200, category: "Platters", isHalal: true },
];

export const sections: { name: string; items: MenuItem[] }[] = [
  {
    name: "Breakfast",
    items: [
      { id: "bf-omelette", name: "Masala Omelette", price: 350, category: "Breakfast" },
      { id: "bf-chai", name: "Masala Chai", price: 180, category: "Breakfast" },
    ],
  },
  { name: "Burgers & Wraps", items: [popular[0], { id: "wrap-chicken", name: "Chicken Wrap", price: 600, category: "Wraps" }] },
  { name: "Pizzas", items: [popular[2], { id: "pizza-bbq", name: "BBQ Chicken Pizza", price: 1100, category: "Pizzas" }] },
  { name: "Plates & Local Dishes", items: [{ id: "nyama", name: "Nyama Choma Plate", price: 850, category: "Local" }] },
  { name: "Platters & Family", items: [popular[3]] },
  { name: "Drinks & Desserts", items: [{ id: "drink-fresh", name: "Fresh Juice", price: 300, category: "Drinks" }] },
];
