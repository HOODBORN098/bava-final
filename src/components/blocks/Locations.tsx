import { site } from "@/config/site";

export const Locations = () => {
  const locations = [
    { title: "Nakuru", address: site.address, phone: site.phoneNakuru },
    { title: "Thika (branch)", address: "Makongeni, Thika (next to Rubis)", phone: site.phoneThika },
  ];
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Locations</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {locations.map((l) => (
            <article key={l.title} className="rounded-lg border p-5">
              <h3 className="text-lg font-semibold">{l.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{l.address}</p>
              <div className="mt-2 flex items-center gap-3">
                <a className="underline" href={`tel:${l.phone}`}>{l.phone}</a>
                <a className="underline" href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener">WhatsApp</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
