import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutOverview = () => {
  return (
    <section className="py-12">
      <div className="container grid gap-6 md:grid-cols-5">
        <article className="md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-bold">About Bava Restaurant</h2>
          <p className="mt-3 text-base leading-relaxed text-foreground">
            Bava began with a simple mission — serve tasty, halal, affordable meals that bring people together. We now
            serve Nakuru and Thika with fresh ingredients and friendly service. From juicy burgers and biryani to family
            platters and refreshing drinks, there’s something for everyone.
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground">
            We’re constantly improving our menu and service. Your feedback helps us grow — thank you for supporting local!
          </p>
          <div className="mt-5">
            <Button asChild>
              <Link to="/about" aria-label="Read our full story on the About page">Read our full story</Link>
            </Button>
          </div>
        </article>
        <aside className="md:col-span-2 rounded-lg border p-5">
          <h3 className="font-semibold">Why guests love Bava</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li>100% halal kitchen</li>
            <li>Fresh, flavorful ingredients</li>
            <li>Family-friendly and budget-friendly</li>
            <li>Quick takeaway and reliable delivery</li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default AboutOverview;
