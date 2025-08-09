import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/common/Seo";
import { site } from "@/config/site";
import { sections } from "@/data/menu";

const Menu = () => {
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
              <ul className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {s.items.map((it) => (
                  <li key={it.id} className="rounded-lg border p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{it.name}</p>
                    </div>
                    <p className="font-semibold">KES {it.price.toLocaleString()}</p>
                  </li>
                ))}
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
