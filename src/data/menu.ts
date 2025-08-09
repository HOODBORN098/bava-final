import type { MenuItem } from "@/config/site";

export const popular: MenuItem[] = [
  { id: "burger-classic", name: "Classic Beef Burger", description: "Grilled beef patty, cheese, lettuce, tomato, house sauce.", price: 650, category: "Burgers", isHalal: true, photo: "burger-classic.jpg" },
  { id: "biryani-chicken", name: "Chicken Biryani", description: "Aromatic basmati rice, tender chicken, saffron & spices.", price: 750, category: "Rice", isHalal: true, photo: "biryani-chicken.jpg" },
  { id: "pizza-margherita", name: "Margherita Pizza", description: "Tomato, fresh mozzarella, basil.", price: 900, category: "Pizzas", isHalal: true, photo: "pizza-margherita.jpg" },
  { id: "platter-family", name: "Family Mixed Grill", description: "Chicken tikka, beef skewers, fries, coleslaw.", price: 2200, category: "Platters", isHalal: true, photo: "platter-family.jpg" },
];

export const sections: { name: string; items: MenuItem[] }[] = [
  {
    name: "Breakfast",
    items: [
      { id: "bf-omelette", name: "Masala Omelette", price: 350, category: "Breakfast", photo: "fries.jpg" },
      { id: "bf-chai", name: "Masala Chai", price: 180, category: "Breakfast", photo: "fresh-juice.jpg" },
      { id: "bf-spanish", name: "Spanish Omelette", price: 380, category: "Breakfast", photo: "fries.jpg" },
      { id: "bf-pancakes", name: "Fluffy Pancakes", price: 400, category: "Breakfast", photo: "dessert-icecream.jpg" },
      { id: "bf-mandazi", name: "Mandazi (3pc)", price: 180, category: "Breakfast", photo: "fries.jpg" },
      { id: "bf-bhajia", name: "Aloo Bhajia", price: 320, category: "Breakfast", photo: "fries.jpg" },
    ],
  },
  {
    name: "Burgers & Wraps",
    items: [
      popular[0],
      { id: "burger-double", name: "Double Beef Burger", price: 850, category: "Burgers", photo: "burger-double.jpg" },
      { id: "burger-chicken", name: "Crispy Chicken Burger", price: 700, category: "Burgers", photo: "burger-chicken.jpg" },
      { id: "burger-veggie", name: "Veggie Burger", price: 650, category: "Burgers", isVegan: true, photo: "burger-chicken.jpg" },
      { id: "wrap-chicken", name: "Chicken Wrap", price: 600, category: "Wraps", photo: "wrap-chicken.jpg" },
      { id: "wrap-shawarma", name: "Beef Shawarma Wrap", price: 650, category: "Wraps", photo: "wrap-chicken.jpg" },
      { id: "wrap-falafel", name: "Falafel Wrap", price: 580, category: "Wraps", isVegan: true, photo: "wrap-falafel.jpg" },
    ],
  },
  {
    name: "Pizzas",
    items: [
      popular[2],
      { id: "pizza-bbq", name: "BBQ Chicken Pizza", price: 1100, category: "Pizzas", photo: "pizza-bbq.jpg" },
      { id: "pizza-pepperoni", name: "Pepperoni Pizza", price: 1200, category: "Pizzas", photo: "pizza-bbq.jpg" },
      { id: "pizza-veg", name: "Veg Supreme Pizza", price: 1000, category: "Pizzas", photo: "pizza-margherita.jpg" },
      { id: "pizza-hawaiian", name: "Hawaiian Pizza", price: 1100, category: "Pizzas", photo: "pizza-margherita.jpg" },
    ],
  },
  {
    name: "Rice & Biryani",
    items: [
      popular[1],
      { id: "biryani-beef", name: "Beef Biryani", price: 800, category: "Rice", photo: "biryani-beef.jpg" },
      { id: "pilau-beef", name: "Beef Pilau", price: 650, category: "Rice", photo: "biryani-beef.jpg" },
      { id: "pilau-veg", name: "Vegetable Pilau", price: 580, category: "Rice", isVegan: true, photo: "biryani-chicken.jpg" },
    ],
  },
  {
    name: "Plates & Local Dishes",
    items: [
      { id: "nyama", name: "Nyama Choma Plate", price: 850, category: "Local", photo: "nyama-choma.jpg" },
      { id: "chicken-fry", name: "Chicken Fry (with ugali)", price: 850, category: "Local", photo: "nyama-choma.jpg" },
      { id: "beef-wet", name: "Wet Fry Beef (with ugali)", price: 780, category: "Local", photo: "nyama-choma.jpg" },
      { id: "ugali-sukuma", name: "Ugali & Sukuma Wiki", price: 400, category: "Local", isVegan: true, photo: "nyama-choma.jpg" },
      { id: "tilapia", name: "Tilapia Fry (whole)", price: 950, category: "Local", photo: "nyama-choma.jpg" },
    ],
  },
  {
    name: "Platters & Family",
    items: [
      popular[3],
      { id: "wings-platter", name: "Chicken Wings Platter", price: 1600, category: "Platters", photo: "platter-family.jpg" },
    ],
  },
  {
    name: "Sides & Snacks",
    items: [
      { id: "fries", name: "French Fries", price: 250, category: "Sides", photo: "fries.jpg" },
      { id: "fries-masala", name: "Masala Fries", price: 320, category: "Sides", photo: "fries.jpg" },
      { id: "coleslaw", name: "Coleslaw", price: 150, category: "Sides", photo: "fries.jpg" },
      { id: "salad", name: "Garden Salad", price: 300, category: "Sides", photo: "fries.jpg" },
      { id: "samosa-beef", name: "Beef Samosa (3pc)", price: 300, category: "Sides", photo: "samosa.jpg" },
      { id: "samosa-veg", name: "Veg Samosa (3pc)", price: 280, category: "Sides", isVegan: true, photo: "samosa.jpg" },
    ],
  },
  {
    name: "Drinks & Beverages",
    items: [
      { id: "drink-fresh", name: "Fresh Juice", price: 300, category: "Drinks", photo: "fresh-juice.jpg" },
      { id: "milkshake-vanilla", name: "Vanilla Milkshake", price: 450, category: "Drinks", photo: "milkshake.jpg" },
      { id: "soda", name: "Soda (500ml)", price: 150, category: "Drinks", photo: "fresh-juice.jpg" },
      { id: "water", name: "Bottled Water (500ml)", price: 100, category: "Drinks", photo: "fresh-juice.jpg" },
      { id: "chai", name: "Plain Tea", price: 150, category: "Drinks", photo: "fresh-juice.jpg" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { id: "icecream", name: "Vanilla Ice Cream", price: 300, category: "Desserts", photo: "dessert-icecream.jpg" },
      { id: "cake", name: "Chocolate Cake Slice", price: 350, category: "Desserts", photo: "dessert-icecream.jpg" },
      { id: "fruit-salad", name: "Fresh Fruit Salad", price: 320, category: "Desserts", photo: "dessert-icecream.jpg" },
    ],
  },
];
