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
      { id: "bf-omelette", name: "Masala Omelette", price: 350, category: "Breakfast" },
      { id: "bf-chai", name: "Masala Chai", price: 180, category: "Breakfast" },
      { id: "bf-spanish", name: "Spanish Omelette", price: 380, category: "Breakfast" },
      { id: "bf-pancakes", name: "Fluffy Pancakes", price: 400, category: "Breakfast" },
      { id: "bf-mandazi", name: "Mandazi (3pc)", price: 180, category: "Breakfast" },
      { id: "bf-bhajia", name: "Aloo Bhajia", price: 320, category: "Breakfast" },
    ],
  },
  {
    name: "Burgers & Wraps",
    items: [
      popular[0],
      { id: "burger-double", name: "Double Beef Burger", price: 850, category: "Burgers", photo: "burger-double.jpg" },
      { id: "burger-chicken", name: "Crispy Chicken Burger", price: 700, category: "Burgers", photo: "burger-chicken.jpg" },
      { id: "burger-veggie", name: "Veggie Burger", price: 650, category: "Burgers", isVegan: true },
      { id: "wrap-chicken", name: "Chicken Wrap", price: 600, category: "Wraps", photo: "wrap-chicken.jpg" },
      { id: "wrap-shawarma", name: "Beef Shawarma Wrap", price: 650, category: "Wraps" },
      { id: "wrap-falafel", name: "Falafel Wrap", price: 580, category: "Wraps", isVegan: true, photo: "wrap-falafel.jpg" },
    ],
  },
  {
    name: "Pizzas",
    items: [
      popular[2],
      { id: "pizza-bbq", name: "BBQ Chicken Pizza", price: 1100, category: "Pizzas", photo: "pizza-bbq.jpg" },
      { id: "pizza-pepperoni", name: "Pepperoni Pizza", price: 1200, category: "Pizzas" },
      { id: "pizza-veg", name: "Veg Supreme Pizza", price: 1000, category: "Pizzas" },
      { id: "pizza-hawaiian", name: "Hawaiian Pizza", price: 1100, category: "Pizzas" },
    ],
  },
  {
    name: "Rice & Biryani",
    items: [
      popular[1],
      { id: "biryani-beef", name: "Beef Biryani", price: 800, category: "Rice", photo: "biryani-beef.jpg" },
      { id: "pilau-beef", name: "Beef Pilau", price: 650, category: "Rice" },
      { id: "pilau-veg", name: "Vegetable Pilau", price: 580, category: "Rice", isVegan: true },
    ],
  },
  {
    name: "Plates & Local Dishes",
    items: [
      { id: "nyama", name: "Nyama Choma Plate", price: 850, category: "Local", photo: "nyama-choma.jpg" },
      { id: "chicken-fry", name: "Chicken Fry (with ugali)", price: 850, category: "Local" },
      { id: "beef-wet", name: "Wet Fry Beef (with ugali)", price: 780, category: "Local" },
      { id: "ugali-sukuma", name: "Ugali & Sukuma Wiki", price: 400, category: "Local", isVegan: true },
      { id: "tilapia", name: "Tilapia Fry (whole)", price: 950, category: "Local" },
    ],
  },
  {
    name: "Platters & Family",
    items: [
      popular[3],
      { id: "wings-platter", name: "Chicken Wings Platter", price: 1600, category: "Platters" },
    ],
  },
  {
    name: "Sides & Snacks",
    items: [
      { id: "fries", name: "French Fries", price: 250, category: "Sides", photo: "fries.jpg" },
      { id: "fries-masala", name: "Masala Fries", price: 320, category: "Sides" },
      { id: "coleslaw", name: "Coleslaw", price: 150, category: "Sides" },
      { id: "salad", name: "Garden Salad", price: 300, category: "Sides" },
      { id: "samosa-beef", name: "Beef Samosa (3pc)", price: 300, category: "Sides", photo: "samosa.jpg" },
      { id: "samosa-veg", name: "Veg Samosa (3pc)", price: 280, category: "Sides", isVegan: true, photo: "samosa.jpg" },
    ],
  },
  {
    name: "Drinks & Beverages",
    items: [
      { id: "drink-fresh", name: "Fresh Juice", price: 300, category: "Drinks", photo: "fresh-juice.jpg" },
      { id: "milkshake-vanilla", name: "Vanilla Milkshake", price: 450, category: "Drinks", photo: "milkshake.jpg" },
      { id: "soda", name: "Soda (500ml)", price: 150, category: "Drinks" },
      { id: "water", name: "Bottled Water (500ml)", price: 100, category: "Drinks" },
      { id: "chai", name: "Plain Tea", price: 150, category: "Drinks" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { id: "icecream", name: "Vanilla Ice Cream", price: 300, category: "Desserts", photo: "dessert-icecream.jpg" },
      { id: "cake", name: "Chocolate Cake Slice", price: 350, category: "Desserts" },
      { id: "fruit-salad", name: "Fresh Fruit Salad", price: 320, category: "Desserts" },
    ],
  },
  {
    name: "Breakfast Combos",
    items: [
      { id: "bf-combo-english", name: "English Breakfast Combo", description: "Eggs, sausage, toast, fries + tea/coffee.", price: 820, category: "Breakfast" },
      { id: "bf-combo-omelette", name: "Omelette Combo", description: "Masala omelette, toast + tea/coffee.", price: 650, category: "Breakfast" },
      { id: "bf-combo-pancakes", name: "Pancakes Combo", description: "2 pancakes, syrup + tea/coffee.", price: 600, category: "Breakfast" },
    ],
  },
  {
    name: "Croissants",
    items: [
      { id: "croissant-butter", name: "Butter Croissant", price: 250, category: "Breakfast" },
      { id: "croissant-chocolate", name: "Chocolate Croissant", price: 300, category: "Breakfast" },
      { id: "croissant-cheese", name: "Cheese Croissant", price: 320, category: "Breakfast" },
    ],
  },
  {
    name: "Pancakes",
    items: [
      { id: "pancakes-plain", name: "Plain Pancakes", price: 350, category: "Breakfast" },
      { id: "pancakes-banana", name: "Banana Pancakes", price: 380, category: "Breakfast" },
      { id: "pancakes-blueberry", name: "Blueberry Pancakes", price: 420, category: "Breakfast" },
    ],
  },
  {
    name: "Egg Specials",
    items: [
      { id: "eggs-two", name: "Two Eggs Any Style", price: 250, category: "Breakfast" },
      { id: "eggs-cheese-omelette", name: "Cheese Omelette", price: 380, category: "Breakfast" },
      { id: "eggs-bhurji", name: "Egg Bhurji", price: 380, category: "Breakfast" },
    ],
  },
  {
    name: "Waffles",
    items: [
      { id: "waffles-classic", name: "Classic Waffles", price: 450, category: "Breakfast" },
      { id: "waffles-chocolate", name: "Chocolate Waffles", price: 500, category: "Breakfast" },
      { id: "waffles-strawberry", name: "Strawberry Waffles", price: 520, category: "Breakfast" },
    ],
  },
  {
    name: "Kiddie Breakfast",
    items: [
      { id: "kids-pancakes", name: "Kids Pancakes", price: 280, category: "Breakfast" },
      { id: "kids-omelette", name: "Kids Omelette", price: 300, category: "Breakfast" },
      { id: "kids-sausage-fries", name: "Kids Sausage & Fries", price: 350, category: "Breakfast" },
    ],
  },
  {
    name: "Pilau & Specials",
    items: [
      { id: "pilau-special", name: "Special Pilau", description: "Special pilau rice with a blend of spices.", price: 720, category: "Rice" },
      { id: "pilau-chicken", name: "Chicken Pilau", price: 680, category: "Rice" },
    ],
  },
  {
    name: "Biryani & Stews",
    items: [
      { id: "biryani-lamb", name: "Lamb Biryani", price: 850, category: "Rice" },
      { id: "stew-chicken", name: "Chicken Stew", description: "Chicken on bone, boiled then fried and served in a stew.", price: 700, category: "Local" },
      { id: "stew-beef", name: "Beef Stew", price: 700, category: "Local" },
    ],
  },
  {
    name: "Hot Drinks",
    items: [
      { id: "drink-tea-masala", name: "Masala Tea", price: 200, category: "Drinks" },
      { id: "drink-coffee", name: "Black Coffee", price: 200, category: "Drinks" },
      { id: "drink-cappuccino", name: "Cappuccino", price: 300, category: "Drinks" },
      { id: "drink-latte", name: "Cafe Latte", price: 320, category: "Drinks" },
    ],
  },
];
