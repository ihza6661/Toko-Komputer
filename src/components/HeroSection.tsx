import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick, trackNavigation } from "@/lib/analytics";
import { useState, useEffect } from "react";
import { getShiftInfo, isStoreOpen } from "@/lib/timeBasedRouting";
import { getActiveHeroVariant } from "@/lib/heroVariants";

const HeroSection = () => {
  // Get A/B test variant content
  const heroContent = getActiveHeroVariant();
  
  // Dynamic WhatsApp link that adapts to current shift (morning/afternoon admin)
  const [whatsappLink, setWhatsappLink] = useState(() => 
    generateWhatsAppLink("general")
  );
  
  // Shift information for display
  const [shiftInfo, setShiftInfo] = useState(() => getShiftInfo());
  const [storeOpen, setStoreOpen] = useState(() => isStoreOpen());

  useEffect(() => {
    // Update WhatsApp link and shift info based on current time/shift
    const updateData = () => {
      setWhatsappLink(generateWhatsAppLink("general"));
      setShiftInfo(getShiftInfo());
      setStoreOpen(isStoreOpen());
    };

    // Initial update
    updateData();

    // Update every 5 minutes to handle shift changes
    // (e.g., if user keeps page open from 13:55 to 14:05)
    const interval = setInterval(updateData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-[70svh] lg:min-h-[80svh] flex-col items-center justify-center text-center pt-24 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36">

          {/* Badges */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { text: "100% Garansi Resmi", color: "text-info" },
              { text: "Gold Merchant Tokopedia", color: "text-success" },
              { text: "Shopee Mall Partner", color: "text-warning" },
            ].map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground shadow-sm"
              >
                <CheckCircle className={`h-4 w-4 ${badge.color}`} />
                {badge.text}
              </span>
            ))}
          </div>

          {/* Brand Line */}
          <div className="mb-3 text-sm sm:text-base font-medium text-muted-foreground">
            Database Computer — Official Website
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="max-w-4xl font-display font-bold tracking-tight text-foreground
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {heroContent.mainHeadline}
            <span className="block mt-2">
              {heroContent.subHeadline}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground">
            <span className="block text-xl sm:text-2xl font-bold text-foreground mb-2">
              {heroContent.description.primary}
            </span>
            <span className="block">
              {heroContent.description.secondary}
            </span>
          </p>

          {/* Shift Status Badge */}
          <div className="mt-6 flex justify-center">
            <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-all
              ${storeOpen 
                ? 'bg-success/10 border-success/20 text-success' 
                : 'bg-muted border-border text-muted-foreground'
              }`}
            >
              <div className={`h-2.5 w-2.5 rounded-full ${storeOpen ? 'bg-success animate-pulse' : 'bg-muted-foreground'}`} />
              <span className="font-semibold">
                {storeOpen ? `${shiftInfo.adminName} Online` : 'Toko Tutup'}
              </span>
              <span className="text-xs opacity-75">
                {storeOpen ? `(${shiftInfo.timeRange})` : ''}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:flex-row sm:max-w-none sm:justify-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto group" asChild>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    type: "general",
                    location: "hero-section",
                    buttonText: "Chat Sekarang",
                  })
                }
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="flex flex-col items-start sm:block">
                  <span className="font-bold">Chat Sekarang</span>
                  <span className="text-xs opacity-75 sm:ml-2 sm:inline">
                    (Respon Cepat)
                  </span>
                </span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
              asChild
            >
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

          {/* Micro-Guarantee */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" />
              Fast Response
            </span>
            <span className="text-border">•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" />
              Admin Online
            </span>
            <span className="text-border">•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" />
              Garansi Jelas
            </span>
          </div>

          {/* Stats */}
          <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 sm:mt-16 md:grid-cols-4">
            {[
              { value: "2015", label: "Berdiri Sejak" },
              { value: "10.000+", label: "Unit Terjual" },
              { value: "4.5★", label: "Rating Google" },
              { value: "100%", label: "Produk Original" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <div className="text-xl sm:text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
