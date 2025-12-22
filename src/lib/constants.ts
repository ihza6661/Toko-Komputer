// Database Computer Contact Configuration
// Multiple WhatsApp numbers for smart routing
export const WHATSAPP_NUMBERS = {
  owner: "628115757716",           // Primary/Owner - 0811-5757-716
  sales: "628115757716",           // Jual-Beli (Sales inquiries) - Same number
  service: "628115757716",         // Service & Konsultasi - Same number
  general: "628115757716",         // Default to owner
};

// Backward compatibility - defaults to owner/general contact
export const WHATSAPP_NUMBER = WHATSAPP_NUMBERS.general;

export const COMPANY_INFO = {
  name: "Database Computer",
  tagline: "PC, Laptop, Smartphone, iPhone Garansi Resmi",
  foundedYear: 2015,
  yearsInBusiness: new Date().getFullYear() - 2015,
  address: "Jalan Hijas No. 5-7, Pontianak",
  fullAddress: "Jalan Hijas No. 5-7, Pontianak, Kalimantan Barat, Indonesia",
  coordinates: {
    lat: -0.0263, // Update when exact location known
    lng: 109.3425,
  },
  instagram: "https://instagram.com/database.id_official",
  instagramHandle: "@database.id_official",
  linktree: "https://linktr.ee/database.id",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jalan+Hijas+No.+5-7+Pontianak",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d109.3425!3d-0.0263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDEnMzQuNyJTIDEwOcKwMjAnMzMuMCJF!5e0!3m2!1sen!2sid!4v1735000000000!5m2!1sen!2sid",
  operatingHours: {
    weekdays: "Senin - Sabtu: 09:00 - 20:00", // To be confirmed
    weekend: "Minggu: Tutup / By Appointment", // To be confirmed
  },
  // Marketplace credentials for Database Computer
  marketplace: {
    tokopedia: {
      status: "Gold Merchant",
      rating: "4.8", // PLACEHOLDER - Update with actual rating
      url: "https://tokopedia.com/database-computer", // PLACEHOLDER
    },
    shopee: {
      status: "Shopee Mall",
      rating: "4.9", // PLACEHOLDER - Update with actual rating
      url: "https://shopee.co.id/database.computer", // PLACEHOLDER
    },
  },
};

// Official Contact Information for Security Banner
export const CONTACT_INFO = {
  whatsapp: "+62 811 5757 716",
  phone: "+62 811 5757 716",
  email: "info@databasecomputer.id", // Email not publicly listed, using generic
  bankAccount: {
    bank: "BCA",
    accountName: "CV. DATA BASIS TECHNOLOGY",
    accountNumber: "029 213 6666",
    note: "Tidak pakai Virtual Account", // Important: No VA
  },
};
