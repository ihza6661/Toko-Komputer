import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import InventorySection from "@/components/InventorySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PaymentMethodsSection from "@/components/PaymentMethodsSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactSelector from "@/components/ContactSelector";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CategorySection />
      <InventorySection />
      <ServicesSection />
      <TestimonialsSection />
      <PaymentMethodsSection />
      <FAQSection />
      <ContactFormSection />
      <ContactSelector />
      <LocationSection />
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </main>
  );
};

export default Index;
