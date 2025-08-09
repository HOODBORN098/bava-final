import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/common/Seo";
import { site } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <Seo title="Contact — Bava Restaurant Nakuru" description="Contact Bava Restaurant for orders, reservations and catering. Call +254 799 963 000." canonical={`${site.domain}/contact`} />
      <Header />
      <main className="container py-10 grid gap-8 md:grid-cols-2">
        <section>
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="mt-2 text-muted-foreground">{site.address}</p>
          <p className="mt-1"><a className="underline" href={`tel:${site.phoneNakuru}`}>{site.phoneNakuru}</a></p>
          <p className="mt-1"><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          <div className="mt-4 aspect-[16/9] w-full rounded-lg border bg-muted" />
        </section>
        <section>
          <h2 className="text-xl font-semibold">Send us a message</h2>
          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <Input name="name" placeholder="Name" required />
            <Input name="email" placeholder="Email" type="email" required />
            <Textarea name="message" placeholder="Message" rows={6} required />
            <div className="flex gap-3">
              <Button type="submit" variant="hero">Send Message</Button>
              <Button asChild variant="secondary"><a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener">WhatsApp</a></Button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
