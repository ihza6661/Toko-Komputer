import { ShieldCheck, UserCheck, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function VerificationGuide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cara Memverifikasi Admin Asli
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lindungi diri Anda dari penipuan dengan mengikuti panduan verifikasi di bawah ini
          </p>
        </div>

        {/* Verification Steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Step 1 */}
          <Card className="border-2 border-green-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-green-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Cek Nomor WhatsApp
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Pastikan nomor yang menghubungi Anda <strong>sama persis</strong> dengan nomor yang tertera di banner biru di atas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Cek profil WhatsApp—admin resmi menggunakan nama bisnis <strong>"Database Computer"</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Jika ragu, <strong>screenshot</strong> chat tersebut dan tanyakan langsung ke nomor resmi kami
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-2 border-blue-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Verifikasi Informasi Rekening
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>JANGAN PERNAH</strong> transfer ke rekening yang tidak tertera di website ini
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Jika admin meminta transfer ke rekening lain dengan alasan apapun, <strong>tolak dan laporkan</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Kami hanya menggunakan <strong>satu rekening resmi</strong> yang selalu update di website ini
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-2 border-purple-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-purple-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Hindari Link Mencurigakan
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>Jangan klik</strong> link dari akun Instagram/WhatsApp yang tidak terverifikasi
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Website resmi kami hanya <strong>domain ini</strong>—cek URL di address bar browser
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Jika ada website dengan nama mirip tapi domain berbeda, itu <strong>bukan kami</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-2 border-orange-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-orange-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <CardTitle className="text-xl text-gray-900">
                  Jika Ragu, Tanya Langsung
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <strong>Jangan malu</strong> untuk bertanya—lebih baik ragu daripada tertipu
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Hubungi nomor resmi di banner atas untuk konfirmasi <strong>sebelum transfer</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Kami siap melayani pertanyaan verifikasi Anda <strong>24/7</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Warning Signs */}
        <Card className="border-2 border-red-300 bg-red-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-red-600" />
              Tanda-tanda Penipuan (RED FLAGS)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Nomor Berbeda</h4>
                  <p className="text-sm text-gray-700">
                    Admin menggunakan nomor WhatsApp yang tidak tertera di website ini
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Rekening Atas Nama Pribadi</h4>
                  <p className="text-sm text-gray-700">
                    Meminta transfer ke rekening atas nama perorangan (bukan nama toko)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Terburu-buru</h4>
                  <p className="text-sm text-gray-700">
                    Memaksa Anda untuk transfer segera dengan alasan stok terbatas/promo habis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Harga Terlalu Murah</h4>
                  <p className="text-sm text-gray-700">
                    Menawarkan harga jauh di bawah pasaran (too good to be true)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Tidak Profesional</h4>
                  <p className="text-sm text-gray-700">
                    Bahasa tidak profesional, typo banyak, atau tata bahasa buruk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Link Aneh</h4>
                  <p className="text-sm text-gray-700">
                    Mengirim link ke website dengan domain mencurigakan (bukan domain resmi kami)
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="mt-6 bg-white border-2 border-red-400 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <UserCheck className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Jika Anda Menemukan Salah Satu Tanda di Atas:
                  </h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li><strong>JANGAN transfer</strong> dulu</li>
                    <li><strong>Screenshot</strong> percakapan tersebut</li>
                    <li><strong>Hubungi nomor resmi</strong> kami di banner atas</li>
                    <li><strong>Laporkan</strong> akun tersebut ke Instagram/WhatsApp</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
            <ShieldCheck className="w-5 h-5" />
            <span>Keamanan Anda adalah Prioritas Kami</span>
          </div>
        </div>
      </div>
    </section>
  );
}
