import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
import Catering from "./pages/Catering";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ChatWidget from "@/components/common/ChatWidget";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import NavigationBar from "./components/NavigationBar";
import MenuSection from "./components/MenuSection";
import './theme/lavish.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Global chat widget (Crisp/Tawk) */}
        {/* It will only load if IDs are set in site config */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore - dynamic load */}
        <ChatWidget />
        <FloatingWhatsApp />
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <MenuSection />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
