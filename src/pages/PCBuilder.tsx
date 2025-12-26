import { useState } from "react";
import { MessageCircle, Cpu, Monitor, HardDrive, Zap, ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { formatPriceWithCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";
import { WHATSAPP_NUMBERS } from "@/lib/constants";
import { Helmet } from "react-helmet-async";

// PC Build Templates berdasarkan Budget & Use Case
const PC_TEMPLATES = {
  // Budget: 3-5 Juta
  "3-5_office": {
    budget: "3-5 Juta",
    useCase: "Office & Productivity",
    specs: {
      processor: "Intel Core i3-12100 / AMD Ryzen 3 4100",
      motherboard: "H610 / A520",
      ram: "8GB DDR4",
      storage: "256GB NVMe SSD",
      gpu: "Integrated Graphics",
      psu: "450W 80+ Bronze",
      casing: "Standard ATX Case",
    },
    estimatedPrice: 4500000,
    description: "PC entry-level untuk office work, browsing, dan productivity ringan",
    performance: "Microsoft Office, Browsing, Email, Zoom Meeting",
  },
  "3-5_gaming": {
    budget: "3-5 Juta",
    useCase: "Gaming Budget",
    specs: {
      processor: "Intel Core i3-12100F / AMD Ryzen 5 5500",
      motherboard: "H610 / A520",
      ram: "8GB DDR4",
      storage: "256GB NVMe SSD",
      gpu: "GTX 1650 / RX 6500 XT",
      psu: "500W 80+ Bronze",
      casing: "Mid Tower ATX",
    },
    estimatedPrice: 5000000,
    description: "PC gaming budget untuk esports titles di setting medium-high 1080p",
    performance: "Valorant, CS:GO, Dota 2, League of Legends (High Settings)",
  },
  
  // Budget: 5-8 Juta
  "5-8_office": {
    budget: "5-8 Juta",
    useCase: "Office & Multitasking",
    specs: {
      processor: "Intel Core i5-12400 / AMD Ryzen 5 5600",
      motherboard: "B660 / B550",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      gpu: "Integrated Graphics",
      psu: "550W 80+ Bronze",
      casing: "Premium ATX Case",
    },
    estimatedPrice: 6500000,
    description: "PC powerful untuk multitasking berat dan productivity professional",
    performance: "Multitab Browsing, Office Suite, Video Conferencing, Light Editing",
  },
  "5-8_gaming": {
    budget: "5-8 Juta",
    useCase: "Gaming Mainstream",
    specs: {
      processor: "Intel Core i5-12400F / AMD Ryzen 5 5600",
      motherboard: "B660 / B550",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      gpu: "RTX 3060 / RX 6600",
      psu: "600W 80+ Bronze",
      casing: "Mid Tower with RGB",
    },
    estimatedPrice: 7500000,
    description: "PC gaming solid untuk AAA titles di 1080p high-ultra settings",
    performance: "GTA V, Fortnite, Apex Legends, Valorant (Ultra Settings 1080p)",
  },
  "5-8_content": {
    budget: "5-8 Juta",
    useCase: "Content Creation",
    specs: {
      processor: "Intel Core i5-12400 / AMD Ryzen 5 5600",
      motherboard: "B660 / B550",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD + 1TB HDD",
      gpu: "GTX 1660 Super / RX 6600",
      psu: "600W 80+ Bronze",
      casing: "Airflow-optimized Case",
    },
    estimatedPrice: 7000000,
    description: "PC untuk video editing, graphic design, dan streaming",
    performance: "Adobe Premiere (1080p), Photoshop, Lightroom, OBS Streaming",
  },
  
  // Budget: 8-12 Juta
  "8-12_gaming": {
    budget: "8-12 Juta",
    useCase: "Gaming Enthusiast",
    specs: {
      processor: "Intel Core i5-13400F / AMD Ryzen 7 5700X",
      motherboard: "B660 / B550",
      ram: "16GB DDR4 3200MHz",
      storage: "1TB NVMe Gen4 SSD",
      gpu: "RTX 4060 / RX 6700 XT",
      psu: "650W 80+ Gold",
      casing: "Premium RGB Case with Good Airflow",
    },
    estimatedPrice: 10000000,
    description: "PC gaming powerful untuk 1440p gaming dan streaming",
    performance: "Cyberpunk 2077, Elden Ring, Modern Warfare (High-Ultra 1440p)",
  },
  "8-12_content": {
    budget: "8-12 Juta",
    useCase: "Professional Creator",
    specs: {
      processor: "Intel Core i7-12700 / AMD Ryzen 7 5800X",
      motherboard: "B660 / B550",
      ram: "32GB DDR4 3200MHz",
      storage: "1TB NVMe Gen4 SSD + 2TB HDD",
      gpu: "RTX 3060 / RX 6700 XT",
      psu: "750W 80+ Gold",
      casing: "Full Tower Workstation Case",
    },
    estimatedPrice: 11500000,
    description: "Workstation untuk 4K editing, 3D rendering, dan heavy multitasking",
    performance: "Adobe Premiere (4K), After Effects, DaVinci Resolve, Blender",
  },
  
  // Budget: >12 Juta
  "12+_gaming": {
    budget: ">12 Juta",
    useCase: "Gaming High-End",
    specs: {
      processor: "Intel Core i7-13700F / AMD Ryzen 7 7700X",
      motherboard: "Z690 / X670",
      ram: "32GB DDR5",
      storage: "2TB NVMe Gen4 SSD",
      gpu: "RTX 4070 Ti / RX 7800 XT",
      psu: "850W 80+ Gold",
      casing: "Premium RGB Full Tower",
    },
    estimatedPrice: 18000000,
    description: "PC flagship untuk 4K gaming dan competitive esports",
    performance: "Semua game di 4K Ultra Settings, 240Hz 1080p competitive",
  },
  "12+_content": {
    budget: ">12 Juta",
    useCase: "Professional Workstation",
    specs: {
      processor: "Intel Core i9-13900 / AMD Ryzen 9 7900X",
      motherboard: "Z690 / X670",
      ram: "64GB DDR5",
      storage: "2TB NVMe Gen4 SSD + 4TB HDD",
      gpu: "RTX 4070 / RX 7900 XT",
      psu: "1000W 80+ Platinum",
      casing: "Professional Workstation Tower",
    },
    estimatedPrice: 25000000,
    description: "Workstation ultimate untuk 8K editing, rendering, dan simulation",
    performance: "8K Video Editing, 3D Rendering (Blender/Cinema4D), AI/ML Training",
  },
};

type BudgetRange = "3-5" | "5-8" | "8-12" | "12+";
type UseCase = "office" | "gaming" | "content";

const PCBuilder = () => {
  const [selectedBudget, setSelectedBudget] = useState<BudgetRange | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const { toast } = useToast();

  // Get recommendation berdasarkan pilihan
  const getRecommendation = () => {
    if (!selectedBudget || !selectedUseCase) return null;
    
    const key = `${selectedBudget}_${selectedUseCase}`;
    return PC_TEMPLATES[key as keyof typeof PC_TEMPLATES] || null;
  };

  const recommendation = getRecommendation();

  // Handle budget selection with analytics
  const handleBudgetSelect = (budget: BudgetRange) => {
    setSelectedBudget(budget);
    trackEvent('button_click', 'select_budget', budget, undefined, {
      location: 'pc-builder',
      budgetRange: budget
    });
  };

  // Handle use case selection with analytics
  const handleUseCaseSelect = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    trackEvent('button_click', 'select_use_case', useCase, undefined, {
      location: 'pc-builder',
      budget: selectedBudget,
      useCase
    });
  };

  // Reset selections
  const handleReset = () => {
    setSelectedBudget(null);
    setSelectedUseCase(null);
    trackEvent('button_click', 'reset_pc_builder', 'reset', undefined, {
      location: 'pc-builder'
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate WhatsApp message with analytics and error handling
  const handleWhatsAppClick = () => {
    if (!recommendation) return;
    
    const message = `Halo Admin Database Computer! Saya tertarik rakit PC custom dengan spesifikasi berikut:

💰 Budget: ${recommendation.budget}
🎯 Kegunaan: ${recommendation.useCase}

📋 Spesifikasi yang saya mau:
• Processor: ${recommendation.specs.processor}
• Motherboard: ${recommendation.specs.motherboard}
• RAM: ${recommendation.specs.ram}
• Storage: ${recommendation.specs.storage}
• GPU: ${recommendation.specs.gpu}
• PSU: ${recommendation.specs.psu}
• Casing: ${recommendation.specs.casing}

🎮 Target Performa: ${recommendation.performance}

Estimasi Budget: ${formatPriceWithCurrency(recommendation.estimatedPrice)}

Apakah bisa dibantu untuk rakit PC ini? Mohon info ketersediaan part dan harga finalnya. Terima kasih!`;

    try {
      // Track WhatsApp click for conversion analytics
      trackWhatsAppClick({
        type: 'pc_builder',
        location: 'pc-builder-page',
        productName: `PC ${recommendation.budget} - ${recommendation.useCase}`,
        buttonText: 'Konsultasi & Rakit via WhatsApp'
      });

      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBERS.sales}?text=${encodedMessage}`;
      const opened = window.open(whatsappLink, '_blank');
      
      if (!opened) {
        toast({
          title: "Pop-up diblokir",
          description: "Silakan izinkan pop-up untuk membuka WhatsApp",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      toast({
        title: "Terjadi kesalahan",
        description: "Silakan coba lagi atau hubungi kami langsung",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <SEOHead 
        title="PC Builder - Rakit PC Custom Sesuai Budget | Database Computer Pontianak"
        description="Rakit PC custom sesuai kebutuhan dan budget anda. Gaming, Office, atau Content Creation. Estimasi harga real-time dan konsultasi gratis via WhatsApp. Gold Merchant Tokopedia."
        keywords="rakit pc pontianak, pc gaming pontianak, pc custom pontianak, pc builder indonesia, toko komputer pontianak, gaming pc murah, workstation pontianak"
        type="website"
      />
      
      {/* Schema.org Structured Data for PC Builder Tool */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "PC Builder Tool",
            "applicationCategory": "UtilityApplication",
            "description": "Rakit PC custom sesuai kebutuhan dan budget. Gaming, Office, atau Content Creation dengan estimasi harga real-time.",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "4500000",
              "highPrice": "25000000",
              "priceCurrency": "IDR"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Database Computer",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Hijas No.5-7",
                "addressLocality": "Pontianak",
                "addressRegion": "Kalimantan Barat",
                "postalCode": "78122",
                "addressCountry": "ID"
              }
            },
            "featureList": [
              "Budget-based PC configuration",
              "Use case optimization (Gaming, Office, Content Creation)",
              "Real-time price estimation",
              "WhatsApp consultation"
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4">
                <Cpu className="h-3 w-3 mr-1" />
                PC Builder Tool
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Rakit PC Custom Sesuai Budget Anda
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg">
                Pilih budget dan kegunaan, kami akan rekomendasikan spesifikasi PC terbaik untuk kebutuhan anda.
                Konsultasi gratis via WhatsApp!
              </p>
            </div>

            {/* Back Button */}
            <div className="mb-6">
              <Button variant="ghost" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Home
                </Link>
              </Button>
            </div>

            {/* Step 1: Budget Selection */}
            <Card className="p-6 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </span>
                Pilih Budget Anda
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { value: "3-5" as BudgetRange, label: "3 - 5 Juta", desc: "Entry Level" },
                  { value: "5-8" as BudgetRange, label: "5 - 8 Juta", desc: "Mainstream" },
                  { value: "8-12" as BudgetRange, label: "8 - 12 Juta", desc: "Enthusiast" },
                  { value: "12+" as BudgetRange, label: "> 12 Juta", desc: "High-End" },
                ].map((budget) => (
                  <button
                    key={budget.value}
                    onClick={() => handleBudgetSelect(budget.value)}
                    aria-pressed={selectedBudget === budget.value}
                    aria-label={`Pilih budget range ${budget.label} untuk ${budget.desc} PC builds`}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedBudget === budget.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-bold text-lg">{budget.label}</div>
                    <div className="text-sm text-muted-foreground">{budget.desc}</div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Step 2: Use Case Selection */}
            {selectedBudget && (
              <Card className="p-6 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </span>
                  Pilih Kegunaan PC
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "office" as UseCase, label: "Office & Productivity", icon: Monitor, desc: "Kerja, browsing, office apps" },
                    { value: "gaming" as UseCase, label: "Gaming", icon: Zap, desc: "Main game AAA titles" },
                    { value: "content" as UseCase, label: "Content Creation", icon: HardDrive, desc: "Editing video, design grafis" },
                  ].map((useCase) => {
                    const Icon = useCase.icon;
                    return (
                      <button
                        key={useCase.value}
                        onClick={() => handleUseCaseSelect(useCase.value)}
                        aria-pressed={selectedUseCase === useCase.value}
                        aria-label={`Pilih use case ${useCase.label}: ${useCase.desc}`}
                        className={`p-6 rounded-lg border-2 transition-all ${
                          selectedUseCase === useCase.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Icon className={`h-8 w-8 mb-3 ${selectedUseCase === useCase.value ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div className="font-bold text-lg mb-1">{useCase.label}</div>
                        <div className="text-sm text-muted-foreground">{useCase.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </Card>
            )}

            {/* Step 3: Recommendation Result */}
            {recommendation && (
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-background border-primary/20">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </span>
                  Rekomendasi PC Anda
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Left: Specs */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Spesifikasi Lengkap</h3>
                    <div className="space-y-3">
                      {Object.entries(recommendation.specs).map(([key, value]) => (
                        <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-card">
                          <Cpu className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                            <div className="font-medium">{value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div>
                    <h3 className="font-bold text-lg mb-4">Detail & Performa</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-lg bg-card">
                        <div className="text-sm text-muted-foreground mb-1">Budget Range</div>
                        <div className="text-xl font-bold">Rp {recommendation.budget}</div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-card">
                        <div className="text-sm text-muted-foreground mb-1">Estimasi Harga</div>
                        <div className="text-2xl font-bold text-primary">
                          {formatPriceWithCurrency(recommendation.estimatedPrice)}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          *Harga dapat berubah sesuai ketersediaan part
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                        <div className="text-sm font-semibold text-success mb-2">Target Performa:</div>
                        <div className="text-sm">{recommendation.performance}</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50 mb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {recommendation.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        size="lg" 
                        className="w-full"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Konsultasi & Rakit via WhatsApp
                      </Button>
                      
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full"
                        onClick={handleReset}
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Coba Konfigurasi Lain
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PCBuilder;
