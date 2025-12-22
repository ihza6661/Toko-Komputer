import { Shield, Lock, Award, CheckCircle } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Mengapa Berbelanja di Database Computer?
          </h3>
          <p className="text-gray-600">
            Kepercayaan dan keamanan Anda adalah prioritas utama kami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Badge 1: Verified Business */}
          <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
              Verified Business
            </h4>
            <p className="text-xs text-gray-600">
              Toko terpercaya & terverifikasi
            </p>
          </div>

          {/* Badge 2: Secure Payment */}
          <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
              Secure Payment
            </h4>
            <p className="text-xs text-gray-600">
              Transaksi aman & terlindungi
            </p>
          </div>

          {/* Badge 3: Trusted Since [Year] */}
          <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
              Terpercaya
            </h4>
            <p className="text-xs text-gray-600">
              Melayani ribuan pelanggan
            </p>
          </div>

          {/* Badge 4: Fraud Protection */}
          <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
              Anti-Fraud System
            </h4>
            <p className="text-xs text-gray-600">
              Sistem verifikasi kontak resmi
            </p>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Indicator 1 */}
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">100% Original</p>
              <p className="text-xs text-gray-600">Produk asli bergaransi resmi</p>
            </div>
          </div>

          {/* Indicator 2 */}
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Fast Response</p>
              <p className="text-xs text-gray-600">Respon cepat via WhatsApp</p>
            </div>
          </div>

          {/* Indicator 3 */}
          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">After Sales</p>
              <p className="text-xs text-gray-600">Layanan purna jual terbaik</p>
            </div>
          </div>
        </div>

        {/* SSL Badge (Optional - shows HTTPS security) */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-300">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-gray-700">
              Website ini dilindungi dengan enkripsi SSL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
