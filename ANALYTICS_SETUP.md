# Analytics Setup Guide

Complete step-by-step guide to set up Google Analytics 4 and Facebook Pixel tracking for Toko Computer landing page.

---

## Table of Contents

1. [Overview](#overview)
2. [Google Analytics 4 Setup](#google-analytics-4-setup)
3. [Facebook Pixel Setup](#facebook-pixel-setup)
4. [Environment Configuration](#environment-configuration)
5. [Testing Your Setup](#testing-your-setup)
6. [Viewing Reports](#viewing-reports)
7. [Troubleshooting](#troubleshooting)

---

## Overview

The Toko Computer landing page is pre-configured with comprehensive analytics tracking including:

- **Google Analytics 4 (GA4)** - For detailed website analytics and conversion tracking
- **Facebook Pixel** - For Facebook/Instagram ad optimization and retargeting
- **Local Analytics Dashboard** - Built-in dashboard for real-time event tracking (dev mode)

### What Gets Tracked?

✅ **Primary Conversions:**
- WhatsApp button clicks (mapped as "Lead" events)
- Product inquiries
- Service requests

✅ **User Behavior:**
- Page views
- Scroll depth (25%, 50%, 75%, 100%)
- Navigation clicks
- Product views
- Form interactions

✅ **Traffic Sources:**
- Where visitors come from
- Which campaigns drive the most conversions
- Device types and locations

---

## Google Analytics 4 Setup

### Step 1: Create a Google Analytics 4 Property

1. **Go to Google Analytics**
   - Visit https://analytics.google.com/
   - Sign in with your Google account

2. **Create a New Property**
   - Click "Admin" (gear icon at bottom left)
   - Under "Property" column, click "Create Property"
   - Enter property details:
     - **Property name:** Toko Computer
     - **Time zone:** (GMT+07:00) Bangkok, Hanoi, Jakarta
     - **Currency:** Indonesian Rupiah (IDR)
   - Click "Next"

3. **Set Up Property Details**
   - **Industry category:** Computers & Electronics
   - **Business size:** Small (1-10 employees)
   - Click "Next"

4. **Choose Business Objectives**
   - Select "Generate leads"
   - Click "Create"
   - Accept Terms of Service

### Step 2: Set Up Data Stream

1. **Create a Web Data Stream**
   - After creating property, you'll see "Set up data stream"
   - Click "Web"
   - Enter your website URL: `https://tokocomputer.com`
   - **Stream name:** Toko Landing Page
   - Click "Create stream"

2. **Copy Your Measurement ID**
   - You'll see a screen with your data stream details
   - Find **Measurement ID** (format: `G-XXXXXXXXXX`)
   - **COPY THIS ID** - you'll need it in Step 3

### Step 3: Add Measurement ID to Your Website

1. **Open Your Production Environment File**
   ```bash
   # On your server, edit .env.production
   nano /path/to/r-tech-landing/.env.production
   ```

2. **Add Your Measurement ID**
   ```bash
   # Google Analytics 4
   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
   
   # Replace G-XXXXXXXXXX with your actual Measurement ID
   ```

3. **Save and Rebuild**
   ```bash
   npm run build
   ```

### Step 4: Configure GA4 Events (Optional but Recommended)

1. **Mark Key Events as Conversions**
   - In GA4, go to Admin → Events
   - Find `generate_lead` event (appears after first WhatsApp click)
   - Toggle "Mark as conversion" on

2. **Set Up Audience**
   - Go to Admin → Audiences
   - Create audience: "Engaged Visitors" (users who scroll >75%)
   - Create audience: "Lead Generators" (users who triggered generate_lead)

---

## Facebook Pixel Setup

### Step 1: Create a Facebook Pixel

1. **Go to Facebook Events Manager**
   - Visit https://business.facebook.com/events_manager2
   - Sign in to your Facebook Business Account
   - If you don't have one, create it at https://business.facebook.com/

2. **Create a New Pixel**
   - Click green "+" button → "Connect Data Sources"
   - Select "Web"
   - Click "Get Started"
   - Choose "Facebook Pixel" → Click "Connect"

3. **Name Your Pixel**
   - **Pixel name:** Toko Computer
   - **Website URL:** https://tokocomputer.com
   - Click "Create Pixel"

4. **Copy Your Pixel ID**
   - After creation, you'll see your Pixel ID (numeric, e.g., `1234567890123456`)
   - **COPY THIS ID** - you'll need it in Step 2

### Step 2: Add Pixel ID to Your Website

1. **Open Your Production Environment File**
   ```bash
   nano /path/to/r-tech-landing/.env.production
   ```

2. **Add Your Pixel ID**
   ```bash
   # Facebook Pixel
   VITE_FB_PIXEL_ID=1234567890123456
   
   # Replace with your actual Pixel ID
   ```

3. **Save and Rebuild**
   ```bash
   npm run build
   ```

### Step 3: Test Pixel Installation

1. **Install Facebook Pixel Helper Extension**
   - Chrome: https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc
   - Firefox: Search "Facebook Pixel Helper" in Add-ons

2. **Visit Your Website**
   - Open https://tokocomputer.com
   - Click the Pixel Helper extension icon
   - You should see: "Pixel found on page" with your Pixel ID

3. **Test a Conversion**
   - Click any "Chat WhatsApp" button on your site
   - In Pixel Helper, you should see:
     - `PageView` event
     - `Lead` event (after clicking WhatsApp)

---

## Environment Configuration

### Development Environment (`.env`)

For local testing, leave tracking IDs empty:

```bash
# API Configuration
VITE_API_URL=http://localhost:8000/api

# Analytics (empty = disabled, dashboard still works)
VITE_GA4_MEASUREMENT_ID=
VITE_FB_PIXEL_ID=

# Enable analytics even in development (optional)
VITE_ENABLE_ANALYTICS=false

# Show debug logs
VITE_ANALYTICS_DEBUG=true
```

### Production Environment (`.env.production`)

For production, add your real tracking IDs:

```bash
# API Configuration
VITE_API_URL=https://your-api-url.com/api

# Google Analytics 4
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Facebook Pixel
VITE_FB_PIXEL_ID=1234567890123456

# Enable analytics in production
VITE_ENABLE_ANALYTICS=true

# Disable debug logs in production
VITE_ANALYTICS_DEBUG=false
```

### Build Commands

```bash
# Development build (with debug)
npm run build:dev

# Production build (optimized)
npm run build

# Preview production build locally
npm run preview
```

---

## Testing Your Setup

### 1. Test in Development

```bash
# Start dev server
cd r-tech-landing
npm run dev

# Open browser to http://localhost:8080
# Open browser console (F12)
# Look for:
#   ✅ SEO tracking initialized
#   📊 GA4: Disabled (no Measurement ID)
#   📘 FB Pixel: Disabled (no Pixel ID)
```

### 2. Test GA4 in Real-Time

1. **Open GA4 Real-Time Report**
   - Go to https://analytics.google.com/
   - Select your property
   - Click "Reports" → "Realtime"

2. **Trigger Events on Your Site**
   - Open your website in a new tab
   - Click navigation links
   - Scroll down the page
   - Click a WhatsApp button
   - View product listings

3. **Verify Events Appear**
   - You should see events appear in real-time
   - Look for:
     - `page_view`
     - `generate_lead` (WhatsApp clicks)
     - `view_item` (product views)
     - `scroll` (scroll depth)

### 3. Test Facebook Pixel in Real-Time

1. **Open Facebook Events Manager**
   - Go to https://business.facebook.com/events_manager2
   - Select your Pixel
   - Click "Test Events"

2. **Enter Your Website URL**
   - Type your website URL
   - Click "Open Website"

3. **Trigger Events**
   - Interact with your site (scroll, click buttons)
   - Watch events appear in the Test Events panel
   - Look for:
     - `PageView`
     - `Lead` (WhatsApp clicks)
     - `ViewContent` (product views)

### 4. Test Analytics Dashboard (Dev Mode)

The built-in analytics dashboard tracks events locally:

```bash
# Method 1: Floating Button
# Look for blue-purple button in bottom-left corner
# Click to open dashboard

# Method 2: URL Parameter
# Add ?analytics=true to URL
# Example: http://localhost:8080?analytics=true

# Method 3: Browser Console
window.tokoAnalytics.openDashboard()
window.tokoAnalytics.getSummary()
window.tokoAnalytics.download() # Download CSV
```

---

## Viewing Reports

### Google Analytics 4 Reports

#### 1. Conversions Report (Most Important)
- **Location:** Reports → Engagement → Conversions
- **Shows:** Number of `generate_lead` events (WhatsApp clicks)
- **Use Case:** Track monthly leads, measure campaign ROI

#### 2. Traffic Sources
- **Location:** Reports → Acquisition → Traffic acquisition
- **Shows:** Where visitors come from (Google, Direct, Social, etc.)
- **Use Case:** Identify which channels drive the most leads

#### 3. User Demographics
- **Location:** Reports → User → Demographics
- **Shows:** Age, gender, location of visitors
- **Use Case:** Understand your audience better

#### 4. Product Performance (Custom Report)
- **Location:** Explore → Create exploration
- **Metric:** `view_item` events by `item_name`
- **Use Case:** See which laptops get the most views

### Facebook Pixel Reports

#### 1. Events Manager Overview
- **Location:** Events Manager → Data Sources → Your Pixel
- **Shows:** Total events, top events, event trends
- **Use Case:** Quick health check of tracking

#### 2. Custom Conversions (for Ad Optimization)
- **Location:** Events Manager → Custom Conversions → Create Custom Conversion
- **Example:** "WhatsApp Lead" = when URL contains `wa.me`
- **Use Case:** Optimize Facebook/Instagram ads for WhatsApp clicks

#### 3. Audience Insights
- **Location:** Ads Manager → Audiences → Create Audience
- **Type:** "Website Visitors (Pixel)"
- **Use Case:** Retarget people who visited but didn't convert

---

## Troubleshooting

### Issue: "GA4 not receiving data"

**Possible Causes:**
1. ❌ Wrong Measurement ID format
2. ❌ Measurement ID not in `.env.production`
3. ❌ Forgot to rebuild after adding ID
4. ❌ Browser has ad blocker enabled

**Solution:**
```bash
# 1. Verify Measurement ID format (should be G-XXXXXXXXXX)
cat .env.production | grep VITE_GA4

# 2. Rebuild the project
npm run build

# 3. Check browser console for errors
# Open DevTools (F12) → Console tab
# Look for: "✅ GA4 Initialized: G-XXXXXXXXXX"

# 4. Test without ad blocker
# Disable uBlock, AdBlock, etc.
```

### Issue: "Facebook Pixel not firing"

**Possible Causes:**
1. ❌ Wrong Pixel ID format (should be numeric)
2. ❌ Pixel ID not in `.env.production`
3. ❌ Privacy extensions blocking Facebook

**Solution:**
```bash
# 1. Verify Pixel ID format (should be all numbers)
cat .env.production | grep VITE_FB_PIXEL_ID

# 2. Rebuild
npm run build

# 3. Check console
# Look for: "✅ FB Pixel Initialized: 1234567890123456"

# 4. Test in incognito mode
# Ctrl+Shift+N (Chrome) or Ctrl+Shift+P (Firefox)
```

### Issue: "Events not showing in dashboard"

**This is normal if:**
- ✅ Analytics IDs are empty (tracking disabled)
- ✅ `VITE_ENABLE_ANALYTICS=false` in .env
- ✅ Ad blockers are enabled

**The local dashboard still works!**
- Events are stored in browser localStorage
- Use the analytics dashboard to view them
- Export CSV for analysis

### Issue: "Build errors after adding IDs"

**Solution:**
```bash
# 1. Check .env syntax (no spaces, no quotes)
# ✅ Correct:
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# ❌ Wrong:
VITE_GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"

# 2. Clear node_modules and rebuild
rm -rf node_modules
npm install
npm run build
```

### Issue: "Analytics working locally but not in production"

**Possible Causes:**
1. ❌ `.env.production` not deployed to server
2. ❌ Environment variables not loaded
3. ❌ Different build process in production

**Solution:**
```bash
# 1. Verify .env.production exists on server
ls -la /path/to/r-tech-landing/.env*

# 2. Check if variables are loaded
npm run preview
# Open browser console, check for initialization logs

# 3. Ensure production build uses .env.production
npm run build --mode production
```

---

## Advanced Configuration

### Custom Event Tracking

You can track custom events in your code:

```typescript
import { sendGA4Event } from '@/lib/gtag';
import { sendFBPixelCustomEvent } from '@/lib/fbpixel';

// Track custom button click
sendGA4Event('custom_button_click', {
  button_name: 'Special Offer',
  button_location: 'Hero Section',
});

sendFBPixelCustomEvent('SpecialOfferClick', {
  location: 'hero',
});
```

### E-commerce Tracking (Future)

The schema is ready for e-commerce events:

```typescript
import { trackGA4ProductView } from '@/lib/gtag';

// When user views a laptop
trackGA4ProductView({
  productName: 'Macbook Pro M1 2020',
  price: 12500000,
  category: 'Macbook',
  brand: 'Apple',
});
```

### Conversion Value Optimization

Set monetary values for conversions:

```typescript
// In gtag.ts, modify trackGA4WhatsAppClick:
sendGA4Event('generate_lead', {
  method: 'whatsapp',
  value: 5000, // Average lead value in IDR
  currency: 'IDR',
});
```

---

## Need Help?

### Resources

- **Google Analytics Help:** https://support.google.com/analytics
- **Facebook Pixel Help:** https://www.facebook.com/business/help/742478679120153
- **Schema.org Documentation:** https://schema.org/LocalBusiness
- **Vite Environment Variables:** https://vitejs.dev/guide/env-and-mode.html

### Support Contacts

For implementation support:
- **Technical Issues:** Check AGENTS.md in project root
- **Analytics Strategy:** Review SEO_INTEGRATION_GUIDE.md
- **Custom Development:** Contact your developer

---

## Quick Reference

### Environment Variables

| Variable | Type | Example | Required |
|----------|------|---------|----------|
| `VITE_GA4_MEASUREMENT_ID` | string | `G-XXXXXXXXXX` | No |
| `VITE_FB_PIXEL_ID` | string | `1234567890123456` | No |
| `VITE_ENABLE_ANALYTICS` | boolean | `true` | No (default: true) |
| `VITE_ANALYTICS_DEBUG` | boolean | `false` | No (default: false) |

### Key Events Tracked

| Event Name | GA4 Event | FB Pixel Event | Trigger |
|------------|-----------|----------------|---------|
| WhatsApp Click | `generate_lead` | `Lead` | Any WhatsApp button |
| Product View | `view_item` | `ViewContent` | Viewing product card |
| Scroll Depth | `scroll` | Custom | 25%, 50%, 75%, 100% |
| Navigation | `navigation` | Custom | Menu link click |
| Form Submit | `form_submit` | `SubmitApplication` | Form submission |

### Console Commands

```javascript
// Open analytics dashboard
window.tokoAnalytics.openDashboard()

// Get all events
window.tokoAnalytics.getEvents()

// Get summary
window.tokoAnalytics.getSummary()

// Download CSV
window.tokoAnalytics.download()

// Clear data
window.tokoAnalytics.clear()
```

---

**Last Updated:** December 2025  
**Version:** 1.0
