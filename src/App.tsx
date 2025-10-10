import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import PersonnelService from "./pages/PersonnelService";
import Products from "./pages/Products";
import MedicalEquipment from "./pages/MedicalEquipment";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import CRMDashboard from "./pages/crm/CRMDashboard";
import LeadDetail from "./pages/crm/LeadDetail";
import Statistics from "./pages/crm/Statistics";
import NewLead from "./pages/crm/NewLead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import QuickContactButtons from "@/components/QuickContactButtons";
import ProtectedRoute from "@/components/ProtectedRoute";
import CRMLayout from "@/components/crm/CRMLayout";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isCRMRoute = location.pathname.startsWith('/crm');

  return (
    <>
      {!isCRMRoute && <QuickContactButtons variant="fixed" />}
      <div className="min-h-screen bg-background flex flex-col">
        {!isCRMRoute && <Header />}
        <main className={!isCRMRoute ? "pt-20 flex-1" : "flex-1"}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kaderpostenservice" element={<PersonnelService />} />
            <Route path="/produkte-haushaltswaren" element={<Products />} />
            <Route path="/medizinische-ausruestung" element={<MedicalEquipment />} />
            
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/crm" element={<ProtectedRoute requireAdmin><CRMLayout /></ProtectedRoute>}>
              <Route index element={<CRMDashboard />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="lead/:id" element={<LeadDetail />} />
              <Route path="new" element={<NewLead />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {!isCRMRoute && <Footer />}
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
