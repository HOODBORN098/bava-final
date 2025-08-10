import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg px-4 py-3 ring-1 ring-primary/20 hover:bg-primary/90 transition-colors"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
