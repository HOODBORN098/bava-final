import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/common/Seo";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Reserve = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const date = data.get("date");
    const time = data.get("time");
    const guests = data.get("guests");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Reservation received!", description: "We'll confirm shortly via phone/WhatsApp." });
      const msg = encodeURIComponent(`New reservation: ${name} | ${phone} | ${date} ${time} | ${guests} guests`);
      window.open(`https://wa.me/${site.whatsappNumber}?text=${msg}`, "_blank");
    }, 700);
  };

  return (
    <div>
      <Seo title="Reserve — Bava Restaurant Nakuru" description="Reserve a table at Bava Restaurant. Walk-ins welcome." canonical={`${site.domain}/reserve`} />
      <Header />
      <main className="container py-10">
        <h1 className="text-3xl font-bold">Reserve a Table</h1>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
          <Input name="name" placeholder="Full name" required />
          <Input name="phone" placeholder="Phone / WhatsApp" required type="tel" />
          <div className="grid grid-cols-2 gap-3">
            <Input name="date" type="date" required />
            <Input name="time" type="time" required />
          </div>
          <Input name="guests" type="number" min={1} placeholder="Number of guests" required />
          <Textarea name="special_requests" placeholder="Special requests (optional)" />
          <div className="flex gap-3">
            <Button type="submit" variant="hero" disabled={loading}>{loading ? "Sending..." : "Submit Reservation"}</Button>
            <Button type="button" variant="secondary" asChild>
              <a href={`tel:${site.phoneNakuru}`}>Call Us</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">We may request a small deposit for large groups; please notify us 6 hours in advance for cancellations.</p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Reserve;
