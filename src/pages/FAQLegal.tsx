import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COMPANY_INFO } from "@/lib/constants";

const FAQLegal = () => {
  return (
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
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            FAQ Legal & Kebijakan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pertanyaan umum tentang kebijakan, garansi, pengembalian, dan hak Anda sebagai pelanggan
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12">
          <h2 className="font-display font-semibold text-foreground mb-4">Dokumen Legal Lengkap</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/terms-of-service"
              className="bg-background border border-border rounded-lg p-4 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-foreground mb-1">Syarat & Ketentuan</h3>
              <p className="text-sm text-muted-foreground">Ketentuan lengkap layanan kami</p>
            </Link>
            <Link 
              to="/refund-policy"
              className="bg-background border border-border rounded-lg p-4 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-foreground mb-1">Kebijakan Pengembalian</h3>
              <p className="text-sm text-muted-foreground">Panduan pengembalian & penukaran</p>
            </Link>
            <Link 
              to="/privacy-policy"
              className="bg-background border border-border rounded-lg p-4 hover:border-primary hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-foreground mb-1">Kebijakan Privasi</h3>
              <p className="text-sm text-muted-foreground">Bagaimana kami melindungi data Anda</p>
            </Link>
          </div>
        </div>

        {/* FAQ Sections */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Pertanyaan Umum tentang Legal & Kebijakan
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {/* Returns & Refunds */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Bisakah saya mengembalikan laptop yang sudah dibeli?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  Ya, Anda dapat mengembalikan laptop dalam periode tertentu sesuai{" "}
                  <Link to="/refund-policy" className="text-primary hover:underline">
                    Kebijakan Pengembalian
                  </Link>{" "}
                  kami:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li><strong>Laptop baru:</strong> 7 hari sejak tanggal pembelian</li>
                  <li><strong>Laptop refurbished/second:</strong> 3 hari sejak tanggal pembelian</li>
                  <li><strong>Komponen & aksesoris:</strong> 7 hari dalam kondisi belum dibuka</li>
                </ul>
                <p className="mb-3">
                  <strong>Syarat pengembalian:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Produk dalam kondisi fisik baik tanpa kerusakan akibat pemakaian</li>
                  <li>Semua aksesoris, kemasan, dan kelengkapan harus dikembalikan</li>
                  <li>Disertai nota/invoice pembelian asli</li>
                  <li>Data pribadi telah dihapus dari perangkat</li>
                </ul>
                <p>
                  Untuk detail lengkap, baca{" "}
                  <Link to="/refund-policy" className="text-primary hover:underline">
                    Kebijakan Pengembalian & Penukaran
                  </Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Bagaimana cara mengajukan pengembalian produk?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">Ikuti langkah-langkah berikut untuk mengajukan pengembalian:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-3">
                  <li>
                    <strong>Hubungi kami via WhatsApp</strong> di{" "}
                    <a 
                      href="https://wa.me/6281234567890" 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      0812-3456-7890
                    </a>{" "}
                    dalam periode pengembalian
                  </li>
                  <li>
                    <strong>Siapkan informasi:</strong> Nomor invoice, tanggal pembelian, dan alasan pengembalian
                  </li>
                  <li>
                    <strong>Kirim foto/video produk</strong> untuk verifikasi awal (jika diminta)
                  </li>
                  <li>
                    <strong>Tunggu persetujuan</strong> dari tim kami (1-2 hari kerja)
                  </li>
                  <li>
                    <strong>Kirim atau bawa produk</strong> ke toko kami dengan kemasan asli dan kelengkapan
                  </li>
                  <li>
                    <strong>Inspeksi produk</strong> akan dilakukan teknisi kami (2-5 hari kerja)
                  </li>
                  <li>
                    <strong>Pilih opsi:</strong> Pengembalian dana, penukaran produk, atau store credit (bonus 5%)
                  </li>
                </ol>
                <p>
                  Estimasi total waktu: 4-10 hari kerja. Lihat panduan lengkap di{" "}
                  <Link to="/refund-policy" className="text-primary hover:underline">
                    halaman Kebijakan Pengembalian
                  </Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Apa yang terjadi jika data saya hilang selama servis?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                  <p className="text-foreground font-semibold flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    Penting: Backup Data Sebelum Servis
                  </p>
                </div>
                <p className="mb-3">
                  Sesuai dengan{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    Syarat dan Ketentuan Layanan
                  </Link>{" "}
                  kami, <strong>pelanggan bertanggung jawab penuh untuk melakukan backup data</strong> sebelum 
                  menyerahkan perangkat untuk servis atau reparasi.
                </p>
                <p className="mb-3">
                  <strong>Kebijakan kami:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>
                    <strong>Kami TIDAK bertanggung jawab</strong> atas kehilangan data selama proses servis, 
                    termasuk namun tidak terbatas pada dokumen, foto, video, atau file pribadi lainnya
                  </li>
                  <li>
                    Teknisi kami akan berusaha sebaik mungkin untuk tidak mengubah atau menghapus data, 
                    tetapi beberapa prosedur perbaikan (seperti format, reinstall OS, atau penggantian storage) 
                    mungkin mengharuskan penghapusan data
                  </li>
                  <li>
                    Kami akan memberitahu Anda jika prosedur servis berpotensi menghapus data, 
                    dan meminta persetujuan sebelum melanjutkan
                  </li>
                  <li>
                    Layanan backup atau recovery data tersedia sebagai layanan tambahan dengan biaya terpisah
                  </li>
                </ul>
                <p className="font-semibold text-foreground mb-2">Rekomendasi kami:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Selalu backup data penting ke cloud storage atau hard disk eksternal</li>
                  <li>Hapus data pribadi/sensitif sebelum servis jika memungkinkan</li>
                  <li>Tanyakan teknisi tentang potensi kehilangan data sebelum servis dimulai</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Berapa lama garansi produk yang saya beli?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">Durasi garansi tergantung pada jenis produk yang Anda beli:</p>
                
                <div className="space-y-4 mb-4">
                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Laptop Baru (Brand New)</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Garansi distributor resmi: 1-3 tahun (tergantung brand)</li>
                      <li>Garansi toko: 1 bulan untuk software/instalasi</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Laptop Refurbished/Second</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Garansi hardware: 1-3 bulan (tergantung kondisi & spesifikasi)</li>
                      <li>Garansi sparepart penggantian: 1 bulan</li>
                      <li>Tidak termasuk baterai & adaptor (konsumable items)</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Komponen & Aksesoris</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>RAM, SSD, HDD: 7 hari - 1 bulan (tergantung kondisi)</li>
                      <li>Keyboard, charger, mouse: 7 hari</li>
                      <li>Item consumable (baterai, kabel): Tidak bergaransi</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Layanan Servis</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Garansi servis: 7 hari - 1 bulan (tergantung jenis perbaikan)</li>
                      <li>Sparepart penggantian: Sesuai garansi part (biasanya 1 bulan)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm">
                  <strong>Catatan:</strong> Garansi spesifik akan disebutkan pada nota/invoice pembelian. 
                  Untuk detail lengkap tentang garansi, baca{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    Syarat dan Ketentuan Layanan
                  </Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Apa saja yang TIDAK ditanggung oleh garansi?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  Garansi <strong>TIDAK berlaku</strong> dalam kondisi berikut:
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Kerusakan fisik akibat benturan, jatuh, tumpahan cairan, atau force majeure</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Kerusakan akibat penyalahgunaan, modifikasi, atau overclocking</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Kerusakan akibat virus, malware, atau instalasi software tidak resmi</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Kerusakan akibat pembongkaran atau perbaikan oleh pihak ketiga tanpa izin</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Stiker garansi rusak, terkelupas, atau hilang</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Item consumable: baterai, charger, kabel (kecuali disebutkan lain)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Kerusakan kosmetik: goresan, penyok, diskolorasi casing (tidak memengaruhi fungsi)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Kehilangan data atau software (selalu backup data Anda)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <p>Garansi yang telah berakhir atau nota/invoice tidak dapat ditunjukkan</p>
                  </div>
                </div>
                <p className="text-sm">
                  Untuk klaim garansi, hubungi kami dengan membawa nota/invoice asli dan produk dalam kondisi 
                  sesuai syarat garansi. Detail lengkap di{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    Syarat dan Ketentuan Layanan
                  </Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Apakah ada biaya pembatalan untuk pembelian yang sudah dipesan?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">Kebijakan pembatalan tergantung pada status pesanan:</p>
                
                <div className="space-y-4 mb-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">✓ Pembatalan GRATIS (Tanpa Biaya)</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Pesanan belum dibayar atau baru DP (dapat dibatalkan dengan pengembalian DP penuh)</li>
                      <li>Pembatalan dilakukan dalam 2 jam setelah pembayaran penuh untuk produk ready stock</li>
                      <li>Produk pre-order yang belum diproses atau belum dipesan dari supplier</li>
                    </ul>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">⚠ Pembatalan dengan Potongan</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Produk sudah dibayar penuh dan sudah dikemas/siap kirim: potongan biaya admin 5%</li>
                      <li>Pre-order yang sudah dipesan dari supplier: potongan biaya pemesanan (bervariasi)</li>
                      <li>Custom order atau produk yang diimpor khusus: potongan 10-20% atau sesuai kesepakatan</li>
                    </ul>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">✕ Tidak Dapat Dibatalkan</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Produk sudah dikirim atau dalam perjalanan (gunakan Kebijakan Pengembalian)</li>
                      <li>Produk sudah diterima oleh pelanggan (gunakan Kebijakan Pengembalian)</li>
                      <li>Produk custom/modifikasi yang sudah dikerjakan (non-refundable)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm">
                  <strong>Cara membatalkan pesanan:</strong> Hubungi customer service via WhatsApp di{" "}
                  <a 
                    href="https://wa.me/6281234567890" 
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    0812-3456-7890
                  </a>{" "}
                  dengan menyebutkan nomor invoice dan alasan pembatalan.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Bagaimana cara mengajukan keluhan atau dispute?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  Jika Anda tidak puas dengan produk atau layanan kami, kami mendorong Anda untuk 
                  menghubungi kami terlebih dahulu untuk penyelesaian amicable:
                </p>
                
                <ol className="list-decimal list-inside space-y-3 ml-4 mb-4">
                  <li>
                    <strong>Hubungi Customer Service:</strong> Kirim keluhan via WhatsApp ke{" "}
                    <a 
                      href="https://wa.me/6281234567890" 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      0812-3456-7890
                    </a>{" "}
                    dengan detail lengkap (nomor invoice, tanggal, masalah yang dialami)
                  </li>
                  <li>
                    <strong>Verifikasi & Investigasi:</strong> Tim kami akan menyelidiki keluhan Anda 
                    dalam 2-3 hari kerja
                  </li>
                  <li>
                    <strong>Penyelesaian:</strong> Kami akan menawarkan solusi (perbaikan, penggantian, 
                    refund, atau kompensasi lain yang sesuai)
                  </li>
                  <li>
                    <strong>Eskalasi:</strong> Jika tidak mencapai kesepakatan, Anda dapat meminta 
                    eskalasi ke manager atau owner untuk mediasi lebih lanjut
                  </li>
                </ol>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-3">
                  <p className="text-sm text-foreground">
                    <strong>Komitmen kami:</strong> Kami berusaha menyelesaikan semua keluhan dalam 
                    7 hari kerja. Kepuasan pelanggan adalah prioritas utama kami.
                  </p>
                </div>

                <p className="text-sm">
                  Untuk penyelesaian sengketa formal, lihat bagian "Penyelesaian Sengketa" di{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    Syarat dan Ketentuan Layanan
                  </Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Apakah data pribadi saya aman dan dilindungi?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  Ya, kami sangat serius dalam melindungi privasi dan data pribadi Anda. 
                  Sesuai dengan{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Kebijakan Privasi
                  </Link>{" "}
                  kami:
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <strong className="text-foreground">Enkripsi Data:</strong>
                      <p className="text-sm">
                        Semua data yang dikirim melalui website kami dilindungi dengan enkripsi SSL/HTTPS
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <strong className="text-foreground">Akses Terbatas:</strong>
                      <p className="text-sm">
                        Hanya karyawan yang berwenang yang memiliki akses ke data pribadi pelanggan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <strong className="text-foreground">Tidak Dijual:</strong>
                      <p className="text-sm">
                        Kami TIDAK pernah menjual data pribadi Anda kepada pihak ketiga
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <strong className="text-foreground">Hak Privasi Anda:</strong>
                      <p className="text-sm">
                        Anda berhak mengakses, memperbaiki, atau menghapus data pribadi yang kami miliki
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <strong className="text-foreground">Penggunaan Terbatas:</strong>
                      <p className="text-sm">
                        Data hanya digunakan untuk memproses transaksi, customer service, dan peningkatan layanan
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm">
                  Untuk informasi lengkap tentang bagaimana kami mengumpulkan, menyimpan, dan melindungi 
                  data Anda, baca{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Kebijakan Privasi
                  </Link>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Apakah saya bisa mendapatkan invoice atau bukti pembelian?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  Ya, tentu! Setiap transaksi pembelian akan mendapatkan invoice/nota resmi yang berfungsi sebagai:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Bukti pembelian untuk klaim garansi</li>
                  <li>Dokumen untuk pengembalian atau penukaran produk</li>
                  <li>Referensi untuk customer service dan support</li>
                  <li>Catatan untuk keperluan akuntansi atau pajak (jika diperlukan)</li>
                </ul>

                <p className="mb-3"><strong>Format invoice:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4 text-sm">
                  <li><strong>Pembelian offline:</strong> Nota fisik dicetak langsung saat transaksi</li>
                  <li><strong>Pembelian online/WhatsApp:</strong> Invoice digital dikirim via WhatsApp atau email (PDF)</li>
                  <li>Invoice mencantumkan: nomor invoice, tanggal, detail produk, harga, garansi, dan stempel toko</li>
                </ul>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <AlertCircle className="h-5 w-5 text-amber-500 inline mr-2" />
                    <strong>Penting:</strong> Simpan invoice/nota Anda dengan baik! Invoice diperlukan untuk 
                    klaim garansi, pengembalian produk, atau layanan purna jual lainnya.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">
                <span className="font-semibold">Siapa yang harus saya hubungi jika ada masalah hukum atau keluhan serius?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  Untuk masalah hukum, keluhan serius, atau jika Anda merasa hak Anda sebagai konsumen 
                  tidak dipenuhi, silakan hubungi:
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-foreground mb-4">Kontak Resmi {COMPANY_INFO.name}</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-foreground">WhatsApp (Owner/Manager):</strong>
                      <br />
                      <a 
                        href="https://wa.me/6281234567890" 
                        className="text-primary hover:underline text-base font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        0812-3456-7890
                      </a>
                    </div>
                    <div>
                      <strong className="text-foreground">Alamat Toko:</strong>
                      <br />
                      {COMPANY_INFO.fullAddress}
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
                        @database.id_official
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-sm mb-3">
                  <strong>Proses eskalasi:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 ml-4 text-sm mb-4">
                  <li>Hubungi customer service untuk penyelesaian awal</li>
                  <li>Jika tidak terselesaikan, minta eskalasi ke manager/owner</li>
                  <li>Untuk masalah hukum, konsultasikan dengan pengacara Anda</li>
                  <li>Penyelesaian sengketa melalui mediasi atau arbitrase (jika diperlukan)</li>
                </ol>

                <p className="text-sm">
                  Hukum yang berlaku dan penyelesaian sengketa diatur sesuai dengan peraturan 
                  perundang-undangan Republik Indonesia. Detail lengkap di{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    Syarat dan Ketentuan Layanan
                  </Link>.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Jika pertanyaan Anda belum terjawab di sini, jangan ragu untuk menghubungi 
              customer service kami. Tim kami siap membantu Anda!
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <HelpCircle className="h-5 w-5" />
                Hubungi Customer Service
              </Button>
            </a>
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
          <p className="text-sm text-muted-foreground mb-2">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary">
              Syarat & Ketentuan
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary">
              Pengembalian & Penukaran
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQLegal;
