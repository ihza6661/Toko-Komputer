import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import tokoLogo from "@/assets/toko-logo.png";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { COMPANY_INFO } from "@/lib/constants";
import { useSmartNavigation } from "@/lib/navigation";

const Footer = () => {
  // Smart navigation hook for hash links
  const { handleNavigation } = useSmartNavigation();
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={tokoLogo}
                alt="Database Computer Logo"
                width="40"
                height="40"
                loading="lazy"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="font-display text-lg font-bold text-foreground">
                Database <span className="text-foreground">Computer</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Pusat Laptop, Printer, Smartphone & Tinta Original di Pontianak. Dipercaya
              sejak {COMPANY_INFO.foundedYear} dengan penjualan produk berkualitas. Gold Merchant Tokopedia & Shopee Mall Partner.
            </p>
          </div>

          {/* Contact Information (NAP) */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Alamat</div>
                    <div>{COMPANY_INFO.fullAddress}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Jam Operasional</div>
                  <div>{COMPANY_INFO.operatingHours.display.weekdays}</div>
                  <div>{COMPANY_INFO.operatingHours.display.weekend}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Layanan
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavigation(e, '#products')}
                  className="hover:text-primary transition-colors"
                >
                  Laptop Ready Stock
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavigation(e, '#services')}
                  className="hover:text-primary transition-colors"
                >
                  Jual Beli & Tukar Tambah
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavigation(e, '#services')}
                  className="hover:text-primary transition-colors"
                >
                  Servis Laptop
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleNavigation(e, '#location')}
                  className="hover:text-primary transition-colors"
                >
                  Lokasi & Pengiriman
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Media Sosial
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href={generateWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                title="Chat di WhatsApp"
                aria-label="Chat di WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                title="Kunjungi Instagram"
                aria-label="Kunjungi Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Follow kami untuk update stok terbaru & promo spesial!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
              reserved. <br /> Made by @ihza_baker
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
              <Link
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                to="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                to="/refund-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Pengembalian & Penukaran
              </Link>
              <Link
                to="/faq-legal"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
