# Navigation Fix Testing Guide

## 🎯 What Was Fixed

**Problem**: Navigation dari halaman PC Builder ke sections lain tidak berfungsi.

**Root Cause**: 
- Header & Footer menggunakan `<a href="#section">` tags
- Hash links hanya bekerja di homepage (`/`)
- Ketika di `/pc-builder`, hash links tidak berfungsi karena anchor tidak ada

**Solution**: 
- Implemented smart navigation utility (`src/lib/navigation.ts`)
- Updated Header & Footer components to use `useSmartNavigation` hook
- Navigation logic now:
  - Hash links on homepage → smooth scroll to section
  - Hash links on other pages → navigate to `/#section` then smooth scroll
  - Route paths (e.g., `/pc-builder`) → use React Router (no page reload)

---

## 🧪 Manual Testing Checklist

### Prerequisites
Start the dev server:
```bash
npm run dev
# Open http://localhost:8080
```

---

### Test Case 1: Homepage Navigation (Baseline)
**Location**: Homepage (`/`)

**Steps**:
1. Click "Laptop & Komputer" in header
2. Click "Servis" in header
3. Click "Testimoni" in header
4. Click "Kontak" in header
5. Click "Lokasi" in header

**Expected**:
- ✅ Smooth scroll to each section
- ✅ URL updates to `/#products`, `/#services`, etc.
- ✅ No page reload
- ✅ Scroll position correct (not hidden behind header)

---

### Test Case 2: Homepage → PC Builder
**Location**: Homepage (`/`)

**Steps**:
1. Click "Rakit PC" in header

**Expected**:
- ✅ Navigate to `/pc-builder` page
- ✅ No page reload (SPA navigation)
- ✅ PC Builder content displays
- ✅ URL is `/pc-builder`

---

### Test Case 3: PC Builder → Homepage Sections ⭐ (Main Fix)
**Location**: PC Builder (`/pc-builder`)

**Steps**:
1. Click "Laptop & Komputer" in header
2. Observe page navigates to homepage
3. Verify smooth scroll to Products section
4. Go back to PC Builder
5. Click "Servis" in header
6. Verify navigate + smooth scroll to Services section
7. Repeat for: Testimoni, Kontak, Lokasi

**Expected**:
- ✅ Navigate to homepage (`/`)
- ✅ Smooth scroll to target section
- ✅ URL updates to `/#products`, `/#services`, etc.
- ✅ No jarring page jump
- ✅ Correct scroll offset (header doesn't cover content)

---

### Test Case 4: PC Builder → Homepage (Beranda)
**Location**: PC Builder (`/pc-builder`)

**Steps**:
1. Click "Beranda" in header

**Expected**:
- ✅ Navigate to homepage (`/`)
- ✅ Scroll to top of page
- ✅ URL is `/`
- ✅ Smooth scroll animation

---

### Test Case 5: PC Builder → PC Builder (Same Page)
**Location**: PC Builder (`/pc-builder`)

**Steps**:
1. Click "Rakit PC" in header

**Expected**:
- ✅ Stay on same page (no navigation)
- ✅ URL remains `/pc-builder`
- ✅ No flickering or reload

---

### Test Case 6: Mobile Menu Navigation
**Location**: Any page

**Steps**:
1. Resize browser to mobile size (< 768px) or use DevTools mobile view
2. Click hamburger menu icon
3. Mobile menu should open
4. Click "Laptop & Komputer"
5. Verify menu closes
6. Verify navigation works (smooth scroll or navigate)
7. Test from both Homepage and PC Builder pages

**Expected**:
- ✅ Mobile menu opens/closes correctly
- ✅ Menu closes after clicking link
- ✅ Navigation works same as desktop
- ✅ Smooth scroll works on mobile

---

### Test Case 7: Footer Navigation
**Location**: Any page

**Steps**:
1. Scroll to footer
2. Click "Laptop Ready Stock" link
3. Verify navigation to Products section
4. Go to PC Builder page
5. Scroll to footer
6. Click "Jual Beli & Tukar Tambah" link
7. Verify navigate to homepage + scroll to Services

**Expected**:
- ✅ Footer links work from homepage
- ✅ Footer links work from PC Builder
- ✅ Smooth scroll behavior consistent

---

### Test Case 8: Browser Back/Forward
**Location**: Any page

**Steps**:
1. Start on homepage
2. Click "Rakit PC" → now on `/pc-builder`
3. Click browser back button
4. Should return to homepage
5. Click browser forward button
6. Should go to PC Builder again
7. Click "Laptop & Komputer" → navigate to `/#products`
8. Click browser back button
9. Should return to PC Builder

**Expected**:
- ✅ Browser back/forward buttons work correctly
- ✅ Navigation history is maintained
- ✅ No broken states

---

### Test Case 9: Direct URL Access
**Location**: Browser address bar

**Steps**:
1. Type `http://localhost:8080/` → Enter
2. Verify homepage loads
3. Type `http://localhost:8080/pc-builder` → Enter
4. Verify PC Builder loads
5. Type `http://localhost:8080/#products` → Enter
6. Verify homepage loads + scrolls to Products
7. Type `http://localhost:8080/pc-builder#products` → Enter
8. Should redirect to `/#products`

**Expected**:
- ✅ All direct URLs work
- ✅ Hash fragments handled correctly
- ✅ No 404 errors

---

### Test Case 10: Analytics Tracking ⭐
**Location**: Any page

**Steps**:
1. Open browser DevTools Console (F12)
2. Navigate around (header links, footer links)
3. Check console for "📊 Analytics Event:" logs
4. Verify events like:
   - `navigation` / `navigate` / `header-nav`
   - Labels: "Beranda", "Laptop & Komputer", etc.

**Expected**:
- ✅ Analytics events fire for each navigation
- ✅ Event metadata includes: from, to, method
- ✅ No duplicate events
- ✅ Events match actual user actions

---

## 🔍 Edge Cases to Test

### Edge Case 1: Rapid Clicking
- Click multiple navigation links rapidly
- Expected: No race conditions, navigation completes correctly

### Edge Case 2: Scroll Interruption
- Click navigation link
- Immediately scroll manually during smooth scroll
- Expected: Smooth scroll should cancel gracefully

### Edge Case 3: External Links
- Footer social media links (WhatsApp, Instagram)
- Expected: Open in new tab, not affected by navigation logic

### Edge Case 4: Legal Pages
- Footer links: Privacy Policy, Terms of Service, etc.
- Expected: Navigate using React Router (SPA), no page reload

---

## ✅ Success Criteria

All tests pass if:
- ✅ Navigation works from any page to any section
- ✅ Smooth scroll is smooth (not instant jump)
- ✅ URL updates correctly in address bar
- ✅ No page reloads (except external links)
- ✅ Browser back/forward buttons work
- ✅ Mobile menu works correctly
- ✅ Analytics tracking fires correctly
- ✅ No console errors
- ✅ No broken states or infinite loops

---

## 🐛 Known Issues to Watch For

### Potential Issue 1: Scroll Offset
If content is hidden behind fixed header after scroll:
- Adjust `headerOffset` in `src/lib/navigation.ts` (currently 80px)

### Potential Issue 2: Hash Not Found
If element with ID doesn't exist:
- Navigation utility will scroll to top (graceful fallback)
- Check console for warnings

### Potential Issue 3: Mobile Menu Doesn't Close
If mobile menu stays open after clicking:
- Header component has `setIsMobileMenuOpen(false)` in onClick
- Verify state management

---

## 🎨 Visual QA Checklist

- [ ] Smooth scroll animation is smooth (not choppy)
- [ ] No "flash" or "flicker" during navigation
- [ ] Header remains fixed during scroll
- [ ] Sections appear correctly after navigation
- [ ] Mobile menu animation is smooth
- [ ] No layout shift during navigation
- [ ] Scroll position feels natural (not too high/low)

---

## 📊 Performance Check

Open DevTools → Network tab:
- [ ] No full page reloads for internal navigation
- [ ] Only external resources loaded
- [ ] Navigation feels instant (< 100ms)

Open DevTools → Performance tab:
- [ ] Record navigation interaction
- [ ] No long tasks or janky scrolling
- [ ] Smooth 60fps during scroll animation

---

## 🚀 Production Testing (After Deploy)

After deploying to Vercel:
1. Test all scenarios on production URL (database.id)
2. Test on real mobile devices (not just DevTools)
3. Test on different browsers:
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari (iOS)
4. Test with slow network (DevTools → Network → Slow 3G)
5. Verify Google Analytics events in dashboard

---

## 📝 Test Results Template

**Tester**: [Your Name]
**Date**: [Date]
**Environment**: [Local / Production]
**Browser**: [Chrome 120 / Firefox 121 / Safari 17]
**Device**: [Desktop / Mobile]

| Test Case | Status | Notes |
|-----------|--------|-------|
| Homepage Navigation | ⏳ | |
| Homepage → PC Builder | ⏳ | |
| PC Builder → Sections | ⏳ | |
| Mobile Menu | ⏳ | |
| Footer Links | ⏳ | |
| Browser Back/Forward | ⏳ | |
| Analytics Tracking | ⏳ | |

Legend:
- ✅ Pass
- ❌ Fail
- ⚠️ Partial
- ⏳ Not Tested

---

## 🛠️ Troubleshooting

### If navigation doesn't work:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard reload (Ctrl+Shift+R)
3. Check browser console for errors
4. Verify `src/lib/navigation.ts` imported correctly
5. Check network tab for failed requests

### If smooth scroll is jumpy:
1. Check `headerOffset` value in navigation.ts
2. Verify CSS `scroll-behavior` not conflicting
3. Test with browser zoom at 100%

### If analytics not tracking:
1. Check console for "📊 Analytics Event" logs
2. Verify analytics.ts imported correctly
3. Check network tab for GA/FB Pixel requests

---

## 📦 Files Changed

- ✅ **NEW**: `src/lib/navigation.ts` (169 lines)
- ✅ **MODIFIED**: `src/components/Header.tsx` (+13 / -15 lines)
- ✅ **MODIFIED**: `src/components/Footer.tsx` (+9 / -2 lines)

Total: +191 lines, -17 lines

---

## 🎯 Next Steps

1. ✅ Run this testing guide
2. ✅ Fix any issues found
3. ✅ Commit changes
4. ✅ Deploy to production
5. ✅ Monitor analytics
6. ✅ Gather user feedback

---

**Happy Testing! 🚀**
