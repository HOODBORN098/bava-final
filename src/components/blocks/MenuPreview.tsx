import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { popular } from "@/data/menu";

export const MenuPreview = () => {
  return (
    <section id="menu" className="py-10">
      <div className="container flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Picks</h2>
        <Button asChild variant="link"><a href="/menu">Full Menu</a></Button>
      </div>
      <div className="container grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {popular.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
              <p className="mt-3 font-semibold">KES {item.price.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
