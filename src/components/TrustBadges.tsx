import { Shield, Lock, CheckCircle, ShieldCheck, Truck, Clock } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "100% Original & Garansi",
    description: "iPhone garansi TAM, laptop garansi distributor resmi. Produk dijamin original.",
    gradient: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-600",
  },
  {
    icon: CheckCircle,
    title: "Cicilan 0%",
    description: "12+ bank • Tenor s/d 24 bulan",
    gradient: "from-green-50 to-green-100",
    border: "border-green-200",
    iconBg: "bg-green-600",
  },
  {
    icon: Lock,
    title: "Secure Payment",
    description: "Transaksi aman & terlindungi",
    gradient: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconBg: "bg-purple-600",
  },
  {
    icon: Clock,
    title: "10+ Tahun Pengalaman",
    description: "Melayani ribuan pelanggan di Pontianak sejak 2015",
    gradient: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    iconBg: "bg-orange-600",
  },
  {
    icon: Shield,
    title: "Fast Response",
    description: "Respon cepat via WhatsApp untuk konsultasi dan after sales",
    gradient: "from-teal-50 to-teal-100",
    border: "border-teal-200",
    iconBg: "bg-teal-600",
  },
  {
    icon: Truck,
    title: "Siap Kirim Se-Indonesia",
    description: "Pengiriman aman ke seluruh pelosok negeri dengan asuransi",
    gradient: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    iconBg: "bg-indigo-600",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-14 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
            Mengapa Database Computer?
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Toko Laptop Terpercaya di Pontianak
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan dan keamanan Anda adalah prioritas utama kami
          </p>
        </div>

        {/* Trust badges grid - 2 rows × 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 bg-gradient-to-br ${point.gradient} rounded-xl border-2 ${point.border} hover:shadow-lg transition-shadow`}
            >
              <div className={`w-16 h-16 ${point.iconBg} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* SSL Badge */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-foreground">
              Website ini dilindungi dengan enkripsi SSL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
