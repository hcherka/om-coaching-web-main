import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages principales
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Pages modules services
import CoachingScolaire from "./pages/Services/CoachingScolaire";
import CoachingJeunes from "./pages/Services/CoachingJeunes";
import CoachingNeurofeedback from "./pages/Services/CoachingNeurofeedback";
import CoachingEquipe from "./pages/Services/CoachingEquipe";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Pages principales */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Pages modules services */}
            <Route path="/coaching-scolaire" element={<CoachingScolaire />} />
            <Route path="/coaching-jeunes" element={<CoachingJeunes />} />
            <Route path="/coaching-neurofeedback" element={<CoachingNeurofeedback />} />
            <Route path="/coaching-equipe" element={<CoachingEquipe />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
