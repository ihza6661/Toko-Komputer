import { MapPin, Phone, Clock } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_NUMBERS } from "@/lib/constants";
import { formatWhatsAppNumber } from "@/lib/whatsapp";
import { getShiftInfo } from "@/lib/timeBasedRouting";
import { useState, useEffect } from "react";
import OperatingHoursWidget from "./OperatingHoursWidget";

const LocationSection = () => {
  const formattedPhoneSales = formatWhatsAppNumber(WHATSAPP_NUMBERS.sales);
  const formattedPhoneService = formatWhatsAppNumber(WHATSAPP_NUMBERS.service);
  const formattedPhoneGeneral = formatWhatsAppNumber(WHATSAPP_NUMBERS.general);
  
  // Track active shift for display
  const [shiftInfo, setShiftInfo] = useState(() => getShiftInfo());

  useEffect(() => {
    const interval = setInterval(() => {
      setShiftInfo(getShiftInfo());
    }, 5 * 60 * 1000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

   return (
     <section id="location" className="py-14 md:py-20 bg-background relative" aria-labelledby="location-heading">
       <div className="container mx-auto px-4">
         {/* Section header */}
         <div className="text-center mb-10 md:mb-12">
           <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
             Lokasi Toko
           </span>
           <h2 id="location-heading" className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
             Kunjungi Toko Kami
           </h2>
           <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
             Kami siap melayani Anda di toko kami atau melalui WhatsApp
           </p>
         </div>

          {/* Map and contact info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="glass-card rounded-2xl overflow-hidden h-[400px] lg:col-span-2">
              <iframe
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Database Computer Location"
              />
            </div>

            {/* Operating Hours Widget */}
            <div className="lg:col-span-1">
              <OperatingHoursWidget />
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Address Card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-2">Alamat Lengkap</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {COMPANY_INFO.fullAddress}
                  </p>
                  {COMPANY_INFO.plusCode && (
                    <p className="text-xs text-muted-foreground mt-2 font-mono">
                      Plus Code: {COMPANY_INFO.plusCode}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* WhatsApp Admin Card with Active Status */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-base mb-3">Kontak Admin</h4>
                  <div className="space-y-2.5">
                    {/* Admin Pagi */}
                    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary">
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-700">Admin Pagi (Shift 08:00-14:00)</p>
                      </div>
                      {shiftInfo.type === "morning" && shiftInfo.isOperating && (
                        <span className="ml-2 flex items-center gap-1 text-xs font-semibold text-success">
                          <div className="h-2 w-2 rounded-full bg-success/100 animate-pulse" />
                          Aktif
                        </span>
                      )}
                    </div>

                    {/* Admin Siang */}
                    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary">
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-700">Admin Siang (Shift 14:00-20:00)</p>
                        <p className="text-sm font-mono text-foreground mt-0.5">{formattedPhoneGeneral}</p>
                      </div>
                      {shiftInfo.type === "afternoon" && shiftInfo.isOperating && (
                        <span className="ml-2 flex items-center gap-1 text-xs font-semibold text-success">
                          <div className="h-2 w-2 rounded-full bg-success/100 animate-pulse" />
                          Aktif
                        </span>
                      )}
                    </div>

                    {/* Service */}
                    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary">
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-700">Service & Garansi</p>
                        <p className="text-sm font-mono text-foreground mt-0.5">{formattedPhoneService}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage area */}
          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-primary">📦 Area Pengiriman:</span>{" "}
              Seluruh Kalimantan Barat & Indonesia. Packing aman dengan asuransi!
            </p>
          </div>
        </div>
      </section>
  );
};

export default LocationSection;
