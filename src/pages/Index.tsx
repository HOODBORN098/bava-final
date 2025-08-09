import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/blocks/Hero";
import { QuickActions } from "@/components/blocks/QuickActions";
import { MenuPreview } from "@/components/blocks/MenuPreview";
import { SpecialsStrip } from "@/components/blocks/SpecialsStrip";
import { Gallery } from "@/components/blocks/Gallery";
import { Reviews } from "@/components/blocks/Reviews";
import { Locations } from "@/components/blocks/Locations";
import { CTASection } from "@/components/blocks/CTASection";
import { Seo } from "@/components/common/Seo";
import { site } from "@/config/site";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    address: site.address,
    telephone: site.phoneNakuru,
    url: site.domain,
    servesCuisine: ["Halal", "Burgers", "Pizza", "Kenyan", "Biryani"],
  };
  return (
    <div>
      <Seo
        title="Bava Restaurant Nakuru — Halal Multicuisine & Fast Food"
        description="Bava Restaurant Nakuru — delicious burgers, biryani, pizzas, and halal local dishes. Dine-in, delivery and catering available. Call +254 799 963 000."
        canonical={`${site.domain}/`}
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <MenuPreview />
        <SpecialsStrip />
        <Gallery />
        <Reviews />
        <Locations />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
