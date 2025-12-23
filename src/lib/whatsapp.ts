import { WHATSAPP_NUMBERS } from "./constants";

export type WhatsAppMessageType = 
  | "general"
  | "budget_1_3"
  | "budget_4_7"
  | "budget_7_10"
  | "gaming"
  | "desktop"
  | "smartphone"
  | "service"
  | "product"
  | "sold_out"
  | "sales"
  | "owner";

export type WhatsAppContactType = "owner" | "sales" | "service";

const WHATSAPP_MESSAGES: Record<Exclude<WhatsAppMessageType, "product" | "sold_out" | "sales" | "owner">, string> = {
  general: "Halo Admin Database Computer! Saya lihat dari website dan ingin tanya-tanya seputar stok laptop/printer/smartphone yang ready hari ini. Bisa dibantu?",
  budget_1_3: "Halo Toko Pontianak! Saya tertarik dengan kategori laptop di budget 1 - 3 Juta. Ada rekomendasi unit yang paling oke untuk kebutuhan sehari-hari?",
  budget_4_7: "Halo Toko Pontianak! Saya tertarik dengan kategori laptop di budget 4 - 7 Juta. Ada rekomendasi unit yang paling oke untuk kebutuhan kuliah/kerja?",
  budget_7_10: "Halo Toko Pontianak! Saya tertarik dengan kategori laptop di budget 7 - 10 Juta. Ada rekomendasi unit untuk desain grafis atau gaming?",
  gaming: "Halo Toko Pontianak! Saya tertarik dengan kategori Gaming Laptop. Ada rekomendasi unit dengan GPU dedicated yang paling oke?",
  desktop: "Halo Toko Pontianak! Saya tertarik dengan Desktop PC. Ada rekomendasi PC rakitan untuk gaming/office yang ready?",
  smartphone: "Halo Admin Database Computer! Saya tertarik dengan koleksi Smartphone (iPhone/Android). Apakah ada stok ready hari ini? Bisa dibantu?",
  service: "Halo, saya mau konsultasi servis. Laptop saya ada kendala dan butuh bantuan pengecekan. Kira-kira bisa dibantu?",
};

// Smart routing: determine which WhatsApp number to use based on message type
function getWhatsAppNumberForType(type: WhatsAppMessageType): string {
  // Service-related inquiries go to service admin
  if (type === "service") {
    return WHATSAPP_NUMBERS.service;
  }
  
  // Sales/product inquiries go to sales admin
  if (
    type === "product" || 
    type === "sold_out" ||
    type === "budget_1_3" || 
    type === "budget_4_7" || 
    type === "budget_7_10" || 
    type === "gaming" || 
    type === "desktop" ||
    type === "smartphone" ||
    type === "sales"
  ) {
    return WHATSAPP_NUMBERS.sales;
  }
  
  // Owner direct contact
  if (type === "owner") {
    return WHATSAPP_NUMBERS.owner;
  }
  
  // General inquiries default to owner
  return WHATSAPP_NUMBERS.general;
}

export function generateWhatsAppLink(type: WhatsAppMessageType, productName?: string): string {
  const whatsappNumber = getWhatsAppNumberForType(type);
  let message: string;
  
  if (type === "product" && productName) {
    message = `Halo Toko Pontianak! Saya tertarik dengan unit ${productName} yang ada di website. Apakah masih tersedia? Bisa info lebih lanjut?`;
  } else if (type === "sold_out" && productName) {
    message = `Halo Toko Pontianak! Saya lihat unit ${productName} di website sudah terjual. Apakah ada unit serupa yang masih tersedia? Saya tertarik dengan spesifikasi yang mirip.`;
  } else if (type === "sales") {
    message = "Halo Admin Jual-Beli Toko! Saya mau tanya-tanya tentang pembelian laptop. Bisa dibantu?";
  } else if (type === "owner") {
    message = "Halo Owner Database Computer! Saya ingin berkonsultasi langsung.";
  } else {
    message = WHATSAPP_MESSAGES[type as Exclude<WhatsAppMessageType, "product" | "sold_out" | "sales" | "owner">] || WHATSAPP_MESSAGES.general;
  }
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

// Generate direct WhatsApp link by contact type
export function generateWhatsAppLinkByContact(contactType: WhatsAppContactType, customMessage?: string): string {
  const whatsappNumber = WHATSAPP_NUMBERS[contactType];
  const defaultMessages = {
    owner: "Halo Owner Database Computer! Saya ingin berkonsultasi langsung.",
    sales: "Halo Admin Jual-Beli Toko! Saya mau tanya-tanya tentang pembelian laptop. Bisa dibantu?",
    service: "Halo Admin Service Toko! Saya mau konsultasi tentang servis laptop. Bisa dibantu?",
  };
  
  const message = customMessage || defaultMessages[contactType];
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

export function getWhatsAppNumber(): string {
  return WHATSAPP_NUMBERS.general;
}

// Get formatted phone number for display
export function formatWhatsAppNumber(number: string): string {
  // Format: +62 821-5700-0466
  if (number.startsWith("62")) {
    return `+${number.slice(0, 2)} ${number.slice(2, 5)}-${number.slice(5, 9)}-${number.slice(9)}`;
  }
  return number;
}
