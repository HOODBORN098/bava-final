export const site = {
  name: "Bava Restaurant Nakuru",
  domain: "https://bavarestaurant.co.ke",
  address: "Kenyatta Avenue, Nakuru CBD (opposite Nyayo Gardens)",
  phoneNakuru: "+254799963000",
  phoneThika: "+254799996333",
  email: "info@bavarestaurant.co.ke",
  glovoNakuru: "https://glovoapp.com/ke/en/nakuru/bava-restaurant-nak/",
  whatsappNumber: "254799963000",
  googleMapsUrl: "https://maps.google.com/?q=Bava+Restaurant+Nakuru",
  // Chat widgets (set only one: Crisp or Tawk.to)
  crispWebsiteId: "", // e.g. 1234-abcd-5678-efgh
  tawkPropertyId: "", // e.g. 64a.../1h... (first segment)
  tawkWidgetId: "", // e.g. default
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  spiceLevel?: number;
  isHalal?: boolean;
  isVegan?: boolean;
  photo?: string;
};
