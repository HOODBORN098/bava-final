import { Bike, UtensilsCrossed, Store, Users, Gift, Sparkles, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/config/site";

export const Services = () => {
  const services = [
    { title: "Dine-in", desc: "Cozy seating for families and friends.", icon: UtensilsCrossed },
    { title: "Delivery", desc: "Order via Glovo within Nakuru.", icon: Bike, href: site.glovoNakuru },
    { title: "Takeaway", desc: "Fast pickup for on-the-go.", icon: Store },
    { title: "Catering", desc: "Events, offices and home functions.", icon: Users, href: "/catering" },
    { title: "Family Platters", desc: "Large sharing platters for 3–6 people.", icon: Gift },
    { title: "Halal Kitchen", desc: "100% halal ingredients and preparation.", icon: Sparkles },
    { title: "Phone Orders", desc: "Call us to place your order.", icon: Phone, href: `tel:${site.phoneNakuru}` },
    { title: "WhatsApp Orders", desc: "Quick chat to order or ask questions.", icon: MessageCircle, href: `https://wa.me/${site.whatsappNumber}` },
  ];

  return (
    <section className="py-10">
      <div className="container">
        <header className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
          <p className="mt-2 text-muted-foreground">Dine with us, order delivery, or let us cater your next event.</p>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            const Wrapper: any = s.href ? 'a' : 'div';
            const wrapperProps = s.href
              ? { href: s.href, target: s.href.startsWith('http') ? '_blank' : undefined, rel: s.href.startsWith('http') ? 'noopener' : undefined, className: 'block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg' }
              : { className: '' };
            return (
              <Wrapper key={s.title} {...wrapperProps} aria-label={s.title}>
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <span className="inline-flex items-center justify-center size-9 rounded-md bg-secondary text-secondary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-muted-foreground">{s.desc}</CardContent>
                </Card>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
