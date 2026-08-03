import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
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

const AuthenticatedApp = () => {
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};


function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <LanguageProvider>
          <ScrollToTop />
          <AuthenticatedApp />
        </LanguageProvider>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
