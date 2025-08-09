import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/common/Seo";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

const packages = [
  { name: "Office Lunch (Per person)", price: "KES 600+", details: "Buffet style main + drink" },
  { name: "Family Platter", price: "KES 2,200+", details: "Feeds 4-6 people" },
  { name: "Event Catering (Custom Quote)", price: "Contact us", details: "Menu & staffing included" },
];

const Catering = () => {
  return (
    <div>
      <Seo title="Catering — Bava Restaurant Nakuru" description="Catering packages for offices, parties and weddings. Contact us for a quote." canonical={`${site.domain}/catering`} />
      <Header />
      <main className="container py-10">
        <h1 className="text-3xl font-bold">Catering & Events</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {packages.map((p) => (
            <article key={p.name} className="rounded-lg border p-5">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{p.details}</p>
              <p className="mt-3 font-bold">{p.price}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="hero"><a href="/contact#catering">Request a Quote</a></Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catering;
