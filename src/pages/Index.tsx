import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import InventorySection from "@/components/InventorySection";
import ServicesSection from "@/components/ServicesSection";
import ServicePricingSection from "@/components/ServicePricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PaymentMethodsSection from "@/components/PaymentMethodsSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactSelector from "@/components/ContactSelector";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import AnalyticsFloatButton from "@/components/AnalyticsFloatButton";
import { useScrollTracking } from "@/hooks/useAnalytics";
import { useState, useEffect } from "react";
import { initGA4 } from "@/lib/gtag";
import { initFBPixel } from "@/lib/fbpixel";

const Index = () => {
  // Track scroll depth for conversion optimization
  useScrollTracking('landing-page');
  
  // Analytics dashboard state
  const [showAnalytics, setShowAnalytics] = useState(false);

  // Initialize SEO tracking (GA4 & Facebook Pixel)
  useEffect(() => {
    // Initialize Google Analytics 4 (async)
    initGA4().then(success => {
      if (success && import.meta.env.DEV) {
        console.log('✅ GA4 script loaded and initialized');
      }
    }).catch(error => {
      if (import.meta.env.DEV) {
        console.error('❌ GA4 initialization error:', error);
      }
    });
    
    // Initialize Facebook Pixel (async)
    initFBPixel().then(success => {
      if (success && import.meta.env.DEV) {
        console.log('✅ FB Pixel script loaded and initialized');
      }
    }).catch(error => {
      if (import.meta.env.DEV) {
        console.error('❌ FB Pixel initialization error:', error);
      }
    });
    
    // Log initialization status
    if (import.meta.env.DEV) {
      console.log('🚀 SEO tracking initialization started');
    }
  }, []);

  // Check URL parameter on mount (?analytics=true)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('analytics') === 'true') {
      setShowAnalytics(true);
    }
  }, []);

  // Expose toggle function to window for console access
  useEffect(() => {
    if (typeof window !== 'undefined' && import.meta.env.DEV) {
      window.tokoAnalytics = {
        ...window.tokoAnalytics,
        openDashboard: () => setShowAnalytics(true),
        closeDashboard: () => setShowAnalytics(false),
        toggleDashboard: () => setShowAnalytics(prev => !prev),
      };
    }
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <CategorySection />
        <InventorySection />
        <ServicesSection />
        <ServicePricingSection />
        <TestimonialsSection />
        <PaymentMethodsSection />
        <FAQSection />
        <ContactFormSection />
        <ContactSelector />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      
      {/* Analytics Dashboard */}
      {showAnalytics && <AnalyticsDashboard onClose={() => setShowAnalytics(false)} />}
      
      {/* Floating Analytics Button (Dev Mode Only) */}
      {import.meta.env.DEV && !showAnalytics && (
        <AnalyticsFloatButton onClick={() => setShowAnalytics(true)} />
      )}
    </>
  );
};

export default Index;
