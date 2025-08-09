import dish from "@/assets/gallery-dish1.jpg";
import interior from "@/assets/gallery-interior1.jpg";
import platter from "@/assets/gallery-platter.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

export const Gallery = () => {
  const images = [
    { src: dish, alt: "Chicken biryani bowl" },
    { src: interior, alt: "Restaurant interior" },
    { src: platter, alt: "Mixed grill platter" },
  ];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">A Taste of Bava</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <button key={i} onClick={() => { setActive(i); setOpen(true); }} className="group relative overflow-hidden rounded-lg border">
              <img loading="lazy" src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <img src={images[active].src} alt={images[active].alt} className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </section>
  );
};
