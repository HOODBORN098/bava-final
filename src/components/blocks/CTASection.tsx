import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export const CTASection = () => {
  return (
    <section className="py-12 bg-hero-surface border-t">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Craving something delicious? Order or reserve now.</h2>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button asChild variant="hero" size="lg"><a href={site.glovoNakuru} target="_blank" rel="noopener">Order on Glovo</a></Button>
          <Button asChild variant="secondary" size="lg"><a href="/reserve">Reserve a Table</a></Button>
        </div>
      </div>
    </section>
  );
};
