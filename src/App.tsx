import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import Home from './pages/Home';
import Works from './pages/Works';
import WorkDetails from './pages/WorkDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import InsightDetails from './pages/InsightDetails';
import Team from './pages/Team';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Works />} />
          <Route path="/work/:slug" element={<WorkDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router basename="/landing-page">
      <ScrollToTop />
      <CustomCursor />
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
}
