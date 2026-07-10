import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FoundersPage from './pages/FoundersPage';
import CertificationsPage from './pages/CertificationsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import PurityLabs from './pages/PurityLabs';
import MilestonesPage from './pages/MilestonesPage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import DeliveryTerms from './pages/DeliveryTerms';
import Careers from './pages/Careers';
import ProductsInfo from './pages/ProductsInfo';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import SubscriptionModal from './components/SubscriptionModal';
import Profile from './components/Profile';
import ProductDetailsModal from './components/ProductDetailsModal';
import BackToTop from './components/BackToTop';
import LocationSelector from './components/LocationSelector';
import { Product } from './types';
import { PRODUCTS } from './constants';

export default function App() {
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('Maharashtra');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Navbar 
          onSubscriptionClick={() => setIsSubModalOpen(true)}
          onProfileClick={() => setIsProfileOpen(true)}
          selectedLocation={selectedLocation}
          onLocationClick={() => setIsLocationOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={
            <Home 
              onSubscribeClick={() => setIsSubModalOpen(true)} 
            />
          } />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/sustainability" element={<SustainabilityPage onContactClick={() => setIsProfileOpen(true)} />} />
          <Route path="/purity-labs" element={<PurityLabs />} />
          <Route path="/milestones" element={<MilestonesPage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/delivery-terms" element={<DeliveryTerms />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/products" element={
            <ProductsInfo 
              onProductClick={(p) => {
                setSelectedProduct(p);
                setIsDetailsOpen(true);
              }} 
            />
          } />
        </Routes>

        <Footer />

        <SubscriptionModal 
          isOpen={isSubModalOpen}
          onClose={() => setIsSubModalOpen(false)}
          product={PRODUCTS[0]} 
        />

        <ProductDetailsModal 
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          product={selectedProduct}
        />

        <Profile 
          isOpen={isProfileOpen} 
          onClose={() => setIsProfileOpen(false)} 
        />

        <LocationSelector
          isOpen={isLocationOpen}
          onClose={() => setIsLocationOpen(false)}
          selectedLocation={selectedLocation}
          onSelect={setSelectedLocation}
        />

        <BackToTop />
      </div>
    </Router>
  );
}
