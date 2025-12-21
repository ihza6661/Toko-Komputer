/**
 * Google Analytics 4 (GA4) Integration
 * 
 * This module provides GA4 tracking functionality with proper event mapping
 * to Google's recommended event schema for better reporting and insights.
 * 
 * Event Mapping:
 * - whatsapp_click → generate_lead (primary conversion)
 * - product_view → view_item
 * - scroll → scroll (built-in)
 * - form_interaction → form_start, form_submit
 * - navigation → Custom event
 * 
 * Usage:
 * import { initGA4, sendGA4Event } from '@/lib/gtag'
 */

import { getGA4MeasurementId, isGA4Enabled, isAnalyticsDebugEnabled } from './seo-config';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Load GA4 tracking script from Google servers
 */
function loadGA4Script(measurementId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already loaded
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load GA4 script'));
    document.head.appendChild(script);
  });
}

/**
 * Initialize Google Analytics 4
 * This should be called once when the app loads
 */
export async function initGA4(): Promise<boolean> {
  if (!isGA4Enabled()) {
    if (isAnalyticsDebugEnabled()) {
      console.log('📊 GA4: Disabled (no Measurement ID)');
    }
    return false;
  }

  const measurementId = getGA4MeasurementId();
  if (!measurementId) return false;

  try {
    // Load GA4 script from Google
    await loadGA4Script(measurementId);
    
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Define gtag function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.gtag = function(...args: any[]) {
      window.dataLayer?.push(args);
    };

    // Configure GA4
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
      anonymize_ip: true, // Privacy-friendly
      cookie_flags: 'SameSite=None;Secure',
    });

    if (isAnalyticsDebugEnabled()) {
      console.log('✅ GA4 Initialized:', measurementId);
    }

    return true;
  } catch (error) {
    console.error('❌ GA4 Initialization Failed:', error);
    return false;
  }
}

/**
 * Send event to Google Analytics 4
 */
export function sendGA4Event(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  if (!isGA4Enabled() || !window.gtag) return;

  try {
    window.gtag('event', eventName, eventParams);
    
    if (isAnalyticsDebugEnabled()) {
      console.log('📊 GA4 Event:', eventName, eventParams);
    }
  } catch (error) {
    console.error('❌ GA4 Event Failed:', error);
  }
}

/**
 * Track page view (manual)
 */
export function trackGA4PageView(
  pageTitle: string,
  pagePath: string,
  pageLocation?: string
): void {
  sendGA4Event('page_view', {
    page_title: pageTitle,
    page_path: pagePath,
    page_location: pageLocation || window.location.href,
  });
}

/**
 * Track WhatsApp click as lead generation (PRIMARY CONVERSION)
 */
export function trackGA4WhatsAppClick(data: {
  type: string;
  location: string;
  productName?: string;
  buttonText?: string;
}): void {
  sendGA4Event('generate_lead', {
    method: 'whatsapp',
    lead_type: data.type,
    source: data.location,
    product_name: data.productName,
    button_text: data.buttonText,
    value: 1, // Each lead has value of 1
    currency: 'IDR',
  });

  // Also send custom event for more detailed tracking
  sendGA4Event('whatsapp_click', {
    type: data.type,
    location: data.location,
    product_name: data.productName,
    button_text: data.buttonText,
  });
}

/**
 * Track product view
 */
export function trackGA4ProductView(data: {
  productName: string;
  price: number;
  category?: string;
  brand?: string;
}): void {
  sendGA4Event('view_item', {
    currency: 'IDR',
    value: data.price,
    items: [
      {
        item_name: data.productName,
        item_category: data.category || 'Laptop',
        item_brand: data.brand || 'Unknown',
        price: data.price,
      },
    ],
  });
}

/**
 * Track scroll depth
 */
export function trackGA4ScrollDepth(depth: number, section?: string): void {
  sendGA4Event('scroll', {
    depth_percentage: depth,
    section: section,
    engagement_time_msec: Date.now(), // Built-in engagement tracking
  });
}

/**
 * Track navigation
 */
export function trackGA4Navigation(data: {
  from: string;
  to: string;
  method: 'click' | 'scroll';
}): void {
  sendGA4Event('navigation', {
    from_section: data.from,
    to_section: data.to,
    navigation_method: data.method,
  });
}

/**
 * Track form interaction
 */
export function trackGA4FormInteraction(
  formName: string,
  action: 'start' | 'submit' | 'error',
  fieldName?: string
): void {
  const eventName = action === 'start' ? 'form_start' : 'form_submit';
  
  sendGA4Event(eventName, {
    form_name: formName,
    form_action: action,
    field_name: fieldName,
    ...(action === 'error' && { error_type: 'validation' }),
  });
}

/**
 * Set user properties (optional - for segmentation)
 */
export function setGA4UserProperties(properties: Record<string, unknown>): void {
  if (!isGA4Enabled() || !window.gtag) return;

  try {
    window.gtag('set', 'user_properties', properties);
    
    if (isAnalyticsDebugEnabled()) {
      console.log('📊 GA4 User Properties Set:', properties);
    }
  } catch (error) {
    console.error('❌ GA4 Set User Properties Failed:', error);
  }
}

/**
 * Track conversion event (for Google Ads integration)
 */
export function trackGA4Conversion(conversionLabel: string, value?: number): void {
  sendGA4Event('conversion', {
    send_to: conversionLabel,
    value: value,
    currency: 'IDR',
  });
}

/**
 * Track exception/error
 */
export function trackGA4Exception(description: string, fatal = false): void {
  sendGA4Event('exception', {
    description: description,
    fatal: fatal,
  });
}
