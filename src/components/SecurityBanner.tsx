import { Shield, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card } from "./ui/card";
import { CONTACT_INFO } from "@/lib/constants";

export default function SecurityBanner() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-info/10 via-background to-success/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Card className="border-2 border-info shadow-xl bg-card rounded-2xl">
          <div className="p-5 sm:p-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <div className="flex justify-center sm:justify-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-info rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-info-foreground" />
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-3xl font-bold text-foreground">
                  ✅ Website Resmi<br />Database Computer
                </h2>
                <p className="text-xs sm:text-base text-muted-foreground mt-1">
                  Verifikasi kontak resmi hanya melalui website ini
                </p>
              </div>
            </div>

            {/* Contacts */}
            <div className="bg-info/10 border-2 border-info/30 rounded-xl p-5 sm:p-6 mb-6">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Kontak Resmi
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                
                {/* WhatsApp */}
                <ContactItem
                  label="WhatsApp Resmi"
                  value={CONTACT_INFO.whatsapp}
                  bg="bg-success/20"
                  iconColor="text-success"
                >
                  <WhatsAppIcon />
                </ContactItem>

                {/* Email */}
                <ContactItem
                  label="Email Resmi"
                  value={CONTACT_INFO.email}
                  bg="bg-info/20"
                  iconColor="text-info"
                >
                  <MailIcon />
                </ContactItem>

                {/* Phone */}
                <ContactItem
                  label="Telepon Resmi"
                  value={CONTACT_INFO.phone}
                  bg="bg-accent/20"
                  iconColor="text-accent"
                >
                  <PhoneIcon />
                </ContactItem>

              </div>
            </div>

            {/* Warning */}
            <div className="bg-warning/10 border border-warning/40 rounded-xl p-4">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-warning mt-0.5" />
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong>Hati-hati penipuan.</strong> Kami <strong>TIDAK PERNAH</strong> meminta transfer ke rekening di luar
                  informasi resmi website ini. Jika menemukan kontak mencurigakan,
                  <strong className="text-destructive"> segera hubungi kami.</strong>
                </p>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}

/* ===== Small Components ===== */

function ContactItem({ label, value, bg, iconColor, children }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-3">
      <div className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center ${iconColor}`}>
        {children}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500 font-medium">{label}</p>
        <p className="text-sm font-bold text-foreground truncate">{value}</p>
      </div>
    </div>
  );
}

/* ===== Icons ===== */

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-..."/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493..." />
    </svg>
  );
}
