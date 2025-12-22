// Toko Komputer Contact Configuration
// Multiple WhatsApp numbers for smart routing
export const WHATSAPP_NUMBERS = {
  owner: "6281234567890",           // Primary/Owner
  sales: "6281234567891",           // Jual-Beli (Sales inquiries)
  service: "6281234567892",         // Service & Konsultasi
  general: "6281234567890",         // Default to owner
};

// Backward compatibility - defaults to owner/general contact
export const WHATSAPP_NUMBER = WHATSAPP_NUMBERS.general;

export const COMPANY_INFO = {
  name: "Toko Komputer",
  tagline: "Sale & Service | Since 2014",
  foundedYear: 2014,
  yearsInBusiness: new Date().getFullYear() - 2014,
  address: "Jl. Gajah Mada No. 88, Pontianak Barat",
  fullAddress: "Jl. Gajah Mada No. 88, Pontianak Barat, Kalimantan Barat 78113, Indonesia",
  coordinates: {
    lat: -0.0647,
    lng: 109.3350,
  },
  instagram: "https://instagram.com/tokolaptop_pontianak",
  instagramHandle: "@tokolaptop_pontianak",
  googleMapsUrl: "https://www.google.com/maps/place/-0.0647,109.3350/@-0.0647,109.3350,17z",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d109.3350!3d-0.0647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDMnNTMuMCJTIDEwOcKwMjAnMDYuMCJF!5e0!3m2!1sen!2sid!4v1735000000000!5m2!1sen!2sid",
  operatingHours: {
    weekdays: "Senin - Sabtu: 09:00 - 21:00",
    weekend: "Minggu: 10:00 - 18:00",
  },
};
