import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PersonnelService from "./pages/PersonnelService";
import Products from "./pages/Products";
import MedicalEquipment from "./pages/MedicalEquipment";
import ConstructionMaterials from "./pages/ConstructionMaterials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import QuickContactButtons from "@/components/QuickContactButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <QuickContactButtons variant="fixed" />
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/kaderpostenservice" element={<PersonnelService />} />
              <Route path="/produkte-haushaltswaren" element={<Products />} />
              <Route path="/medizinische-ausruestung" element={<MedicalEquipment />} />
              <Route path="/baumaterialien" element={<ConstructionMaterials />} />
              <Route path="/kontakt" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
