import { site } from "@/config/site";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">{site.name}</h3>
          <p className="text-sm text-muted-foreground mt-2">{site.address}</p>
          <p className="text-sm text-muted-foreground mt-1">Phone: <a className="underline" href={`tel:${site.phoneNakuru}`}>{site.phoneNakuru}</a></p>
        </div>
        <nav className="grid gap-2">
          <Link className="text-sm hover:text-primary" to="/menu">Menu</Link>
          <Link className="text-sm hover:text-primary" to="/reserve">Reserve</Link>
          <Link className="text-sm hover:text-primary" to="/catering">Catering</Link>
          <Link className="text-sm hover:text-primary" to="/about">About</Link>
          <Link className="text-sm hover:text-primary" to="/contact">Contact</Link>
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="mt-2">Halal multicuisine & fast food in Nakuru.</p>
        </div>
      </div>
    </footer>
  );
};
