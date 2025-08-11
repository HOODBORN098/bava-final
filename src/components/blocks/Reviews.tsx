import { Star } from "lucide-react";

const reviews = [
  { name: "Alex", rating: 5, comment: "Best burgers in Nakuru! Fast service and great taste." },
  { name: "Mary", rating: 5, comment: "Their biryani is so flavorful. Highly recommend!" },
  { name: "Sam", rating: 4, comment: "Family platter was perfect for our group." },
];

export const Reviews = () => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">What Customers Say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <article key={idx} className="rounded-lg border p-4 transition-transform duration-200 hover:scale-[1.01] hover:shadow-md motion-reduce:transition-none motion-reduce:hover:scale-100">
              <div className="flex items-center gap-2">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 text-sm">“{r.comment}”</p>
              <p className="mt-2 text-xs text-muted-foreground">— {r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
