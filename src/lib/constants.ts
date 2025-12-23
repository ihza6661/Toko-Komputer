// Database Computer Contact Configuration
// Multiple WhatsApp numbers for smart routing
export const WHATSAPP_NUMBERS = {
  owner: "628115757717",           // Admin 1 (Shift Pagi) - 0811-5757-717
  sales: "628115757717",           // Jual-Beli (Sales inquiries) - Admin 1
  service: "628115757710",         // Service & Garansi - 0811-5757-710
  general: "628115757716",         // Admin 2 (Shift Siang) - 0811-5757-716
};

// Backward compatibility - defaults to owner/general contact
export const WHATSAPP_NUMBER = WHATSAPP_NUMBERS.general;

export const COMPANY_INFO = {
  name: "Database Computer",
  tagline: "PC, Laptop, Smartphone, iPhone Garansi Resmi",
  foundedYear: 2015,
  yearsInBusiness: new Date().getFullYear() - 2015,
  address: "Jl. Hijas No.5-7, Pontianak Selatan",
  fullAddress: "Jl. Hijas No.5-7, Benua Melayu Darat, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78122",
  plusCode: "X87W+PC Benua Melayu Darat, Pontianak",
  coordinates: {
    lat: -0.0356966, // Accurate from Google Maps
    lng: 109.3460644,
  },
  instagram: "https://instagram.com/database.id_official",
  instagramHandle: "@database.id_official",
  linktree: "https://linktr.ee/database.id",
  googleMapsUrl: "https://maps.app.goo.gl/uznpPegUfVh3sXZ56",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817!2d109.3460644!3d-0.0356966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59b331cd703d%3A0x65fc33c2377034ef!2sDatabase%20Computer%20Pontianak!5e0!3m2!1sen!2sid!4v1735000000000!5m2!1sen!2sid",
  operatingHours: {
    // Individual day schedules (for programmatic access)
    monday: { open: "08:00", close: "20:00" },
    tuesday: { open: "08:00", close: "20:00" },
    wednesday: { open: "08:00", close: "20:00" },
    thursday: { open: "08:00", close: "20:00" },
    friday: { open: "08:00", close: "20:00" },
    saturday: { open: "08:00", close: "18:00" },
    sunday: { open: "09:00", close: "18:00" },
    // Display strings (for UI)
    display: {
      weekdays: "Senin - Jumat: 08:00 - 20:00",
      saturday: "Sabtu: 08:00 - 18:00",
      sunday: "Minggu: 09:00 - 18:00",
    },
    // Shift information
    shifts: {
      weekday: {
        morning: "08:00 - 14:00",
        afternoon: "14:00 - 20:00",
      },
      saturday: {
        morning: "08:00 - 13:00",
        afternoon: "13:00 - 18:00",
      },
      sunday: {
        fullday: "09:00 - 18:00 (Admin Siang)",
      },
    },
  },
  // Marketplace credentials for Database Computer
  marketplace: {
    tokopedia: {
      status: "Gold Merchant",
      rating: "4.8",
      url: "https://www.tokopedia.com/databaseid",
    },
    shopee: {
      status: "Shopee Mall",
      rating: "4.9",
      url: "https://shopee.co.id/databaseid",
    },
  },
};

// Official Contact Information for Security Banner
export const CONTACT_INFO = {
  whatsapp: "+62 811 5757 717",
  phone: "+62 811 5757 717",
  email: "info@databasecomputer.id", // Email not publicly listed, using generic
  bankAccount: {
    bank: "BCA",
    accountName: "CV. DATA BASIS TECHNOLOGY",
    accountNumber: "029 213 6666",
    note: "Tidak pakai Virtual Account", // Important: No VA
  },
};
