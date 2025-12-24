import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCcw, Package, Clock, CheckCircle2, XCircle, AlertTriangle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

const RefundPolicy = () => {
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
            <RefreshCcw className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Kebijakan Pengembalian & Penukaran
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
            Di <strong className="text-foreground">{COMPANY_INFO.name}</strong>, kepuasan pelanggan 
            adalah prioritas utama kami. Kami memahami bahwa terkadang produk yang dibeli mungkin 
            tidak sesuai dengan harapan atau mengalami masalah. Kebijakan ini menjelaskan hak dan 
            prosedur pengembalian serta penukaran produk.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
            <p className="text-sm text-foreground">
              <strong>📋 Catatan Penting:</strong> Kebijakan ini berlaku untuk semua pembelian laptop, 
              komponen, dan aksesoris dari {COMPANY_INFO.name}. Untuk layanan servis dan reparasi, 
              mohon baca <Link to="/terms-of-service" className="text-primary hover:underline">Syarat dan Ketentuan Layanan</Link>.
            </p>
          </div>
        </section>

        {/* Refund Period */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Periode Pengembalian
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                Laptop & Komputer
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>7 hari</strong> sejak tanggal pembelian untuk produk baru</li>
                <li><strong>3 hari</strong> sejak tanggal pembelian untuk produk refurbished/second</li>
                <li>Pengembalian hanya berlaku untuk cacat produksi atau kerusakan hardware yang terbukti</li>
                <li>Produk harus dalam kondisi asli dengan semua aksesoris dan kemasan lengkap</li>
              </ul>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                Komponen & Aksesoris
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>7 hari</strong> sejak tanggal pembelian untuk semua jenis komponen</li>
                <li>Harus dalam kondisi baru/belum digunakan dengan segel masih utuh</li>
                <li>Kemasan asli tidak boleh rusak atau dibuka (khusus untuk aksesoris tertentu)</li>
                <li>Untuk komponen yang sudah dipasang, pengembalian hanya berlaku jika terbukti DOA (Dead on Arrival)</li>
              </ul>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-5">
              <p className="text-sm text-foreground flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Penting:</strong> Periode pengembalian dihitung berdasarkan tanggal pembelian 
                  yang tertera pada nota/invoice, bukan tanggal pengiriman untuk pembelian online. 
                  Proses pengembalian harus dimulai dalam periode yang ditentukan.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Refund Conditions */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Syarat Pengembalian
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Untuk mengajukan pengembalian atau penukaran, produk harus memenuhi syarat berikut:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Kondisi Fisik:</strong> Produk tidak boleh 
                memiliki kerusakan fisik akibat benturan, jatuh, tergores, atau penyalahgunaan lainnya
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Kelengkapan:</strong> Semua aksesoris, kabel, 
                charger, dus, manual, dan kartu garansi harus dikembalikan bersama produk
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Bukti Pembelian:</strong> Nota/invoice asli atau 
                digital harus disertakan sebagai bukti transaksi
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Data Pribadi:</strong> Semua data pribadi, akun, 
                dan software yang diinstal oleh pembeli harus dihapus sebelum pengembalian
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Kerusakan Valid:</strong> Untuk klaim kerusakan, 
                produk akan diperiksa oleh teknisi kami untuk memverifikasi bahwa kerusakan bukan 
                akibat penyalahgunaan
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Stiker Garansi:</strong> Stiker garansi 
                (jika ada) tidak boleh rusak, terkelupas, atau dirusak
              </p>
            </div>
          </div>
        </section>

        {/* Non-Refundable Items */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Produk yang Tidak Dapat Dikembalikan
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Beberapa jenis produk tidak dapat dikembalikan atau ditukar karena alasan kesehatan, 
            keamanan, atau sifat produk:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Produk dengan kerusakan fisik akibat kelalaian atau penyalahgunaan pengguna 
                (jatuh, terkena air, dimodifikasi, dll.)
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Produk yang telah dibongkar atau dimodifikasi oleh pihak ketiga tanpa izin dari kami
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Software, lisensi digital, atau produk yang telah diaktivasi/digunakan
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Aksesoris yang segelnya telah dibuka atau rusak (earphone, mouse, keyboard, dll.)
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Produk yang dikembalikan setelah periode pengembalian berakhir
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Produk dengan stiker garansi yang rusak atau hilang
              </p>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Layanan servis, instalasi software, atau jasa konsultasi yang telah dilaksanakan
              </p>
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Package className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Prosedur Pengembalian
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Ikuti langkah-langkah berikut untuk mengajukan pengembalian atau penukaran produk:
          </p>

          <div className="space-y-4">
            <div className="bg-secondary/30 border border-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Hubungi Kami</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Hubungi tim customer service kami melalui WhatsApp di nomor{" "}
                    <a 
                      href={`https://wa.me/6281234567890`} 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      0812-3456-7890
                    </a>{" "}
                    untuk menyampaikan keluhan dan alasan pengembalian.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Siapkan informasi: nomor invoice, tanggal pembelian, nama produk, dan deskripsi masalah.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Verifikasi & Evaluasi</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Tim kami akan memverifikasi pembelian Anda dan mengevaluasi kelayakan 
                    pengembalian. Anda mungkin diminta untuk mengirimkan foto atau video produk 
                    untuk mempercepat proses evaluasi.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Proses verifikasi biasanya memakan waktu 1-2 hari kerja.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Kirim atau Bawa Produk</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Setelah pengembalian disetujui, bawa produk langsung ke toko kami atau 
                    kirim melalui jasa ekspedisi terpercaya. Pastikan produk dikemas dengan 
                    aman untuk menghindari kerusakan selama pengiriman.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Alamat:</strong> {COMPANY_INFO.fullAddress}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Biaya pengiriman untuk pengembalian ditanggung oleh pembeli, kecuali 
                    produk terbukti cacat produksi atau salah kirim.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Inspeksi Produk</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Teknisi kami akan melakukan inspeksi menyeluruh terhadap produk yang 
                    dikembalikan untuk memverifikasi kondisi dan alasan pengembalian. 
                    Proses inspeksi memakan waktu 2-5 hari kerja tergantung kompleksitas masalah.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Pengembalian Dana atau Penukaran</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Jika pengembalian disetujui, Anda dapat memilih:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
                    <li><strong>Pengembalian dana penuh</strong> (melalui transfer bank atau tunai)</li>
                    <li><strong>Penukaran produk</strong> dengan tipe yang sama atau berbeda (disesuaikan nilai)</li>
                    <li><strong>Store credit</strong> untuk pembelian di masa mendatang (bonus 5% dari nilai produk)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Methods */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <RefreshCcw className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Metode & Waktu Pengembalian Dana
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Metode Pengembalian Dana</h3>
              <div className="space-y-3">
                <div className="bg-secondary/30 border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Transfer Bank</h4>
                  <p className="text-muted-foreground text-sm">
                    Pengembalian dana akan ditransfer ke rekening bank yang Anda berikan. 
                    Proses transfer biasanya memakan waktu 1-3 hari kerja setelah persetujuan.
                  </p>
                </div>

                <div className="bg-secondary/30 border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Tunai (untuk transaksi offline)</h4>
                  <p className="text-muted-foreground text-sm">
                    Jika pembelian dilakukan secara tunai di toko, Anda dapat menerima 
                    pengembalian dana secara tunai langsung di toko kami.
                  </p>
                </div>

                <div className="bg-secondary/30 border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">E-Wallet / QRIS</h4>
                  <p className="text-muted-foreground text-sm">
                    Untuk pembayaran yang dilakukan melalui e-wallet atau QRIS, pengembalian 
                    dana akan dikembalikan melalui transfer bank.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Estimasi Waktu Pengembalian</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Verifikasi awal: <strong>1-2 hari kerja</strong></li>
                <li>Inspeksi produk: <strong>2-5 hari kerja</strong></li>
                <li>Proses pengembalian dana: <strong>1-3 hari kerja</strong> setelah persetujuan</li>
                <li><strong>Total estimasi: 4-10 hari kerja</strong> dari tanggal produk diterima oleh kami</li>
              </ul>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-5">
              <p className="text-sm text-foreground">
                <AlertTriangle className="h-5 w-5 text-warning inline mr-2" />
                <strong>Catatan:</strong> Jika produk yang dikembalikan tidak memenuhi syarat 
                atau ditemukan kerusakan akibat penyalahgunaan, produk akan dikembalikan kepada 
                pembeli dan pengembalian dana tidak dapat diproses. Biaya pengiriman kembali 
                menjadi tanggung jawab pembeli.
              </p>
            </div>
          </div>
        </section>

        {/* Exchange Policy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <RefreshCcw className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Kebijakan Penukaran Produk
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Penukaran produk dapat dilakukan jika:
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Produk yang Anda terima tidak sesuai dengan pesanan (salah tipe, warna, atau spesifikasi)
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Produk mengalami cacat produksi atau kerusakan hardware dalam periode pengembalian
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Anda ingin menukar dengan produk lain dengan nilai yang sama atau lebih tinggi 
                (selisih harga harus dilunasi)
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Prosedur Penukaran</h3>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
              <li>Hubungi customer service untuk mengajukan penukaran</li>
              <li>Produk akan diperiksa untuk memverifikasi kondisi dan kelayakan penukaran</li>
              <li>Pilih produk pengganti yang tersedia (jika nilai lebih tinggi, bayar selisihnya)</li>
              <li>Jika nilai produk pengganti lebih rendah, selisih akan dikembalikan sebagai store credit atau diskon pembelian berikutnya</li>
              <li>Produk pengganti akan dikirim atau dapat diambil langsung di toko</li>
            </ol>
          </div>
        </section>

        {/* Damaged Products */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Produk Rusak atau Cacat
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Jika Anda menerima produk yang rusak, cacat, atau tidak berfungsi dengan baik:
          </p>

          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Dead on Arrival (DOA)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Jika produk sama sekali tidak berfungsi saat pertama kali dinyalakan (DOA), 
                segera hubungi kami dalam <strong>24 jam</strong> setelah pembelian.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Produk DOA akan diganti dengan unit baru tanpa biaya tambahan</li>
                <li>Kami akan menanggung biaya pengiriman untuk pengiriman produk pengganti</li>
                <li>Proses penggantian DOA diprioritaskan (1-3 hari kerja)</li>
              </ul>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Cacat Produksi
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Cacat produksi adalah kerusakan yang disebabkan oleh kesalahan manufaktur, bukan 
                akibat penggunaan. Contoh: layar dead pixel, keyboard macet, baterai tidak terisi, dll.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Hubungi kami dalam periode pengembalian (7 hari untuk baru, 3 hari untuk second)</li>
                <li>Produk akan diperiksa oleh teknisi untuk memverifikasi cacat produksi</li>
                <li>Jika terbukti cacat produksi, produk akan diganti atau diperbaiki tanpa biaya</li>
                <li>Anda dapat memilih pengembalian dana penuh sebagai alternatif</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warranty vs Refund */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Package className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Perbedaan Garansi dan Pengembalian
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Kebijakan Pengembalian</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm ml-4">
                <li>Berlaku dalam 3-7 hari pertama</li>
                <li>Untuk produk yang tidak sesuai atau mengalami masalah sejak awal</li>
                <li>Pengembalian dana penuh atau penukaran produk</li>
                <li>Produk harus dalam kondisi seperti baru</li>
              </ul>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Garansi Produk</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm ml-4">
                <li>Berlaku setelah periode pengembalian (biasanya 3-12 bulan)</li>
                <li>Untuk kerusakan yang terjadi setelah penggunaan normal</li>
                <li>Perbaikan atau penggantian komponen yang rusak</li>
                <li>Tidak termasuk pengembalian dana</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-6">
            <p className="text-sm text-foreground">
              Untuk informasi lengkap tentang garansi produk, baca{" "}
              <Link to="/terms-of-service" className="text-primary hover:underline">
                Syarat dan Ketentuan Layanan
              </Link>.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Hubungi Kami untuk Pengembalian
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan tentang pengembalian atau ingin mengajukan 
              pengembalian/penukaran produk, silakan hubungi kami:
            </p>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">WhatsApp Customer Service:</strong>
                <br />
                <a 
                  href={`https://wa.me/6281234567890`} 
                  className="text-primary hover:underline text-lg font-semibold"
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
                <strong className="text-foreground">Jam Operasional:</strong>
                <br />
                {COMPANY_INFO.operatingHours.display.weekdays}
                <br />
                {COMPANY_INFO.operatingHours.display.weekend}
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
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RefundPolicy;
