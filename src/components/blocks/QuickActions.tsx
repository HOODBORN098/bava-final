import { Button } from "@/components/ui/button";
import { Bike, Calendar, UtensilsCrossed } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { site } from "@/config/site";

export const QuickActions = () => {
  const actions = [
    { label: "Order on Glovo", href: site.glovoNakuru, icon: Bike },
    { label: "Reserve a Table", href: "/reserve", icon: Calendar },
    { label: "Catering Enquiry", href: "/catering", icon: UtensilsCrossed },
    { label: "WhatsApp Order", href: `https://wa.me/${site.whatsappNumber}`, icon: SiWhatsapp },
  ];
  return (
    <section className="py-6">
      <div className="container grid grid-cols-2 gap-3 md:grid-cols-4">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <Button asChild key={a.label} variant="secondary" className="h-12">
              <a href={a.href} target={a.href.startsWith("http") ? "_blank" : undefined} rel={a.href.startsWith("http") ? "noopener" : undefined} className="inline-flex items-center gap-2 justify-center w-full">
                <Icon className="size-4" /> {a.label}
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
};
