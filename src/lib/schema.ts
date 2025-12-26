/**
 * Schema.org Structured Data Generator
 *
 * This module generates JSON-LD structured data for better SEO and
 * local search visibility. Implements LocalBusiness schema with
 * additional types for services.
 *
 * Schema Types:
 * - LocalBusiness (ComputerStore) - Primary business information
 * - Service - Repair and maintenance services
 * - Product - (Optional) For product listings
 *
 * Usage:
 * import { generateLocalBusinessSchema, generateServiceSchema } from '@/lib/schema'
 */

import { COMPANY_INFO, WHATSAPP_NUMBERS } from "./constants";
import { APP_CONFIG } from "./config";
import tokoLogo from "@/assets/toko-logo.png";
import placeholderImg from "@/assets/placeholder.svg";

/**
 * Convert relative or absolute URLs to fully qualified absolute URLs
 * 
 * @param url - URL to convert (can be relative, absolute path, or full URL)
 * @returns Fully qualified absolute URL using APP_CONFIG.baseUrl
 * 
 * @example
 * toAbsoluteUrl('/products/laptop-asus') 
 * // => 'https://database.id/products/laptop-asus'
 * 
 * toAbsoluteUrl('https://database.id/about') 
 * // => 'https://database.id/about'
 * 
 * toAbsoluteUrl('/assets/logo.png') 
 * // => 'https://database.id/assets/logo.png'
 */
export function toAbsoluteUrl(url: string): string {
  // If already a full URL (http:// or https://), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // If relative path (starts with /), prepend base URL
  if (url.startsWith('/')) {
    return `${APP_CONFIG.baseUrl}${url}`;
  }
  
  // If no leading slash, add one before prepending
  return `${APP_CONFIG.baseUrl}/${url}`;
}

export interface SchemaOrganization {
  "@context": string;
  "@type": string;
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  image?: string[];
  telephone: string;
  email?: string;
  address: SchemaPostalAddress;
  geo: SchemaGeoCoordinates;
  openingHoursSpecification: SchemaOpeningHours[];
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  areaServed: string[];
  sameAs?: string[];
  aggregateRating?: SchemaAggregateRating;
}

export interface SchemaPostalAddress {
  "@type": string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

export interface SchemaGeoCoordinates {
  "@type": string;
  latitude: number;
  longitude: number;
}

export interface SchemaOpeningHours {
  "@type": string;
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

export interface SchemaAggregateRating {
  "@type": string;
  ratingValue: string;
  reviewCount: string;
  bestRating: string;
  worstRating: string;
}

export interface SchemaService {
  "@context": string;
  "@type": string;
  serviceType: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: string;
  description: string;
  offers?: {
    "@type": string;
    priceCurrency: string;
    price?: string;
    priceRange?: string;
  };
}

/**
 * Generate LocalBusiness (ComputerStore) Schema
 */
export function generateLocalBusinessSchema(): SchemaOrganization {
  const schema: SchemaOrganization = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    name: COMPANY_INFO.name,
    description: `${COMPANY_INFO.name} adalah pusat jual beli laptop dan komputer baru berkualitas di Pontianak. Melayani tukar tambah, servis profesional, dan pengiriman seluruh Indonesia sejak ${COMPANY_INFO.foundedYear}.`,
    url: APP_CONFIG.baseUrl,
    logo: tokoLogo,
    image: [tokoLogo, placeholderImg],
    telephone: `+${WHATSAPP_NUMBERS.general}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Gajah Mada No. 88",
      addressLocality: "Pontianak",
      addressRegion: "Kalimantan Barat",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_INFO.coordinates.lat,
      longitude: COMPANY_INFO.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: ["Cash", "Transfer Bank", "COD"],
    currenciesAccepted: "IDR",
    areaServed: ["Pontianak", "Kalimantan Barat", "Indonesia"],
    sameAs: [COMPANY_INFO.instagram, COMPANY_INFO.googleMapsUrl],
    // Add aggregate rating for star ratings in Google search results
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return schema;
}

/**
 * Generate Service Schema for Repair Services
 */
export function generateRepairServiceSchema(): SchemaService {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Computer Repair Service",
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY_INFO.name,
    },
    areaServed: "Pontianak, Kalimantan Barat",
    description:
      "Layanan servis dan perbaikan laptop, upgrade hardware (SSD, RAM), ganti LCD/layar, ganti baterai, dan maintenance profesional.",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      priceRange: "Rp 150.000 - Rp 2.000.000",
    },
  };
}

/**
 * Generate Service Schema for Sales (Jual Beli)
 */
export function generateSalesServiceSchema(): SchemaService {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Computer Sales",
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY_INFO.name,
    },
    areaServed: "Indonesia",
    description:
      "Jual beli laptop dan komputer baru berkualitas dengan garansi resmi. Melayani tukar tambah dan pengiriman seluruh Indonesia.",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      priceRange: "Rp 2.000.000 - Rp 20.000.000",
    },
  };
}

/**
 * Generate Product Schema (for individual products)
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  condition: "NewCondition" | "UsedCondition" | "RefurbishedCondition";
  brand?: string;
  sku?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: product.brand || "Various",
    },
    offers: {
      "@type": "Offer",
      url: APP_CONFIG.baseUrl,
      priceCurrency: "IDR",
      price: product.price,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0], // 30 days
      itemCondition: `https://schema.org/${product.condition}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: COMPANY_INFO.name,
      },
    },
    ...(product.sku && { sku: product.sku }),
  };
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList Schema (for navigation)
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate complete schema markup for the homepage
 */
export function generateHomepageSchema(): string {
  const schemas = [
    generateLocalBusinessSchema(),
    generateRepairServiceSchema(),
    generateSalesServiceSchema(),
  ];

  // Return as JSON-LD script content
  return JSON.stringify(schemas, null, 2);
}

/**
 * Inject schema markup into HTML head
 * (Use this if you want dynamic schema injection)
 */
export function injectSchemaMarkup(schema: object): void {
  if (typeof document === "undefined") return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}
