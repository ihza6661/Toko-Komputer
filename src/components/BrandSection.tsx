import { BadgeCheck, Laptop } from "lucide-react";
import { BRANDS } from "@/lib/constants";
import { trackEvent, trackNavigation } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

const BrandSection = () => {
  const { toast } = useToast();

  const handleBrandClick = (brandName: string) => {
    // Track analytics event
    trackEvent("brand_click", "click_brand_button", brandName, 1, {
      brand_name: brandName,
      section: "brand-partners",
    });

    // Track navigation
    trackNavigation({
      from: "brands",
      to: "products",
      method: "click",
    });

    // Show toast notification
    toast({
      title: `Menampilkan koleksi ${brandName}`,
      description: "Scroll ke bawah untuk lihat produk kami",
      duration: 3000,
    });

    // Smooth scroll to products section
    setTimeout(() => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section
      id="brands"
      className="py-10 md:py-14 bg-background relative overflow-hidden"
      aria-labelledby="brands-heading"
    >
      {/* Background subtle gradient effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px] opacity-50" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
              Official Brand Partners
            </span>
          </div>
          <h2
            id="brands-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground"
          >
            Shop By Brands
          </h2>
          {/* <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto"> */}
          {/*   Pilih dari brand terpercaya dengan garansi resmi dan kualitas */}
          {/*   terjamin */}
          {/* </p> */}
        </div>

        {/* Brands Grid - Responsive: 2 cols (mobile) → 4 cols (tablet) → 7 cols (desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {BRANDS.map((brand, index) => (
            <button
              key={index}
              onClick={() => handleBrandClick(brand.name)}
              aria-label={`Lihat produk ${brand.name}`}
              className="group relative glass-card rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              {/* Brand Logo/Icon Container */}
              <div className="aspect-square w-full flex items-center justify-center mb-3 relative">
                {/* Fallback Icon (Lucide) - Will be replaced by actual logo later */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  <Laptop className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Brand Name - Text-based (Bold Typography) */}
              <div className="text-center">
                <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </h3>

                {/* Brand Tagline/Description (Optional - Hidden on mobile for space) */}
                <p className="hidden md:block text-[10px] sm:text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.description}
                </p>
              </div>

              {/* Active Indicator Badge (appears on hover) */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Semua produk dijamin 100% original dengan garansi resmi distributor
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
