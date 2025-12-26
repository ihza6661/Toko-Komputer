import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { COMPANY_INFO } from "@/lib/constants";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Kebijakan Privasi - Database Computer Pontianak"
        description="Kebijakan Privasi Database Computer - Perlindungan data pribadi pelanggan, penggunaan informasi, dan komitmen keamanan data."
        type="article"
      />
      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-display font-semibold text-lg">
              Toko <span className="text-primary">Komputer</span>
            </span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-muted-foreground">
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">{COMPANY_INFO.name}</strong> ("kami", "milik kami") 
            menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
            Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi 
            informasi Anda ketika Anda mengunjungi situs web kami di <strong>{window.location.hostname}</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dengan menggunakan situs web ini, Anda menyetujui pengumpulan dan penggunaan informasi 
            sesuai dengan kebijakan ini.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Informasi yang Kami Kumpulkan
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Informasi yang Anda Berikan</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Ketika Anda menggunakan formulir kontak atau menghubungi kami melalui WhatsApp, 
                kami dapat mengumpulkan:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Nama lengkap</li>
                <li>Nomor telepon atau WhatsApp</li>
                <li>Alamat email (opsional)</li>
                <li>Informasi tentang produk atau layanan yang Anda minati</li>
                <li>Pesan atau pertanyaan yang Anda kirimkan</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Informasi yang Dikumpulkan Secara Otomatis</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Ketika Anda mengunjungi situs web kami, kami secara otomatis mengumpulkan informasi tertentu, termasuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Alamat IP dan lokasi geografis umum</li>
                <li>Jenis browser dan sistem operasi</li>
                <li>Halaman yang Anda kunjungi dan waktu kunjungan</li>
                <li>Sumber rujukan (dari mana Anda menemukan situs kami)</li>
                <li>Perangkat yang Anda gunakan (desktop, mobile, tablet)</li>
                <li>Interaksi Anda dengan konten situs (klik, scroll, waktu di halaman)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Analytics & Tracking */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Alat Analitik & Pelacakan
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                Google Analytics 4
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Kami menggunakan <strong>Google Analytics 4</strong> untuk memahami bagaimana pengunjung 
                menggunakan situs web kami. Google Analytics mengumpulkan informasi seperti:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-3">
                <li>Halaman yang dikunjungi dan durasi kunjungan</li>
                <li>Sumber traffic (pencarian, media sosial, langsung)</li>
                <li>Demografi umum (usia, gender, minat) - tanpa identitas pribadi</li>
                <li>Perilaku di situs (klik tombol, scroll, navigasi)</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Google Analytics menggunakan cookies untuk mengidentifikasi kunjungan berulang. 
                Data dikumpulkan secara anonim dan digabungkan. Untuk informasi lebih lanjut, baca{" "}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Kebijakan Privasi Google
                </a>.
              </p>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                Facebook Pixel
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Kami menggunakan <strong>Facebook Pixel</strong> untuk mengukur efektivitas iklan kami 
                di Facebook dan Instagram. Facebook Pixel membantu kami:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-3">
                <li>Memahami tindakan yang dilakukan pengunjung di situs kami</li>
                <li>Menampilkan iklan yang relevan kepada orang yang sudah mengunjungi situs kami</li>
                <li>Mengukur konversi dari iklan Facebook/Instagram</li>
                <li>Mengoptimalkan kampanye iklan untuk hasil terbaik</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Facebook Pixel menggunakan cookies untuk melacak aktivitas Anda. 
                Untuk informasi lebih lanjut, baca{" "}
                <a 
                  href="https://www.facebook.com/privacy/explanation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Kebijakan Privasi Facebook
                </a>.
              </p>
            </div>

            <div className="bg-accent/50 border border-primary/20 rounded-lg p-5">
              <p className="text-sm text-foreground">
                <strong>💡 Catatan:</strong> Alat-alat ini hanya aktif jika telah dikonfigurasi oleh administrator. 
                Jika Anda melihat halaman ini, berarti situs telah mengaktifkan pelacakan untuk meningkatkan 
                pengalaman pengguna dan efektivitas pemasaran.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Bagaimana Kami Menggunakan Informasi Anda
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Kami menggunakan informasi yang dikumpulkan untuk:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Merespons pertanyaan dan permintaan Anda tentang produk atau layanan</li>
            <li>Memproses transaksi dan pesanan</li>
            <li>Mengirimkan informasi tentang produk, promo, dan update (dengan persetujuan Anda)</li>
            <li>Meningkatkan pengalaman pengguna di situs web kami</li>
            <li>Menganalisis tren dan perilaku pengguna untuk meningkatkan layanan</li>
            <li>Menampilkan iklan yang relevan di platform lain (retargeting)</li>
            <li>Melindungi situs web kami dari aktivitas penipuan atau penyalahgunaan</li>
            <li>Mematuhi kewajiban hukum</li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Keamanan Data
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data 
            pribadi Anda dari akses tidak sah, kehilangan, atau penyalahgunaan, termasuk:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Enkripsi data selama transmisi (HTTPS/SSL)</li>
            <li>Akses terbatas ke data pribadi hanya untuk karyawan yang berwenang</li>
            <li>Pemantauan sistem secara berkala untuk mendeteksi kerentanan</li>
            <li>Penyimpanan data yang aman</li>
          </ul>
          <p className="text-sm text-muted-foreground italic">
            Namun, harap diingat bahwa tidak ada metode transmisi melalui internet atau penyimpanan 
            elektronik yang 100% aman. Kami berusaha sebaik mungkin, tetapi tidak dapat menjamin 
            keamanan absolut.
          </p>
        </section>

        {/* Data Sharing */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Berbagi Data dengan Pihak Ketiga
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Kami <strong>tidak menjual</strong> data pribadi Anda kepada pihak ketiga. 
            Namun, kami dapat membagikan informasi Anda dengan:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>
              <strong>Penyedia Layanan:</strong> Seperti Google Analytics dan Facebook Pixel 
              untuk tujuan analitik dan pemasaran
            </li>
            <li>
              <strong>Platform WhatsApp:</strong> Ketika Anda menghubungi kami melalui WhatsApp, 
              komunikasi diatur oleh Kebijakan Privasi WhatsApp
            </li>
            <li>
              <strong>Otoritas Hukum:</strong> Jika diwajibkan oleh hukum atau untuk melindungi 
              hak dan keselamatan kami
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Database className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Cookies
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Situs web kami menggunakan "cookies" untuk meningkatkan pengalaman Anda. Cookies adalah 
            file teks kecil yang disimpan di perangkat Anda. Kami menggunakan cookies untuk:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Mengingat preferensi Anda</li>
            <li>Memahami bagaimana Anda menggunakan situs kami</li>
            <li>Menampilkan iklan yang relevan</li>
            <li>Mengukur efektivitas kampanye pemasaran</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Anda dapat mengatur browser Anda untuk menolak cookies, tetapi beberapa fitur situs 
            mungkin tidak berfungsi dengan baik. Sebagian besar browser menerima cookies secara default.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Hak Anda
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Anda memiliki hak untuk:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li><strong>Mengakses:</strong> Meminta salinan data pribadi yang kami miliki tentang Anda</li>
            <li><strong>Memperbaiki:</strong> Meminta kami memperbaiki data yang tidak akurat</li>
            <li><strong>Menghapus:</strong> Meminta kami menghapus data pribadi Anda</li>
            <li><strong>Membatasi:</strong> Meminta kami membatasi pemrosesan data Anda</li>
            <li><strong>Menolak:</strong> Menolak pemrosesan data Anda untuk tujuan pemasaran</li>
            <li><strong>Portabilitas:</strong> Meminta data Anda dalam format yang dapat dibaca mesin</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak di bawah.
          </p>
        </section>

        {/* Third Party Links */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Tautan ke Situs Pihak Ketiga
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Situs web kami mungkin berisi tautan ke situs web pihak ketiga (misalnya, Google Maps, 
            Instagram, WhatsApp). Kami tidak bertanggung jawab atas praktik privasi situs-situs tersebut. 
            Kami mendorong Anda untuk membaca kebijakan privasi setiap situs yang Anda kunjungi.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Privasi Anak-Anak
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Situs web kami tidak ditujukan untuk anak-anak di bawah usia 13 tahun. Kami tidak 
            secara sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda adalah orang tua 
            dan mengetahui bahwa anak Anda telah memberikan informasi pribadi kepada kami, silakan 
            hubungi kami agar kami dapat menghapusnya.
          </p>
        </section>

        {/* Changes to Policy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Perubahan Kebijakan Privasi
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
            dipublikasikan di halaman ini dengan tanggal "Terakhir diperbarui" yang baru. 
            Kami mendorong Anda untuk meninjau kebijakan ini secara berkala. 
            Penggunaan situs web yang berkelanjutan setelah perubahan berarti Anda menerima 
            kebijakan yang telah diperbarui.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Hubungi Kami
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, 
              atau ingin menggunakan hak privasi Anda, silakan hubungi kami:
            </p>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">Nama Perusahaan:</strong>
                <br />
                {COMPANY_INFO.name}
              </div>
              <div>
                <strong className="text-foreground">Alamat:</strong>
                <br />
                {COMPANY_INFO.fullAddress}
              </div>
              <div>
                <strong className="text-foreground">Telepon/WhatsApp:</strong>
                <br />
                <a 
                  href={`https://wa.me/6281234567890`} 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-3456-7890
                </a>
              </div>
              <div>
                <strong className="text-foreground">Instagram:</strong>
                <br />
                <a 
                  href={COMPANY_INFO.instagram} 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @toko.computer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home CTA */}
        <div className="text-center pt-8 border-t border-border">
          <Link to="/">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="h-5 w-5" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-secondary/30 border-t border-border mt-12">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default PrivacyPolicy;
