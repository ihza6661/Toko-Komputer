import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ShoppingCart, Repeat, Wrench, AlertTriangle, Shield, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

const TermsOfService = () => {
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
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Syarat dan Ketentuan Layanan
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
            Selamat datang di <strong className="text-foreground">{COMPANY_INFO.name}</strong>. 
            Syarat dan Ketentuan Layanan ("Ketentuan") ini mengatur penggunaan situs web kami di{" "}
            <strong>{window.location.hostname}</strong> dan semua layanan yang kami tawarkan, 
            termasuk penjualan laptop, program tukar tambah, dan layanan servis/reparasi.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dengan mengakses atau menggunakan situs web ini, atau dengan melakukan transaksi dengan 
            kami (baik secara online maupun offline), Anda menyetujui untuk terikat oleh Ketentuan ini. 
            Jika Anda tidak setuju dengan Ketentuan ini, mohon untuk tidak menggunakan layanan kami.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-5 mt-6">
            <p className="text-sm text-foreground flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Penting:</strong> Harap baca Ketentuan ini dengan saksama sebelum melakukan 
                transaksi. Dengan menghubungi kami via WhatsApp atau melakukan pembelian, Anda 
                dianggap telah memahami dan menyetujui seluruh ketentuan yang berlaku.
              </span>
            </p>
          </div>
        </section>

        {/* General Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Ketentuan Umum
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1.1 Kelayakan Penggunaan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anda harus berusia minimal 17 tahun atau memiliki izin dari orang tua/wali untuk 
                menggunakan layanan kami. Dengan menggunakan situs web ini, Anda menyatakan bahwa 
                Anda memiliki kapasitas hukum untuk mengikat diri dalam perjanjian yang mengikat.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">1.2 Perubahan Ketentuan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kami berhak untuk mengubah, memodifikasi, atau memperbarui Ketentuan ini kapan saja 
                tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah dipublikasikan 
                di situs web ini dengan tanggal "Terakhir diperbarui" yang baru. Penggunaan layanan 
                kami setelah perubahan berarti Anda menerima ketentuan yang telah diperbarui.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">1.3 Informasi Akurat</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anda setuju untuk memberikan informasi yang akurat, lengkap, dan terkini saat 
                melakukan transaksi dengan kami. Informasi yang tidak akurat dapat menyebabkan 
                pembatalan atau penundaan transaksi.
              </p>
            </div>
          </div>
        </section>

        {/* Sales Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingCart className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Ketentuan Pembelian Laptop
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">2.1 Ketersediaan Produk</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Semua produk yang ditampilkan di situs web bersifat <strong>ready stock</strong> 
                  kecuali ditandai "TERJUAL"
                </li>
                <li>
                  Ketersediaan produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya
                </li>
                <li>
                  Jika produk yang Anda inginkan sudah terjual, kami akan membantu mencarikan 
                  alternatif produk serupa
                </li>
                <li>
                  Spesifikasi, harga, dan kondisi produk dapat berubah tanpa pemberitahuan
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">2.2 Harga dan Pembayaran</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Semua harga tercantum dalam Rupiah (IDR) dan <strong>bersifat final</strong> 
                  setelah konfirmasi transaksi
                </li>
                <li>
                  Harga dapat berubah tanpa pemberitahuan sebelumnya. Harga yang berlaku adalah 
                  harga pada saat konfirmasi pemesanan
                </li>
                <li>
                  Kami menerima pembayaran via <strong>Transfer Bank, QRIS, Kartu Kredit/Debit, 
                  dan Cicilan</strong>
                </li>
                <li>
                  Untuk pembayaran cicilan (kredit), syarat dan ketentuan mengikuti kebijakan 
                  lembaga pembiayaan yang bersangkutan
                </li>
                <li>
                  Pembayaran harus dilakukan dalam waktu <strong>maksimal 24 jam</strong> setelah 
                  konfirmasi pemesanan, jika tidak pesanan dapat dibatalkan
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">2.3 Kondisi Produk</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Semua laptop yang dijual adalah <strong>laptop bekas berkualitas</strong> yang 
                  telah melalui quality control
                </li>
                <li>
                  Kondisi fisik dan fungsional setiap unit akan dijelaskan secara detail sebelum 
                  pembelian
                </li>
                <li>
                  Foto produk bersifat representatif. Unit yang Anda terima mungkin sedikit berbeda 
                  dari foto (namun dengan spesifikasi dan kondisi yang sama atau lebih baik)
                </li>
                <li>
                  Kami <strong>tidak menjamin battery health</strong> untuk laptop bekas karena 
                  baterai adalah komponen yang menurun seiring waktu
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">2.4 Garansi</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-4">
                <p className="text-foreground font-semibold mb-2">✅ Yang Dijamin:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Mainboard/logicboard (1-3 bulan tergantung unit)</li>
                  <li>Processor tidak mati</li>
                  <li>RAM berfungsi normal</li>
                  <li>Storage (HDD/SSD) tidak bad sector</li>
                  <li>Layar tidak bermasalah (dead pixel, ghosting)</li>
                  <li>Port USB, audio, charging berfungsi normal</li>
                </ul>
              </div>
              <div className="bg-secondary/50 border border-border rounded-lg p-5">
                <p className="text-foreground font-semibold mb-2">❌ Yang Tidak Dijamin:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Kerusakan fisik akibat terjatuh, terkena air, atau benturan</li>
                  <li>Kerusakan akibat software (virus, sistem operasi, driver)</li>
                  <li>Battery health/daya tahan baterai</li>
                  <li>Goresan atau lecet pada casing (kondisi kosmetik)</li>
                  <li>Kerusakan akibat modifikasi atau pembongkaran oleh pihak lain</li>
                  <li>Force majeure (bencana alam, kebakaran, dll)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">2.5 Pengembalian dan Penukaran</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                <p className="text-sm text-foreground">
                  📋 <strong>Kebijakan Lengkap:</strong> Untuk informasi detail tentang pengembalian, 
                  penukaran, syarat & prosedur, baca{" "}
                  <Link to="/refund-policy" className="text-primary hover:underline font-semibold">
                    Kebijakan Pengembalian & Penukaran
                  </Link>.
                </p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Masa garansi:</strong> Jika terjadi kerusakan yang termasuk dalam garansi, 
                  kami akan memperbaiki atau menukar unit (tergantung kondisi)
                </li>
                <li>
                  <strong>Bukan kesalahan produk:</strong> Kami <strong>tidak menerima pengembalian 
                  atau penukaran</strong> jika Anda berubah pikiran, tidak cocok, atau salah pilih
                </li>
                <li>
                  <strong>Dead on arrival (DOA):</strong> Jika unit tidak berfungsi saat diterima, 
                  laporkan dalam <strong>1x24 jam</strong> untuk klaim penukaran
                </li>
                <li>
                  <strong>Prosedur klaim:</strong> Hubungi kami via WhatsApp dengan menyertakan 
                  bukti pembelian, foto/video kondisi unit, dan penjelasan masalah
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">2.6 Pengiriman</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Kami menyediakan layanan <strong>pengiriman ke seluruh Indonesia</strong> via 
                  ekspedisi terpercaya (JNE, J&T, SiCepat, dll)
                </li>
                <li>
                  <strong>Biaya pengiriman</strong> ditanggung pembeli dan akan dihitung saat 
                  konfirmasi pesanan
                </li>
                <li>
                  Untuk area <strong>Pontianak dan sekitarnya</strong>, tersedia layanan 
                  <strong> COD (Cash on Delivery)</strong> atau antar langsung tanpa biaya tambahan
                </li>
                <li>
                  Estimasi pengiriman: 1-3 hari (Kalimantan Barat), 2-5 hari (Jawa), 3-7 hari (luar Jawa)
                </li>
                <li>
                  Kami akan mengemas produk dengan <strong>bubble wrap dan kardus tebal</strong> 
                  untuk keamanan maksimal
                </li>
                <li>
                  <strong>Wajib video unboxing:</strong> Untuk klaim kerusakan saat pengiriman, 
                  Anda harus menyertakan video unboxing dari awal paket dibuka
                </li>
                <li>
                  Kami <strong>tidak bertanggung jawab</strong> atas keterlambatan pengiriman yang 
                  disebabkan oleh ekspedisi atau force majeure
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trade-in Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Repeat className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Ketentuan Tukar Tambah (Trade-In)
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">3.1 Syarat Trade-In</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Laptop lama Anda harus <strong>masih berfungsi</strong> (bisa booting/menyala)
                </li>
                <li>
                  Kami menerima semua merk laptop: HP, Dell, Asus, Lenovo, Acer, Apple, MSI, dll
                </li>
                <li>
                  Laptop tidak dalam kondisi <strong>rusak parah</strong> (mati total, layar pecah, 
                  casing hancur)
                </li>
                <li>
                  Pastikan semua fitur keamanan (Find My Device, akun cloud) sudah dimatikan 
                  sebelum diserahkan
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">3.2 Proses Penilaian</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Estimasi online:</strong> Kirim foto dan spesifikasi laptop lama via 
                  WhatsApp untuk mendapatkan estimasi harga tukar tambah
                </li>
                <li>
                  <strong>Harga final:</strong> Harga trade-in final akan ditentukan setelah kami 
                  memeriksa kondisi fisik dan fungsional unit secara langsung
                </li>
                <li>
                  <strong>Faktor penilaian:</strong> Tahun produksi, spesifikasi, kondisi fisik, 
                  kondisi baterai, kelengkapan (charger, tas, box), dan permintaan pasar
                </li>
                <li>
                  Harga yang kami tawarkan adalah <strong>harga tukar tambah</strong>, bukan harga 
                  jual putus. Jika Anda ingin menjual tanpa tukar tambah, harga dapat berbeda
                </li>
                <li>
                  Anda berhak <strong>menolak penawaran</strong> kami. Jika ditolak, unit akan 
                  dikembalikan kepada Anda tanpa biaya
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">3.3 Data Pribadi</h3>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-5">
                <p className="text-foreground font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Penting - Backup Data Anda!
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    <strong>Backup semua data Anda</strong> sebelum menyerahkan laptop untuk trade-in
                  </li>
                  <li>
                    Kami akan melakukan <strong>format/reset</strong> pada semua laptop yang masuk
                  </li>
                  <li>
                    Kami <strong>tidak bertanggung jawab</strong> atas kehilangan data pribadi, 
                    foto, dokumen, atau file apapun
                  </li>
                  <li>
                    Pastikan semua akun cloud (iCloud, Google, Microsoft) sudah logout dan 
                    lakukan <strong>factory reset</strong> terlebih dahulu
                  </li>
                  <li>
                    Jangan lupa mencabut akun email, social media, dan aplikasi yang terhubung 
                    dengan perangkat
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">3.4 Transaksi Trade-In</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Setelah harga disepakati, Anda membayar <strong>selisih harga</strong> antara 
                  laptop baru dan nilai trade-in
                </li>
                <li>
                  Pembayaran selisih dapat dilakukan via <strong>cash, transfer, atau cicilan</strong>
                </li>
                <li>
                  <strong>Transaksi bersifat final:</strong> Setelah transaksi selesai, Anda 
                  tidak dapat membatalkan atau meminta laptop lama kembali
                </li>
                <li>
                  Kami akan memberikan <strong>bukti transaksi/kwitansi</strong> sebagai bukti sah
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service/Repair Terms */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Ketentuan Servis & Reparasi
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">4.1 Jenis Layanan</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Kami menyediakan berbagai layanan servis laptop, termasuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Perbaikan hardware (ganti LCD, keyboard, baterai, hardisk, RAM, dll)</li>
                <li>Perbaikan software (install ulang OS, troubleshooting, hapus virus)</li>
                <li>Upgrade hardware (SSD, RAM, HDD)</li>
                <li>Pembersihan dan perawatan (cleaning, thermal paste)</li>
                <li>Konsultasi teknis</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">4.2 Proses Servis</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Konsultasi gratis:</strong> Hubungi kami via WhatsApp untuk menjelaskan 
                  masalah Anda. Kami akan memberikan estimasi biaya dan waktu pengerjaan
                </li>
                <li>
                  <strong>Diagnosa:</strong> Unit akan didiagnosa terlebih dahulu untuk memastikan 
                  kerusakan dan biaya perbaikan. Biaya diagnosa <strong>GRATIS</strong> jika Anda 
                  melanjutkan servis, <strong>Rp 50.000</strong> jika tidak jadi servis
                </li>
                <li>
                  <strong>Persetujuan:</strong> Kami akan menghubungi Anda untuk approval sebelum 
                  melakukan perbaikan dan menyampaikan biaya final
                </li>
                <li>
                  <strong>Pengerjaan:</strong> Estimasi waktu pengerjaan 1-7 hari kerja tergantung 
                  tingkat kerusakan dan ketersediaan sparepart
                </li>
                <li>
                  <strong>Pembayaran:</strong> Pembayaran dilakukan setelah unit selesai diperbaiki 
                  dan sudah dicek berfungsi normal
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">4.3 Biaya Servis</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Biaya jasa:</strong> Mulai dari Rp 50.000 - Rp 500.000 tergantung 
                  jenis perbaikan
                </li>
                <li>
                  <strong>Biaya sparepart:</strong> Harga sparepart bervariasi tergantung merk, 
                  tipe, dan ketersediaan. Kami akan informasikan sebelum pengerjaan
                </li>
                <li>
                  <strong>Harga dapat berubah:</strong> Jika ditemukan kerusakan tambahan saat 
                  pengerjaan, kami akan menghubungi Anda untuk approval biaya tambahan
                </li>
                <li>
                  Biaya yang tercantum di situs web bersifat <strong>estimasi dan dapat berubah</strong> 
                  sesuai kondisi aktual
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">4.4 Garansi Servis</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Garansi sparepart baru:</strong> 1-3 bulan (tergantung jenis komponen)
                </li>
                <li>
                  <strong>Garansi jasa:</strong> 7-14 hari untuk masalah yang sama
                </li>
                <li>
                  <strong>Tidak bergaransi:</strong> Kerusakan akibat benturan, air, tegangan 
                  listrik, atau pemakaian yang tidak wajar setelah servis
                </li>
                <li>
                  Garansi <strong>hangus</strong> jika unit dibongkar atau diperbaiki oleh pihak lain
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">4.5 Tanggung Jawab Kami</h3>
              <div className="bg-secondary/50 border border-border rounded-lg p-5">
                <p className="text-foreground font-semibold mb-2">Kami Bertanggung Jawab Atas:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
                  <li>Keamanan unit Anda selama di tempat kami</li>
                  <li>Kerusakan yang timbul akibat kesalahan teknisi kami</li>
                  <li>Kualitas sparepart yang kami gunakan</li>
                </ul>
                <p className="text-foreground font-semibold mb-2">Kami TIDAK Bertanggung Jawab Atas:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Kehilangan data (harap backup sebelum servis!)</li>
                  <li>Kerusakan yang sudah ada sebelumnya dan tidak dilaporkan</li>
                  <li>Unit yang tidak dapat diperbaiki (kerusakan fatal)</li>
                  <li>Keterlambatan servis akibat sparepart tidak tersedia atau force majeure</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">4.6 Unit Tidak Diambil</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  Unit yang sudah selesai diperbaiki harus <strong>diambil dalam 30 hari</strong>
                </li>
                <li>
                  Jika tidak diambil dalam 30 hari, kami akan menghubungi Anda via WhatsApp/telepon
                </li>
                <li>
                  Unit yang tidak diambil dalam <strong>90 hari</strong> akan dianggap sebagai 
                  <strong> barang titipan/donasi</strong> dan menjadi hak milik kami untuk dijual
                </li>
                <li>
                  Kami tidak bertanggung jawab atas kehilangan atau kerusakan unit yang tidak 
                  diambil lebih dari 90 hari
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Hak Kekayaan Intelektual
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Semua konten di situs web ini, termasuk tetapi tidak terbatas pada teks, grafik, logo, 
              ikon, gambar, klip audio, unduhan digital, kompilasi data, dan perangkat lunak, adalah 
              milik <strong>{COMPANY_INFO.name}</strong> atau pemberi lisensinya dan dilindungi oleh 
              undang-undang hak cipta Indonesia dan internasional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Anda <strong>tidak diperbolehkan</strong> untuk:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Menyalin, memodifikasi, atau mendistribusikan konten situs web tanpa izin tertulis</li>
              <li>Menggunakan logo, nama, atau merk dagang kami tanpa izin</li>
              <li>Menggunakan robot, spider, atau alat otomatis untuk mengakses situs web kami</li>
              <li>Melakukan reverse engineering atau mencoba mengakses source code situs web</li>
            </ul>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Batasan Tanggung Jawab
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Sejauh diizinkan oleh hukum yang berlaku, <strong>{COMPANY_INFO.name}</strong> tidak 
              bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau 
              konsekuensial yang timbul dari:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Penggunaan atau ketidakmampuan menggunakan layanan kami</li>
              <li>Keterlambatan atau kesalahan dalam informasi yang ditampilkan di situs web</li>
              <li>Virus atau malware yang mungkin menginfeksi perangkat Anda</li>
              <li>Kehilangan data akibat servis atau perbaikan (harap selalu backup!)</li>
              <li>Force majeure (bencana alam, perang, kebakaran, pandemi, dll)</li>
              <li>Tindakan pihak ketiga (ekspedisi, bank, lembaga pembiayaan)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Tanggung jawab maksimal kami terbatas pada <strong>nilai transaksi yang dibayarkan</strong> 
              untuk produk atau layanan yang bersangkutan.
            </p>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Penyelesaian Sengketa
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Jika terjadi perselisihan atau sengketa antara Anda dan <strong>{COMPANY_INFO.name}</strong>, 
              kami mendorong Anda untuk menghubungi kami terlebih dahulu untuk mencari solusi secara 
              kekeluargaan melalui WhatsApp atau kunjungan langsung ke toko kami.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Jika penyelesaian secara kekeluargaan tidak tercapai, kedua belah pihak setuju bahwa 
              sengketa akan diselesaikan melalui:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
              <li>
                <strong>Mediasi:</strong> Melalui lembaga mediasi yang disepakati bersama di 
                Pontianak, Kalimantan Barat
              </li>
              <li>
                <strong>Pengadilan:</strong> Jika mediasi gagal, sengketa akan diselesaikan melalui 
                Pengadilan Negeri Pontianak dengan hukum Indonesia yang berlaku
              </li>
            </ol>
          </div>
        </section>

        {/* User Conduct */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Perilaku Pengguna
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed mb-3">
              Anda setuju untuk <strong>tidak</strong> menggunakan situs web atau layanan kami untuk:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Melanggar hukum atau peraturan yang berlaku di Indonesia</li>
              <li>Melakukan penipuan atau memberikan informasi palsu</li>
              <li>Mengirim spam, malware, virus, atau konten berbahaya lainnya</li>
              <li>Mengganggu atau merusak infrastruktur situs web kami</li>
              <li>Mengakses akun atau sistem kami tanpa izin</li>
              <li>Melecehkan, mengancam, atau menyalahgunakan staf atau pelanggan lain</li>
              <li>Memposting ulasan palsu atau menyesatkan</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Kami berhak untuk <strong>menolak layanan</strong> kepada siapa pun yang melanggar 
              ketentuan ini, tanpa memberikan alasan atau kompensasi.
            </p>
          </div>
        </section>

        {/* Severability */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Keterpisahan
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Jika ada ketentuan dalam Syarat dan Ketentuan ini yang dinyatakan tidak sah, ilegal, 
            atau tidak dapat dilaksanakan oleh pengadilan yang berwenang, ketentuan lainnya akan 
            tetap berlaku dan berkekuatan hukum penuh.
          </p>
        </section>

        {/* Entire Agreement */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Keseluruhan Perjanjian
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Syarat dan Ketentuan ini, bersama dengan <Link to="/privacy-policy" className="text-primary hover:underline">Kebijakan Privasi</Link> kami, 
            merupakan keseluruhan perjanjian antara Anda dan <strong>{COMPANY_INFO.name}</strong> 
            dan menggantikan semua perjanjian sebelumnya (baik tertulis maupun lisan) terkait dengan 
            penggunaan situs web dan layanan kami.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Hubungi Kami
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, atau memerlukan 
              klarifikasi sebelum melakukan transaksi, jangan ragu untuk menghubungi kami:
            </p>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">Nama Perusahaan:</strong>
                <br />
                {COMPANY_INFO.name}
              </div>
              <div>
                <strong className="text-foreground">Alamat Toko:</strong>
                <br />
                {COMPANY_INFO.fullAddress}
              </div>
              <div>
                <strong className="text-foreground">WhatsApp/Telepon:</strong>
                <br />
                <a 
                  href={`https://wa.me/6281234567890`} 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-3456-7890 (Owner)
                </a>
                <br />
                <a 
                  href={`https://wa.me/6281234567891`} 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-3456-7891 (Sales)
                </a>
                <br />
                <a 
                  href={`https://wa.me/6281234567892`} 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-3456-7892 (Service)
                </a>
              </div>
              <div>
                <strong className="text-foreground">Jam Operasional:</strong>
                <br />
                {COMPANY_INFO.operatingHours.weekdays}
                <br />
                {COMPANY_INFO.operatingHours.weekend}
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

        {/* Acknowledgment */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-foreground font-semibold mb-3">📋 Pernyataan Persetujuan</p>
            <p className="text-muted-foreground leading-relaxed">
              Dengan menggunakan situs web ini atau melakukan transaksi dengan kami (baik pembelian, 
              trade-in, atau servis), Anda menyatakan bahwa:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
              <li>Anda telah membaca dan memahami Syarat dan Ketentuan ini</li>
              <li>Anda setuju untuk terikat oleh semua ketentuan yang tercantum</li>
              <li>Anda berusia minimal 17 tahun atau memiliki izin dari orang tua/wali</li>
              <li>Informasi yang Anda berikan adalah akurat dan benar</li>
            </ul>
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
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link 
              to="/terms-of-service" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Syarat dan Ketentuan
            </Link>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
