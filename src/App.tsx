import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./Components/ui/tooltip";
import LoadingPage from './Components/LoadingPage';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import { Studio } from './Pages/Studio';
import ScrollToTop from './Components/Scroll/ScrollToTop';
import { ToasterComponent as Toaster } from './Components/ui/toaster';
import { Toaster as Sonner } from 'sonner';
import Contact from './Pages/Contact';

const queryClient = new QueryClient();

const App = () => {
  const [showMainApp, setShowMainApp] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Start main app transition slightly before loading page fully fades
    const mainAppTimer = setTimeout(() => {
      setShowMainApp(true);
    }, 800); // Start main app fade-in

    // Mark loading as complete
    const loadingTimer = setTimeout(() => {
      setLoadingComplete(true);
    }, 1800); // Total loading duration

    return () => {
      clearTimeout(mainAppTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen">
        <AnimatePresence mode="wait">
          {!loadingComplete && (
            <LoadingPage key="loading" onComplete={() => setLoadingComplete(true)} />
          )}
        </AnimatePresence>
        
        {showMainApp && (
          <div className="min-h-screen bg-white">
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path='/' element={<Home isVisible={showMainApp} />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/Studio' element={<Studio />} />
                  <Route path='/contactus' element={<Contact />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;