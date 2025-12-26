# SEO Testing & Validation Checklist

## 📋 Overview
This document provides a comprehensive checklist for testing and validating SEO implementation for Database Computer website.

**Last Updated:** 26 December 2025  
**Project:** Database Computer Landing Site  
**Domain:** https://database.id

---

## ✅ Phase 1: Local Development Testing

### 1.1 Build & Serve Test
```bash
# Build production version
npm run build

# Preview production build
npm run preview

# Check for build errors
npm run build 2>&1 | grep -i "error"
```

**Expected Result:** ✅ Build completes without errors

---

### 1.2 Meta Tags Validation (Local)

**Test Steps:**
1. Run `npm run dev` or `npm run preview`
2. Open browser: `http://localhost:8080`
3. View page source (Ctrl+U or Cmd+U)
4. Search for `<meta property="og:` to verify Open Graph tags

**Checklist:**
- [ ] `<title>` tag present and descriptive
- [ ] `<meta name="description">` present (150-160 chars)
- [ ] `<meta property="og:title">` present
- [ ] `<meta property="og:description">` present
- [ ] `<meta property="og:image">` points to `/og-image.jpg`
- [ ] `<meta property="og:url">` correct
- [ ] `<meta name="twitter:card">` = `summary_large_image`
- [ ] `<link rel="canonical">` present

---

### 1.3 Image Assets Check

**Test Commands:**
```bash
# Verify OG images exist
ls -lh public/og-image.jpg
ls -lh public/database-logo.jpg

# Check image dimensions
file public/og-image.jpg
# Expected: JPEG, 1200x630

file public/database-logo.jpg
# Expected: JPEG, 1080x1080
```

**Checklist:**
- [ ] `/public/og-image.jpg` exists (1200×630)
- [ ] `/public/database-logo.jpg` exists (1080×1080)
- [ ] Both images < 1MB in size
- [ ] Images accessible at `http://localhost:8080/og-image.jpg`

---

## 🌐 Phase 2: Production Deployment Testing

### 2.1 Deploy to Production
```bash
# Build for production
npm run build

# Deploy to Vercel/Netlify/hosting
# (Follow your deployment workflow)
```

**Wait 5-10 minutes** for CDN propagation before testing.

---

### 2.2 Live URL Validation

**Test URLs:**
- [ ] Homepage: `https://database.id`
- [ ] Product Detail: `https://database.id/products/1` (example)
- [ ] Privacy Policy: `https://database.id/privacy-policy`
- [ ] Terms: `https://database.id/terms-of-service`
- [ ] Refund: `https://database.id/refund-policy`
- [ ] FAQ: `https://database.id/faq-legal`
- [ ] 404 Page: `https://database.id/non-existent-page`

**For each URL:**
1. Open in browser
2. View page source (Ctrl+U)
3. Verify meta tags are present
4. Check no "Lovable" or placeholder text

---

### 2.3 OG Image Accessibility Test

**Test Direct Image URLs:**
```bash
# Test via curl
curl -I https://database.id/og-image.jpg
# Expected: HTTP 200 OK, Content-Type: image/jpeg

curl -I https://database.id/database-logo.jpg
# Expected: HTTP 200 OK, Content-Type: image/jpeg
```

**Browser Test:**
1. Open: `https://database.id/og-image.jpg`
2. Image should display correctly
3. Check dimensions: 1200×630

**Checklist:**
- [ ] `https://database.id/og-image.jpg` returns 200 (not 404)
- [ ] `https://database.id/database-logo.jpg` returns 200
- [ ] Images display in browser
- [ ] No CORS errors in console

---

## 🔍 Phase 3: Social Media Crawler Testing

### 3.1 Facebook Sharing Debugger

**Tool:** https://developers.facebook.com/tools/debug/

**Test Steps:**
1. Paste URL: `https://database.id`
2. Click **"Debug"** or **"Scrape Again"**
3. Wait for results

**Expected Results:**
- [ ] **Title:** "Database Computer | Official Store Pontianak"
- [ ] **Description:** "Database Computer - Gold Merchant..."
- [ ] **Image:** Shows `og-image.jpg` (1200×630)
- [ ] **No warnings** about missing tags
- [ ] **No 404 errors** for image

**Common Issues:**
- **"Could not download image"** → Check image URL accessibility
- **"Image too small"** → Minimum 200×200, recommended 1200×630
- **"Blocked by robots.txt"** → Check `robots.txt` allows crawlers

**Repeat for:**
- [ ] Homepage: `https://database.id`
- [ ] Product pages: `https://database.id/products/1`

---

### 3.2 Twitter Card Validator

**Tool:** https://cards-dev.twitter.com/validator

**Test Steps:**
1. Paste URL: `https://database.id`
2. Click **"Preview card"**

**Expected Results:**
- [ ] Card Type: **Summary Card with Large Image**
- [ ] **Title** displayed correctly
- [ ] **Description** displayed correctly
- [ ] **Image** displays (1200×630)
- [ ] No errors or warnings

**Note:** Twitter validator can be slow or unavailable. If unavailable:
- Check meta tags manually (see Phase 2.2)
- Test actual tweet: Share URL on Twitter and check preview

---

### 3.3 LinkedIn Post Inspector

**Tool:** https://www.linkedin.com/post-inspector/

**Test Steps:**
1. Paste URL: `https://database.id`
2. Click **"Inspect"**

**Expected Results:**
- [ ] **Title** extracted correctly
- [ ] **Description** extracted
- [ ] **Image** displays
- [ ] Post preview looks professional

---

### 3.4 WhatsApp Link Preview Test

**Test Method 1: Real Device**
1. Open WhatsApp (mobile or desktop)
2. Paste link: `https://database.id`
3. Wait 2-3 seconds for preview to load

**Expected Results:**
- [ ] **Image** displays (og-image.jpg)
- [ ] **Title** displays
- [ ] **Description** displays
- [ ] No "lovable.dev" or placeholder text

**Test Method 2: WhatsApp Business API Simulator**
- Use: https://business.whatsapp.com/developers/link-preview-debugger
- Paste: `https://database.id`
- Verify preview

**Common Issues:**
- **No preview** → WhatsApp caches aggressively (can take 24-48 hours)
- **Old preview** → Share `https://database.id?v=2` (cache bypass)

---

## 🤖 Phase 4: Search Engine Testing

### 4.1 Google Search Console

**Setup Steps:**
1. Go to: https://search.google.com/search-console
2. Add property: `https://database.id`
3. Verify ownership (DNS/HTML file method)

**After Verification:**
1. **Submit Sitemap:**
   - URL: `https://database.id/sitemap.xml`
   - Go to: Sitemaps → Add new sitemap → Submit

2. **Request Indexing:**
   - Go to: URL Inspection
   - Enter: `https://database.id`
   - Click: **Request Indexing**

3. **Check Coverage:**
   - Wait 24-48 hours
   - Go to: Coverage → Valid pages
   - Verify homepage indexed

**Checklist:**
- [ ] Property verified
- [ ] Sitemap submitted (0 errors)
- [ ] Homepage requested for indexing
- [ ] Mobile-friendly test passed
- [ ] Core Web Vitals acceptable

---

### 4.2 Google Rich Results Test

**Tool:** https://search.google.com/test/rich-results

**Test Steps:**
1. Enter URL: `https://database.id`
2. Click **"Test URL"**

**Expected Results:**
- [ ] **Organization** structured data detected
- [ ] **LocalBusiness** structured data detected
- [ ] **No errors** in JSON-LD
- [ ] All required properties present

**Check JSON-LD:**
```json
{
  "@type": "ComputerStore",
  "name": "Database Computer",
  "address": { ... },
  "openingHoursSpecification": [ ... ]
}
```

---

### 4.3 Google PageSpeed Insights

**Tool:** https://pagespeed.web.dev/

**Test Steps:**
1. Enter URL: `https://database.id`
2. Click **"Analyze"**
3. Wait for results (both Mobile & Desktop)

**Target Scores:**
- [ ] **Performance:** > 80 (Green)
- [ ] **Accessibility:** > 90
- [ ] **Best Practices:** > 90
- [ ] **SEO:** > 95

**Key Metrics:**
- [ ] **LCP (Largest Contentful Paint):** < 2.5s
- [ ] **FID (First Input Delay):** < 100ms
- [ ] **CLS (Cumulative Layout Shift):** < 0.1

**SEO Checks:**
- [ ] Document has `<title>`
- [ ] Document has meta description
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] Page is mobile-friendly

---

## 📱 Phase 5: Mobile Testing

### 5.1 Mobile-Friendly Test

**Tool:** https://search.google.com/test/mobile-friendly

**Test Steps:**
1. Enter URL: `https://database.id`
2. Click **"Test URL"**

**Expected Results:**
- [ ] **"Page is mobile-friendly"** message
- [ ] No mobile usability issues
- [ ] Text readable without zooming
- [ ] Tap targets appropriately sized

---

### 5.2 Real Device Testing

**Test Devices:**
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad/Android)

**Test Actions:**
1. Open: `https://database.id`
2. Check page loads correctly
3. Tap links (header, footer, CTA buttons)
4. Share page via native share (check preview)

**WhatsApp Share Test:**
1. Open WhatsApp on mobile
2. Share link: `https://database.id`
3. Verify preview shows:
   - ✅ OG image
   - ✅ Title
   - ✅ Description

---

## 🔒 Phase 6: Security & Performance

### 6.1 Security Headers

**Tool:** https://securityheaders.com/

**Test URL:** `https://database.id`

**Expected Headers:**
- [ ] `X-Frame-Options`
- [ ] `X-Content-Type-Options`
- [ ] `Referrer-Policy`
- [ ] `Permissions-Policy`

**Target Grade:** B or higher

---

### 6.2 SSL Certificate

**Test:**
```bash
curl -I https://database.id | grep -i "strict-transport"
```

**Checklist:**
- [ ] HTTPS enabled (not HTTP)
- [ ] SSL certificate valid (not expired)
- [ ] No mixed content warnings
- [ ] HSTS header present

---

### 6.3 Robots.txt & Sitemap

**Test robots.txt:**
1. Open: `https://database.id/robots.txt`
2. Verify content:
   ```
   User-agent: *
   Allow: /
   
   Sitemap: https://database.id/sitemap.xml
   ```

**Test sitemap.xml:**
1. Open: `https://database.id/sitemap.xml`
2. Verify:
   - [ ] Valid XML format
   - [ ] Contains all important URLs
   - [ ] URLs return 200 (not 404)
   - [ ] `<lastmod>` dates recent

---

## 📊 Phase 7: Analytics Verification

### 7.1 Google Analytics 4

**Check GA4 is Firing:**
1. Open: `https://database.id`
2. Open DevTools (F12) → Network tab
3. Filter: `collect?v=2` or `gtag`
4. Reload page
5. Verify GA4 request sent

**GA4 Dashboard:**
1. Go to: https://analytics.google.com
2. Select property
3. Realtime → Overview
4. Open website in another tab
5. Verify session appears in realtime

**Checklist:**
- [ ] GA4 script loads
- [ ] Pageview event sent
- [ ] No console errors
- [ ] Session appears in realtime

---

### 7.2 Facebook Pixel

**Check Pixel is Firing:**
1. Install: **Facebook Pixel Helper** (Chrome extension)
2. Open: `https://database.id`
3. Click Pixel Helper icon
4. Verify pixel detected

**Expected Events:**
- [ ] **PageView** event
- [ ] No errors in Pixel Helper

**Facebook Events Manager:**
1. Go to: https://business.facebook.com/events_manager
2. Select Pixel
3. Test Events → Open website
4. Verify events received

---

## 🧪 Phase 8: Regression Testing

### 8.1 After Each Deployment

Run this quick checklist after every production deploy:

**5-Minute Quick Check:**
- [ ] Homepage loads without errors
- [ ] Meta tags present (view source)
- [ ] `/og-image.jpg` accessible (200 OK)
- [ ] `/sitemap.xml` accessible
- [ ] No console errors (F12)
- [ ] Mobile view responsive

**15-Minute Full Check:**
- [ ] Facebook Debugger: Homepage
- [ ] Twitter Validator: Homepage  
- [ ] WhatsApp preview test
- [ ] Google Search Console: No new errors
- [ ] PageSpeed Insights: Scores > 80

---

## 🚨 Common Issues & Troubleshooting

### Issue 1: Facebook Shows Old Image

**Problem:** Facebook Debugger shows old/cached image

**Solution:**
```bash
# Option 1: Force re-scrape
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter URL: https://database.id
3. Click "Scrape Again" multiple times (3-5x)

# Option 2: Cache-bust URL
Share: https://database.id?v=20251226

# Option 3: Update og:image URL with timestamp
<meta property="og:image" content="https://database.id/og-image.jpg?v=2" />
```

---

### Issue 2: WhatsApp No Preview

**Problem:** Link preview doesn't appear in WhatsApp

**Causes:**
1. **Too many requests:** WhatsApp rate-limits preview fetching
2. **Server slow:** Preview fetch timeout
3. **Cache:** WhatsApp caches previews for 7 days

**Solutions:**
- Wait 5-10 minutes and try again
- Test on different device/account
- Use cache-bust: `?v=20251226`
- Verify OG tags with Facebook Debugger first (WhatsApp uses similar crawler)

---

### Issue 3: Image 404 Error

**Problem:** Social media shows "image not found"

**Debug Steps:**
```bash
# 1. Check file exists
ls -la public/og-image.jpg

# 2. Check deployed version
curl -I https://database.id/og-image.jpg

# 3. Check Vite config includes public folder
# vite.config.ts should NOT have publicDir override

# 4. Rebuild and redeploy
npm run build
# Deploy
```

**Common Causes:**
- Image not in `/public/` folder
- Case sensitivity: `OG-Image.jpg` vs `og-image.jpg`
- CDN not synced (wait 5-10 minutes)

---

### Issue 4: Meta Tags Not Updating

**Problem:** Changed meta tags but social media shows old content

**Solutions:**

**For Static HTML (index.html):**
- Tags update immediately on next deployment
- Force refresh: Ctrl+Shift+R (hard reload)

**For React Helmet (dynamic pages):**
- Ensure `<HelmetProvider>` wraps app (App.tsx)
- Ensure `<SEOHead />` component used
- Check React Helmet in DevTools:
  ```javascript
  // Console
  document.querySelector('meta[property="og:title"]').content
  ```

**Social Media Cache:**
- Use debuggers to force re-scrape (see Issue 1)
- Social media caches aggressively (24-48 hours)

---

## 📝 Testing Schedule

### After Initial Implementation
- [ ] Complete all Phase 1-8 tests (one-time)
- [ ] Document any issues found
- [ ] Fix issues and retest

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Review GA4 traffic reports
- [ ] Check Core Web Vitals

### After Each Deploy
- [ ] Run 5-minute quick check
- [ ] If major changes: Run 15-minute full check

### Monthly
- [ ] Review PageSpeed Insights scores
- [ ] Check backlinks (Google Search Console)
- [ ] Update sitemap.xml if new pages added
- [ ] Test all social media validators

---

## ✅ Final Checklist Summary

**Before Going Live:**
- [ ] All meta tags present (title, description, OG, Twitter)
- [ ] OG image optimized (1200×630)
- [ ] OG image accessible (200 OK)
- [ ] Sitemap generated and submitted
- [ ] robots.txt updated
- [ ] Facebook Debugger: ✅ Pass
- [ ] Twitter Validator: ✅ Pass
- [ ] WhatsApp Preview: ✅ Shows correctly
- [ ] Google Search Console: Verified + Sitemap submitted
- [ ] PageSpeed Insights: All scores > 80
- [ ] Mobile-friendly: ✅ Pass
- [ ] SSL certificate: ✅ Valid
- [ ] GA4 tracking: ✅ Working
- [ ] No "Lovable" or placeholder text anywhere

**After 24 Hours:**
- [ ] Google Search Console: Check coverage
- [ ] Real social media test: Share on Facebook/WhatsApp
- [ ] Monitor analytics for traffic

**After 7 Days:**
- [ ] Google Search: Search "Database Computer Pontianak"
- [ ] Verify homepage appears in results
- [ ] Check if rich snippets appear

---

## 🎯 Success Criteria

### Minimum Requirements (Must Have)
✅ All pages have unique, descriptive meta tags  
✅ OG image displays correctly on Facebook/WhatsApp  
✅ No 404 errors for images or pages  
✅ Mobile-friendly test passes  
✅ PageSpeed SEO score > 90  

### Recommended Targets (Should Have)
✅ Facebook Debugger: 0 warnings  
✅ Twitter Card: Preview displays  
✅ PageSpeed Performance > 80  
✅ Google Search Console: 0 errors  
✅ Sitemap submitted and indexed  

### Stretch Goals (Nice to Have)
✅ PageSpeed Performance > 95  
✅ Rich snippets appear in Google  
✅ Featured snippet for brand search  
✅ Top 3 ranking for "Database Computer Pontianak"  

---

## 📞 Support & Resources

### Testing Tools Directory
- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** https://www.linkedin.com/post-inspector/
- **Google Search Console:** https://search.google.com/search-console
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly:** https://search.google.com/test/mobile-friendly
- **Rich Results:** https://search.google.com/test/rich-results
- **Security Headers:** https://securityheaders.com/

### Documentation
- **Open Graph Protocol:** https://ogp.me/
- **Twitter Cards:** https://developer.twitter.com/en/docs/twitter-for-websites/cards
- **Schema.org:** https://schema.org/LocalBusiness
- **Google SEO Starter Guide:** https://developers.google.com/search/docs/beginner/seo-starter-guide

---

**Document Version:** 1.0  
**Last Updated:** 26 December 2025  
**Next Review:** After production deployment
