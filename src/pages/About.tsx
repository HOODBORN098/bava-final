import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/common/Seo";
import { site } from "@/config/site";

const About = () => {
  return (
    <div>
      <Seo title="About — Bava Restaurant Nakuru" description="Bava Restaurant — Nakuru’s halal multicuisine spot known for burgers, biryani and family platters." canonical={`${site.domain}/about`} />
      <Header />
      <main className="container py-10">
        <h1 className="text-3xl font-bold">Our Story</h1>
        <div className="mt-4 text-base leading-relaxed text-foreground">
          <p>Bava began with a simple mission — serve tasty, halal, affordable meals that bring people together. We now serve Nakuru and Thika with fresh ingredients and friendly service.</p>
          <p className="mt-3">We’re constantly improving our menu and service. Your feedback helps us grow — thank you for supporting local!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
