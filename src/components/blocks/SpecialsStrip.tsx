import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export const SpecialsStrip = () => {
  return (
    <section className="bg-accent/10 border-y">
      <div className="container py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className="text-lg font-semibold">Today’s Specials</h3>
        <p className="text-muted-foreground">Ask our team about today’s special offers and combos.</p>
        <Button asChild variant="accent"><a href={site.glovoNakuru} target="_blank" rel="noopener">Order Now</a></Button>
      </div>
    </section>
  );
};
