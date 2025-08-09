import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { popular } from "@/data/menu";

export const MenuPreview = () => {
  const images = import.meta.glob("@/assets/menu/*", { eager: true, as: "url" }) as Record<string, string>;
  const resolvePhoto = (name?: string) => {
    if (!name) return undefined;
    const entry = Object.entries(images).find(([k]) => k.endsWith(name));
    return entry?.[1];
  };
  return (
    <section id="menu" className="py-10">
      <div className="container flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Picks</h2>
        <Button asChild variant="link"><a href="/menu">Full Menu</a></Button>
      </div>
      <div className="container grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {popular.map((item) => {
          const src = resolvePhoto(item.photo);
          return (
            <Card key={item.id} className="hover:shadow-lg transition overflow-hidden">
              {src && (
                <img src={src} alt={`${item.name} — Bava Restaurant popular`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              )}
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                <p className="mt-3 font-semibold">KES {item.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
