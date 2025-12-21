import {
  CreditCard,
  Smartphone,
  Landmark,
  Wallet,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const paymentMethods = [
  {
    icon: Landmark,
    title: "Transfer Bank",
    description: "BCA, Mandiri, BRI, BNI",
    badge: "Paling Populer",
  },
  {
    icon: Smartphone,
    title: "QRIS & E-Wallet",
    description: "Scan & bayar dengan mudah",
    badge: "Praktis",
  },
  {
    icon: CreditCard,
    title: "Kartu Kredit",
    description: "Cicilan 0% tersedia",
    badge: "Cicilan",
  },
  {
    icon: Wallet,
    title: "Tunai",
    description: "Bayar langsung di toko",
    badge: "COD",
  },
];

const financingOptions = [
  {
    provider: "Kredivo",
    terms: "Cicilan 3-12 bulan",
    benefit: "Proses cepat, approval instan",
  },
  {
    provider: "Akulaku",
    terms: "Cicilan 3-12 bulan",
    benefit: "Tanpa kartu kredit",
  },
  {
    provider: "Home Credit",
    terms: "Cicilan 6-12 bulan",
    benefit: "Bunga kompetitif",
  },
];

const PaymentMethodsSection = () => {
  return (
    <section id="payment-methods" className="py-14 md:py-20 bg-background relative" aria-labelledby="payment-heading">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
            <CreditCard className="h-5 w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
              Metode Pembayaran
            </span>
          </div>

          <h2 id="payment-heading" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Bayar dengan Cara Anda
          </h2>

          <p className="mt-3 md:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Kami menerima berbagai metode pembayaran untuk kemudahan transaksi
            Anda. Aman, cepat, dan terpercaya.
          </p>
        </div>

        {/* Payment methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 sm:p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Icon + Badge */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <method.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>

                <span className="inline-block text-[11px] sm:text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {method.badge}
                </span>
              </div>

              <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-1">
                {method.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Financing options */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                Opsi Cicilan Tersedia
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Upgrade laptop impian tanpa beban! Cicilan mudah dengan bunga
                kompetitif.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8">
              {financingOptions.map((option, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">
                      {option.provider}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-primary font-medium mb-1 sm:mb-2">
                    {option.terms}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {option.benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="bg-secondary/50 rounded-xl p-4 sm:p-6 mb-6">
              <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                {[
                  {
                    title: "Proses Cepat",
                    desc: "Approval cicilan bisa dalam hitungan menit. Syarat mudah, proses simple.",
                  },
                  {
                    title: "Syarat Ringan",
                    desc: "Cukup KTP dan bukti penghasilan. Tanpa jaminan atau kartu kredit.",
                  },
                  {
                    title: "Bunga Kompetitif",
                    desc: "Rate bunga terbaik di kelasnya. Promo cicilan 0% untuk tenor tertentu.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Ingin tahu lebih lanjut tentang cicilan atau metode pembayaran
                lainnya?
              </p>

              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a
                  href={generateWhatsAppLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Konsultasi Pembayaran
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            <span className="text-primary font-semibold">
              100% Aman & Terpercaya
            </span>{" "}
            • Semua transaksi dilindungi
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
