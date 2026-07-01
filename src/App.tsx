import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoWatermark from "@/components/LogoWatermark";
import Index from "./pages/Index";
import FinalExpense from "./pages/FinalExpense";
import FinalExpenseMichigan from "./pages/FinalExpenseMichigan";
import BestFinalExpenseInsurance from "./pages/BestFinalExpenseInsurance";
import Medicare from "./pages/Medicare";
import MedicareAdvantageMichigan from "./pages/MedicareAdvantageMichigan";
import LifeInsuranceMichigan from "./pages/LifeInsuranceMichigan";
import BurialInsuranceMichigan from "./pages/BurialInsuranceMichigan";
import Supplemental from "./pages/Supplemental";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import BookRedirect from "./pages/Book";
import BookOfBusinessLogin from "./pages/BookOfBusinessLogin";
import BookOfBusiness from "./pages/BookOfBusiness";
import BookOfBusinessResetPassword from "./pages/BookOfBusinessResetPassword";
import BookOfBusinessSettings from "./pages/BookOfBusinessSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LogoWatermark />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/review" element={<Navigate to="/contact#request" replace />} />
          <Route path="/book" element={<BookRedirect />} />
          <Route path="/book-of-business/login" element={<BookOfBusinessLogin />} />
          <Route path="/book-of-business/reset-password" element={<BookOfBusinessResetPassword />} />
          <Route path="/book-of-business/settings" element={<BookOfBusinessSettings />} />
          <Route path="/book-of-business" element={<BookOfBusiness />} />
          <Route path="/final-expense" element={<FinalExpense />} />
          <Route path="/best-final-expense-insurance" element={<BestFinalExpenseInsurance />} />
          <Route path="/final-expense-michigan" element={<FinalExpenseMichigan />} />
          <Route path="/medicare" element={<Medicare />} />
          <Route path="/medicare-advantage-michigan" element={<MedicareAdvantageMichigan />} />
          <Route path="/life" element={<Navigate to="/final-expense" replace />} />
          <Route path="/life-insurance-michigan" element={<LifeInsuranceMichigan />} />
          <Route path="/burial-insurance-michigan" element={<BurialInsuranceMichigan />} />
          <Route path="/supplemental" element={<Supplemental />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
