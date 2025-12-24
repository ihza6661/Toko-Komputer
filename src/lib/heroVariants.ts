/**
 * Hero Section A/B Test Variants
 * 
 * This file contains different headline variants for A/B testing.
 * Use environment variable or feature flag to toggle between variants.
 */

export type HeroVariant = 'terlengkap' | 'price-driven' | 'trust-focused';

export interface HeroContent {
  variant: HeroVariant;
  mainHeadline: string;
  subHeadline: string;
  description: {
    primary: string;
    secondary: string;
  };
}

export const heroVariants: Record<HeroVariant, HeroContent> = {
  // Original variant - emphasizes breadth and trust
  terlengkap: {
    variant: 'terlengkap',
    mainHeadline: 'Toko Komputer Terlengkap',
    subHeadline: '& Terpercaya di Pontianak',
    description: {
      primary: 'PC • Laptop • Smartphone • iPhone',
      secondary: 'Garansi Resmi & Partner Marketplace Terpercaya'
    }
  },
  
  // Price-driven variant - emphasizes value and pricing
  'price-driven': {
    variant: 'price-driven',
    mainHeadline: 'Toko Komputer Resmi',
    subHeadline: 'dengan Garansi & Harga Terbaik',
    description: {
      primary: 'PC • Laptop • Smartphone • iPhone',
      secondary: 'Harga Kompetitif dengan Garansi Resmi'
    }
  },
  
  // Trust-focused variant - emphasizes reliability and warranty
  'trust-focused': {
    variant: 'trust-focused',
    mainHeadline: 'Toko Komputer Bergaransi',
    subHeadline: '100% Resmi & Terpercaya',
    description: {
      primary: 'PC • Laptop • Smartphone • iPhone',
      secondary: 'Garansi Resmi dari Distributor Terpercaya'
    }
  }
};

/**
 * Get the active hero variant based on environment variable
 * Default to 'price-driven' if not set
 */
export function getActiveHeroVariant(): HeroContent {
  const variantKey = (import.meta.env.VITE_HERO_VARIANT || 'price-driven') as HeroVariant;
  return heroVariants[variantKey] || heroVariants['price-driven'];
}

/**
 * A/B Test Notes:
 * 
 * To test different variants:
 * 1. Set VITE_HERO_VARIANT in .env file
 * 2. Options: 'terlengkap' | 'price-driven' | 'trust-focused'
 * 3. Track conversion rates using analytics
 * 4. Recommended test duration: 2-4 weeks with at least 1000 visitors per variant
 * 
 * Key Metrics to Track:
 * - WhatsApp click rate (CTR)
 * - Bounce rate
 * - Time on page
 * - Scroll depth to products section
 * - Actual WhatsApp conversations initiated
 * 
 * Expected Performance:
 * - 'price-driven': Best for price-sensitive customers (most Pontianak market)
 * - 'terlengkap': Best for customers seeking variety
 * - 'trust-focused': Best for first-time buyers or premium segment
 */
