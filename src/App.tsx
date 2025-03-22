import Home from './Pages/Home';
import Projects from './Pages/Projects';
import { Studio } from './Pages/Studio';
import { Routes, Route } from 'react-router-dom';
import { TooltipProvider } from "../src/Components/ui/tooltip";
import ScrollToTop from './Components/Scroll/ScrollToTop';
import { ToasterComponent as Toaster } from './Components/ui/toaster';
import { Toaster as Sonner } from 'sonner';
import { HashRouter } from 'react-router-dom';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/Studio' element={<Studio />} />
            <Route path='/contactus' element={<Contact />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </div>
  );
}

export default App;
