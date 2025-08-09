import { useEffect } from "react";
import { site } from "@/config/site";

// Lightweight chat widget loader supporting either Crisp or Tawk.to based on IDs in site config
export const ChatWidget = () => {
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

  return null;
};

export default ChatWidget;
