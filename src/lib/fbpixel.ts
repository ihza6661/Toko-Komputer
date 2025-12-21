/**
 * Facebook Pixel Integration
 * 
 * This module provides Facebook Pixel tracking functionality with proper
 * event mapping to Facebook's Standard Events for better ad optimization.
 * 
 * Event Mapping:
 * - whatsapp_click → Lead (primary conversion)
 * - product_view → ViewContent
 * - scroll (100%) → Custom event
 * - form_interaction → SubmitApplication
 * 
 * Usage:
 * import { initFBPixel, sendFBPixelEvent } from '@/lib/fbpixel'
 */

import { getFBPixelId, isFBPixelEnabled, isAnalyticsDebugEnabled } from './seo-config';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: (...args: any[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Load Facebook Pixel script from Facebook servers
 */
function loadFBPixelScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already loaded
    if (document.querySelector(`script[src*="connect.facebook.net"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load FB Pixel script'));
    document.head.appendChild(script);
  });
}

/**
 * Initialize Facebook Pixel
 * This should be called once when the app loads
 */
export async function initFBPixel(): Promise<boolean> {
  if (!isFBPixelEnabled()) {
    if (isAnalyticsDebugEnabled()) {
      console.log('📘 FB Pixel: Disabled (no Pixel ID)');
    }
    return false;
  }

  const pixelId = getFBPixelId();
  if (!pixelId) return false;

  try {
    // Load Facebook Pixel script
    await loadFBPixelScript();
    
    // Add noscript fallback for users with JavaScript disabled
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    // Initialize fbq if not already defined by loaded script
    if (!window.fbq) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fbq: any = function(...args: any[]) {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
        } else {
          fbq.queue.push(args);
        }
      };
      
      window.fbq = fbq;
      window._fbq = fbq;
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Initialize Pixel
    window.fbq('init', pixelId);
    
    // Track PageView automatically
    window.fbq('track', 'PageView');

    if (isAnalyticsDebugEnabled()) {
      console.log('✅ FB Pixel Initialized:', pixelId);
    }

    return true;
  } catch (error) {
    console.error('❌ FB Pixel Initialization Failed:', error);
    return false;
  }
}

/**
 * Send standard event to Facebook Pixel
 */
export function sendFBPixelEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  if (!isFBPixelEnabled() || !window.fbq) return;

  try {
    window.fbq('track', eventName, eventParams);
    
    if (isAnalyticsDebugEnabled()) {
      console.log('📘 FB Pixel Event:', eventName, eventParams);
    }
  } catch (error) {
    console.error('❌ FB Pixel Event Failed:', error);
  }
}

/**
 * Send custom event to Facebook Pixel
 */
export function sendFBPixelCustomEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  if (!isFBPixelEnabled() || !window.fbq) return;

  try {
    window.fbq('trackCustom', eventName, eventParams);
    
    if (isAnalyticsDebugEnabled()) {
      console.log('📘 FB Pixel Custom Event:', eventName, eventParams);
    }
  } catch (error) {
    console.error('❌ FB Pixel Custom Event Failed:', error);
  }
}

/**
 * Track WhatsApp click as lead (PRIMARY CONVERSION)
 */
export function trackFBPixelWhatsAppClick(data: {
  type: string;
  location: string;
  productName?: string;
  buttonText?: string;
}): void {
  // Standard Event: Lead
  sendFBPixelEvent('Lead', {
    content_name: 'WhatsApp Contact',
    content_category: data.type,
    value: 1,
    currency: 'IDR',
  });

  // Custom Event for detailed tracking
  sendFBPixelCustomEvent('WhatsAppClick', {
    type: data.type,
    location: data.location,
    product_name: data.productName,
    button_text: data.buttonText,
  });
}

/**
 * Track product view
 */
export function trackFBPixelProductView(data: {
  productName: string;
  price: number;
  category?: string;
  brand?: string;
}): void {
  sendFBPixelEvent('ViewContent', {
    content_name: data.productName,
    content_category: data.category || 'Laptop',
    content_type: 'product',
    value: data.price,
    currency: 'IDR',
  });
}

/**
 * Track scroll depth (custom event)
 */
export function trackFBPixelScrollDepth(depth: number, section?: string): void {
  // Only track significant milestones (50%, 75%, 100%)
  if (depth === 50 || depth === 75 || depth === 100) {
    sendFBPixelCustomEvent('ScrollDepth', {
      depth_percentage: depth,
      section: section,
    });
  }
}

/**
 * Track navigation
 */
export function trackFBPixelNavigation(data: {
  from: string;
  to: string;
  method: 'click' | 'scroll';
}): void {
  sendFBPixelCustomEvent('Navigation', {
    from_section: data.from,
    to_section: data.to,
    navigation_method: data.method,
  });
}

/**
 * Track form interaction
 */
export function trackFBPixelFormInteraction(
  formName: string,
  action: 'start' | 'submit' | 'error',
  fieldName?: string
): void {
  if (action === 'submit') {
    // Standard Event for form submission
    sendFBPixelEvent('SubmitApplication', {
      content_name: formName,
      status: action === 'error' ? 'failed' : 'completed',
    });
  } else {
    // Custom Event for form start
    sendFBPixelCustomEvent('FormInteraction', {
      form_name: formName,
      action: action,
      field_name: fieldName,
    });
  }
}

/**
 * Track page view (manual)
 */
export function trackFBPixelPageView(pageTitle?: string): void {
  sendFBPixelEvent('PageView', {
    page_title: pageTitle,
  });
}

/**
 * Track search (if search functionality exists)
 */
export function trackFBPixelSearch(searchQuery: string): void {
  sendFBPixelEvent('Search', {
    search_string: searchQuery,
    content_category: 'products',
  });
}

/**
 * Track contact (for contact form submissions)
 */
export function trackFBPixelContact(): void {
  sendFBPixelEvent('Contact', {
    content_name: 'Contact Form',
  });
}
