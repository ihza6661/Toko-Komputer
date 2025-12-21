/**
 * SEO Configuration Loader
 * Manages environment variables for analytics and tracking
 */

export interface SEOConfig {
  ga4MeasurementId: string | null;
  fbPixelId: string | null;
  enableAnalytics: boolean;
  analyticsDebug: boolean;
}

/**
 * Load SEO configuration from environment variables
 */
export function loadSEOConfig(): SEOConfig {
  const config: SEOConfig = {
    ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID || null,
    fbPixelId: import.meta.env.VITE_FB_PIXEL_ID || null,
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS !== 'false', // Default true
    analyticsDebug: import.meta.env.VITE_ANALYTICS_DEBUG === 'true', // Default false
  };

  // Log configuration in development
  if (import.meta.env.DEV) {
    console.log('📊 SEO Configuration:', {
      ga4Enabled: !!config.ga4MeasurementId,
      fbPixelEnabled: !!config.fbPixelId,
      analyticsEnabled: config.enableAnalytics,
      debugMode: config.analyticsDebug,
    });
  }

  return config;
}

/**
 * Check if Google Analytics 4 is enabled
 */
export function isGA4Enabled(): boolean {
  const config = loadSEOConfig();
  return config.enableAnalytics && !!config.ga4MeasurementId;
}

/**
 * Check if Facebook Pixel is enabled
 */
export function isFBPixelEnabled(): boolean {
  const config = loadSEOConfig();
  return config.enableAnalytics && !!config.fbPixelId;
}

/**
 * Get GA4 Measurement ID
 */
export function getGA4MeasurementId(): string | null {
  return loadSEOConfig().ga4MeasurementId;
}

/**
 * Get Facebook Pixel ID
 */
export function getFBPixelId(): string | null {
  return loadSEOConfig().fbPixelId;
}

/**
 * Check if analytics debug mode is enabled
 */
export function isAnalyticsDebugEnabled(): boolean {
  return loadSEOConfig().analyticsDebug;
}
