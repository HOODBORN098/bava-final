import { Link, NavLink } from "react-router-dom";
import { Phone, Menu as MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "/menu", label: "Menu" },
    { href: "/reserve", label: "Reserve" },
    { href: "/catering", label: "Catering" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-xl" aria-label={site.name}>Bava</span>
          <span className="sr-only">{site.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink key={n.href} to={n.href} className={({isActive}) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-foreground/80'}`}>
              {n.label}
            </NavLink>
          ))}
          <Button asChild variant="accent" size="sm">
            <a href={`tel:${site.phoneNakuru}`} className="inline-flex items-center gap-2"><Phone className="size-4"/> Call</a>
          </Button>
        </div>

        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border" onClick={() => setOpen(v => !v)} aria-label="Open menu">
          <MenuIcon className="size-5"/>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <NavLink key={n.href} to={n.href} className={({isActive}) => `py-2 ${isActive ? 'text-primary' : 'text-foreground/80'}`} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
            <Button asChild variant="accent" size="sm" className="w-full">
              <a href={`tel:${site.phoneNakuru}`} className="inline-flex items-center justify-center gap-2"><Phone className="size-4"/> Call to Order</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
