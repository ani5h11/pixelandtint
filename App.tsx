import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

const FAQ = lazy(() => import('./components/FAQ'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

// A simple loading spinner fallback
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-navy border-t-brightBlue"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative font-sans text-navy bg-white">
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </Suspense>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
