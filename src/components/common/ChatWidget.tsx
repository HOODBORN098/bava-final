import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { MessageCircle, X } from "lucide-react";

// Lightweight chat widget loader supporting either Crisp or Tawk.to based on IDs in site config
export const ChatWidget = () => {
  const { crispWebsiteId, tawkPropertyId, tawkWidgetId } = (site as any);
  const hasExternal = Boolean(crispWebsiteId || (tawkPropertyId && tawkWidgetId));
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Avoid double-inject
    if (document.getElementById("chat-widget-loader")) return;

    const { crispWebsiteId, tawkPropertyId, tawkWidgetId } = (site as any);

    if (crispWebsiteId) {
      const s = document.createElement("script");
      s.id = "chat-widget-loader";
      s.innerHTML = `
        window.$crisp=[];window.CRISP_WEBSITE_ID='${crispWebsiteId}';
        (function(){
          var d=document;var s=d.createElement('script');
          s.src='https://client.crisp.chat/l.js'; s.async=1;
          d.getElementsByTagName('head')[0].appendChild(s);
        })();
      `;
      document.body.appendChild(s);
      return;
    }

    if (tawkPropertyId && tawkWidgetId) {
      const s = document.createElement("script");
      s.id = "chat-widget-loader";
      s.async = true;
      s.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
      s.charset = "UTF-8";
      s.setAttribute("crossorigin", "*");
      document.body.appendChild(s);
      return;
    }
  }, []);

  if (hasExternal) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="fixed bottom-5 right-20 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg px-4 py-3 ring-1 ring-primary/20 hover:bg-primary/90 transition-colors"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">Chat</span>
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-80 rounded-lg border bg-card text-card-foreground shadow-lg">
          <div className="flex items-center justify-between p-3 border-b">
            <p className="text-sm font-semibold">Chat with Bava</p>
            <button aria-label="Close chat" onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-accent/20">
              <X className="size-4" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-sm text-muted-foreground">Hi! How can we help you today?</p>
            <div className="flex flex-wrap gap-2">
              <a href="/menu" className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent/20">View Menu</a>
              <a href="/reserve" className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent/20">Reserve Table</a>
              <a href={`https://wa.me/${(site as any).whatsappNumber}`} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent/20">WhatsApp</a>
            </div>
            <p className="text-xs text-muted-foreground">Typical reply time: under 5 min</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
