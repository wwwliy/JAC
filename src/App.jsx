import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from '@/i18n/LanguageContext';
import Layout from '@/components/Layout';
// Add page imports here
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Dealers from '@/pages/Dealers';
import About from '@/pages/About';
import ServiceSupport from '@/pages/ServiceSupport';
import Contact from '@/pages/Contact';

// GitHub Pages serves this app below /JAC/, while the production server
// serves it below /www1/. Keep the router in sync with either mount point.
const getRouterBasename = () => {
  const pathname = window.location.pathname;
  if (pathname === '/JAC' || pathname.startsWith('/JAC/')) return '/JAC';
  if (pathname === '/www1' || pathname.startsWith('/www1/')) return '/www1';
  return undefined;
};

const PublicApp = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServiceSupport />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Page Not Found</h1></div>} />
      </Routes>
    </>
  );
};


function App() {

  return (
      <QueryClientProvider client={queryClientInstance}>
        <Router basename={getRouterBasename()}>
          <LanguageProvider>
            <ScrollToTop />
            <PublicApp />
          </LanguageProvider>
        </Router>
        <Toaster />
      </QueryClientProvider>
  )
}

export default App
