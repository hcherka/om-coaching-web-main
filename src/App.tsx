import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- changé ici

// Pages principales
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Pages modules services
import CoachingScolaire from "./pages/Services/CoachingScolaire";
import CoachingJeunes from "./pages/Services/CoachingJeunes";
import CoachingNeurofeedback from "./pages/Services/CoachingNeurofeedback";
import CoachingEquipe from "./pages/Services/CoachingEquipe";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter> {/* <-- ici */}
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
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
