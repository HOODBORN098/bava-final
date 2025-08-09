import heroImg from "@/assets/hero-bava.jpg";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div ref={glowRef} aria-hidden className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "radial-gradient(600px 300px at var(--x,50%) var(--y,10%), hsl(0 68% 42% / 0.12), transparent 60%)" }} />

      <div className="container grid gap-6 py-10 md:py-16 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Bava Restaurant — Nakuru's Halal Flavor Spot</h1>
          <p className="mt-4 text-lg text-muted-foreground">Fresh, tasty and served with love. Dine-in or get delivered via Glovo.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={site.glovoNakuru} target="_blank" rel="noopener">Order on Glovo</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#menu">View Menu</a>
            </Button>
            <Button asChild variant="accent" size="lg">
              <a href={`tel:${site.phoneNakuru}`}>Call to Order</a>
            </Button>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img src={heroImg} alt="Bava Restaurant popular dishes: burgers, biryani, pizza" className="h-full w-full object-cover" loading="eager" />
        </div>
      </div>
    </section>
  );
};
