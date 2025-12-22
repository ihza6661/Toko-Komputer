import {
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { COMPANY_INFO } from "@/lib/constants";
import { trackWhatsAppClick, trackNavigation } from "@/lib/analytics";

const HeroSection = () => {
  const whatsappLink = generateWhatsAppLink("general");

  return (
    <section id="hero" className="relative min-h-screen hero-gradient overflow-hidden" aria-labelledby="hero-heading">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Hero content */}
        <div className="flex flex-col items-center justify-center text-center pt-24 sm:pt-32 pb-20 sm:pb-32 lg:pt-40 lg:pb-40">
          {/* Professional Badges - Marketplace Credentials */}
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Gold Merchant Tokopedia
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              Shopee Mall Partner
            </span>
          </div>

          {/* Main headline - Database Computer Branding */}
          <h1 id="hero-heading" className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Database Computer
            <span className="block text-3xl md:text-5xl lg:text-6xl text-gray-600 mt-2">
              Official Store Pontianak
            </span>
          </h1>

          {/* Sub-headline - Product Diversity Focus */}
          <p className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            Laptop, Printer, Smartphone & Tinta Original
            <span className="block mt-2 text-gray-900 font-semibold">
              Authorized Dealer Epson • Canon • Acer • Samsung
            </span>
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    type: "general",
                    location: "hero-section",
                    buttonText: "Chat Sekarang - Respon Cepat",
                  })
                }
              >
                <MessageCircle className="h-5 w-5" />
                Chat Sekarang - Respon Cepat
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a
                href="#products"
                onClick={() =>
                  trackNavigation({
                    from: "hero",
                    to: "products",
                    method: "click",
                  })
                }
              >
                Lihat Produk
              </a>
            </Button>
          </div>

          {/* Trust indicators - Conservative Corporate Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {[
              {
                value: "Est. 2015",
                label: "Established",
              },
              { value: "10,000+", label: "Units Sold" },
              { value: "4.8★", label: "Marketplace Rating" },
              { value: "100%", label: "Original Products" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
