#!/bin/bash

# SEO Verification Script
# Quick check untuk memastikan semua SEO assets ready before deploy

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║        SEO Pre-Deployment Verification Script            ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

ERRORS=0
WARNINGS=0

# Check 1: OG Image exists
echo "📸 Checking OG Image..."
if [ -f "public/og-image.jpg" ]; then
    SIZE=$(du -h public/og-image.jpg | cut -f1)
    echo "   ✅ og-image.jpg exists ($SIZE)"
else
    echo "   ❌ ERROR: og-image.jpg NOT FOUND"
    ERRORS=$((ERRORS + 1))
fi

# Check 2: Logo exists
echo "📸 Checking Logo..."
if [ -f "public/database-logo.jpg" ]; then
    SIZE=$(du -h public/database-logo.jpg | cut -f1)
    echo "   ✅ database-logo.jpg exists ($SIZE)"
else
    echo "   ⚠️  WARNING: database-logo.jpg NOT FOUND"
    WARNINGS=$((WARNINGS + 1))
fi

# Check 3: Sitemap exists
echo "🗺️  Checking Sitemap..."
if [ -f "public/sitemap.xml" ]; then
    URLS=$(grep -c "<url>" public/sitemap.xml)
    echo "   ✅ sitemap.xml exists ($URLS URLs)"
else
    echo "   ❌ ERROR: sitemap.xml NOT FOUND"
    ERRORS=$((ERRORS + 1))
fi

# Check 4: robots.txt exists and has sitemap
echo "🤖 Checking robots.txt..."
if [ -f "public/robots.txt" ]; then
    if grep -q "Sitemap:" public/robots.txt; then
        echo "   ✅ robots.txt exists with Sitemap reference"
    else
        echo "   ⚠️  WARNING: robots.txt missing Sitemap reference"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo "   ❌ ERROR: robots.txt NOT FOUND"
    ERRORS=$((ERRORS + 1))
fi

# Check 5: SEOHead component exists
echo "🧩 Checking SEOHead Component..."
if [ -f "src/components/SEOHead.tsx" ]; then
    echo "   ✅ SEOHead.tsx exists"
else
    echo "   ❌ ERROR: SEOHead.tsx NOT FOUND"
    ERRORS=$((ERRORS + 1))
fi

# Check 6: Build succeeds
echo "🔨 Running Build Test..."
npm run build > /tmp/build-output.log 2>&1
if [ $? -eq 0 ]; then
    echo "   ✅ Build successful"
else
    echo "   ❌ ERROR: Build FAILED"
    echo "      Check /tmp/build-output.log for details"
    ERRORS=$((ERRORS + 1))
fi

# Check 7: OG tags in index.html
echo "🏷️  Checking Static Meta Tags..."
if grep -q "og:image.*og-image.jpg" index.html; then
    echo "   ✅ index.html has og:image → og-image.jpg"
else
    echo "   ⚠️  WARNING: index.html og:image may not point to og-image.jpg"
    WARNINGS=$((WARNINGS + 1))
fi

# Check 8: No "Lovable" references in meta tags
echo "🔍 Checking for Lovable Placeholders..."
if grep -ri "lovable" index.html public/*.xml 2>/dev/null | grep -v "node_modules" | grep -q "lovable"; then
    echo "   ⚠️  WARNING: Found 'lovable' references"
    WARNINGS=$((WARNINGS + 1))
else
    echo "   ✅ No Lovable placeholders found"
fi

# Check 9: Schema.ts has toAbsoluteUrl helper
echo "🔧 Checking Schema Helper Functions..."
if grep -q "export function toAbsoluteUrl" src/lib/schema.ts; then
    echo "   ✅ toAbsoluteUrl() helper exists in schema.ts"
else
    echo "   ⚠️  WARNING: toAbsoluteUrl() helper not found in schema.ts"
    WARNINGS=$((WARNINGS + 1))
fi

# Check 10: Base URL configuration in config.ts
echo "⚙️  Checking Base URL Configuration..."
if [ -f "src/lib/config.ts" ]; then
    if grep -q "baseUrl.*import.meta.env.VITE_APP_BASE_URL" src/lib/config.ts; then
        echo "   ✅ baseUrl configured in config.ts"
    else
        echo "   ⚠️  WARNING: baseUrl may not be properly configured"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo "   ❌ ERROR: config.ts NOT FOUND"
    ERRORS=$((ERRORS + 1))
fi

# Check 11: Schema.org JSON-LD in index.html
echo "📋 Checking Schema.org Markup..."
if grep -q "application/ld+json" index.html; then
    # Count schema types
    SCHEMA_COUNT=$(grep -o "@type" index.html | wc -l)
    echo "   ✅ JSON-LD schema found ($SCHEMA_COUNT @type declarations)"
    
    # Check for LocalBusiness
    if grep -q "ComputerStore\|LocalBusiness" index.html; then
        echo "   ✅ LocalBusiness/ComputerStore schema present"
    else
        echo "   ⚠️  WARNING: LocalBusiness schema may be missing"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo "   ❌ ERROR: No JSON-LD schema markup found in index.html"
    ERRORS=$((ERRORS + 1))
fi

# Check 12: Schema URLs are absolute (not relative)
echo "🔗 Checking Schema URLs..."
if grep -q "application/ld+json" index.html; then
    # Extract JSON-LD and check for relative URLs in schema
    if sed -n '/<script type="application\/ld+json">/,/<\/script>/p' index.html | grep -q '"url".*":.*"http'; then
        echo "   ✅ Schema URLs appear to be absolute"
    else
        echo "   ⚠️  WARNING: Some schema URLs may be relative (should use https://)"
        WARNINGS=$((WARNINGS + 1))
    fi
fi

# Summary
echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                    VERIFICATION SUMMARY                   ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo "✅ ALL CHECKS PASSED - READY TO DEPLOY!"
    echo ""
    echo "Next Steps:"
    echo "  1. Deploy to production"
    echo "  2. Test Facebook Debugger"
    echo "  3. Test WhatsApp preview"
    echo "  4. Submit sitemap to Google Search Console"
    echo ""
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo "⚠️  PASSED WITH $WARNINGS WARNING(S)"
    echo ""
    echo "Warnings can be ignored, but recommended to fix before deploy."
    echo ""
    exit 0
else
    echo "❌ FAILED WITH $ERRORS ERROR(S) and $WARNINGS WARNING(S)"
    echo ""
    echo "Fix errors before deploying to production!"
    echo ""
    exit 1
fi
