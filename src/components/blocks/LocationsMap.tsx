import { site } from "@/config/site";

export const LocationsMap = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Find Us on the Map</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Nakuru</h3>
            <p className="text-sm text-muted-foreground mt-1">{site.address}</p>
            <div className="mt-3 overflow-hidden rounded-md">
              <iframe
                title="Bava Restaurant Nakuru on Google Maps"
                src={`https://www.google.com/maps?q=Bava%20Restaurant%20Nakuru%2C%20Kenyatta%20Avenue%2C%20Nakuru&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64"
              />
            </div>
          </article>
          <article className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Thika (branch)</h3>
            <p className="text-sm text-muted-foreground mt-1">Makongeni, Thika (next to Rubis)</p>
            <div className="mt-3 overflow-hidden rounded-md">
              <iframe
                title="Bava Restaurant Thika on Google Maps"
                src={`https://www.google.com/maps?q=Bava%20Restaurant%20Thika%20Makongeni%20next%20to%20Rubis&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
