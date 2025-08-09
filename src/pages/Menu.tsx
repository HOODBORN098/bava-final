import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/common/Seo";
import { site } from "@/config/site";
import { sections } from "@/data/menu";

const Menu = () => {
  const images = import.meta.glob("@/assets/menu/*", { eager: true, as: "url" }) as Record<string, string>;
  const resolvePhoto = (name?: string) => {
    if (!name) return undefined;
    const entry = Object.entries(images).find(([k]) => k.endsWith(name));
    return entry?.[1];
  };

  return (
    <div>
      <Seo title="Menu — Bava Restaurant Nakuru" description="Explore Bava's menu: burgers, pizzas, biryani, wraps, platters, breakfast and halal local dishes." canonical={`${site.domain}/menu`} />
      <Header />
      <main className="container py-10">
        <h1 className="text-3xl font-bold">Menu</h1>
        <div className="mt-8 space-y-10">
          {sections.map((s) => (
            <section key={s.name}>
              <h2 className="text-xl font-semibold">{s.name}</h2>
              <ul className="mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {s.items.map((it) => {
                  const src = resolvePhoto(it.photo);
                  return (
                    <li key={it.id} className="rounded-lg border overflow-hidden bg-background">
                      <article>
                        {src && (
                          <img
                            src={src}
                            alt={`${it.name} — Bava Restaurant menu`}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                          />
                        )}
                        <div className="p-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="font-medium">{it.name}</p>
                            {it.description && (
                              <p className="text-sm text-muted-foreground mt-1">{it.description}</p>
                            )}
                          </div>
                          <p className="font-semibold whitespace-nowrap">KES {it.price.toLocaleString()}</p>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
