import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import rtechLogo from "@/assets/rtech-logo.jpg";
import { COMPANY_INFO, WHATSAPP_NUMBERS } from "@/lib/constants";
import { trackNavigation } from "@/lib/analytics";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Beranda" },
    { href: "#products", label: "Laptop & Macbook" },
    { href: "#services", label: "Servis" },
    { href: "#testimonials", label: "Testimoni" },
    { href: "#contact", label: "Kontak" },
    { href: "#location", label: "Lokasi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-background/95 backdrop-blur-md border-b border-border/50 md:bg-transparent md:border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={rtechLogo}
              alt="R-Tech Computer Logo"
              width="48"
              height="48"
              className="h-9 w-9 md:h-12 md:w-12 rounded-lg object-cover"
            />
            <div>
              <span className="font-display text-base md:text-xl font-bold text-foreground">
                R-Tech <br />
                <span className="text-primary">Computer</span>
              </span>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex items-center">
            {/* Desktop NAP Info */}
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <a
                href={`tel:+${WHATSAPP_NUMBERS.owner}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telepon R-Tech Computer"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">0821-5700-0466</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Sen-Sab: 09:00-21:00</span>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block mx-4 h-6 w-px bg-border" />
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    trackNavigation({
                      from: "header-nav",
                      to: link.label,
                      method: "click",
                    })
                  }
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile - Phone + Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:+${WHATSAPP_NUMBERS.owner}`}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telepon R-Tech Computer"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackNavigation({
                      from: "mobile-nav",
                      to: link.label,
                      method: "click",
                    });
                  }}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
