// Database Computer Contact Configuration
// Multiple WhatsApp numbers for smart routing
export const WHATSAPP_NUMBERS = {
  owner: "6281234567890",           // Primary/Owner - PLACEHOLDER
  sales: "6281234567891",           // Jual-Beli (Sales inquiries) - PLACEHOLDER
  service: "6281234567892",         // Service & Konsultasi - PLACEHOLDER
  general: "6281234567890",         // Default to owner - PLACEHOLDER
};

// Backward compatibility - defaults to owner/general contact
export const WHATSAPP_NUMBER = WHATSAPP_NUMBERS.general;

export const COMPANY_INFO = {
  name: "Database Computer",
  tagline: "Official Store | Gold Merchant",
  foundedYear: 2015, // PLACEHOLDER - Update manually when confirmed
  yearsInBusiness: new Date().getFullYear() - 2015,
  address: "Pontianak, Kalimantan Barat", // PLACEHOLDER - Update with actual address
  fullAddress: "Pontianak, Kalimantan Barat, Indonesia", // PLACEHOLDER - Update with full address
  coordinates: {
    lat: -0.0263, // PLACEHOLDER - Pontianak city center coordinates
    lng: 109.3425,
  },
  instagram: "https://instagram.com/database.id_official",
  instagramHandle: "@database.id_official",
  googleMapsUrl: "https://www.google.com/maps/place/-0.0263,109.3425/@-0.0263,109.3425,17z", // PLACEHOLDER
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d109.3425!3d-0.0263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDEnMzQuNyJTIDEwOcKwMjAnMzMuMCJF!5e0!3m2!1sen!2sid!4v1735000000000!5m2!1sen!2sid", // PLACEHOLDER
  operatingHours: {
    weekdays: "Senin - Sabtu: 09:00 - 20:00", // PLACEHOLDER - Update with actual hours
    weekend: "Minggu: 10:00 - 18:00", // PLACEHOLDER
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
  whatsapp: "+62 821 1176 0889", // PLACEHOLDER - Update with actual number
  phone: "+62 821 1176 0889", // PLACEHOLDER - Update with actual number
  email: "info@databasecomputer.id", // PLACEHOLDER - Update with actual email
  bankAccount: {
    bank: "BCA", // PLACEHOLDER - Update with actual bank
    accountName: "Database Computer", // PLACEHOLDER - Update with actual account name
    accountNumber: "1234567890", // PLACEHOLDER - Update with actual account number
  },
};
