# Color Guidelines - Database Computer Landing Site

## Overview
This document outlines the color system and best practices for maintaining consistency across the landing site.

**Last Updated:** December 24, 2025  
**Version:** 2.0

---

## Color System Architecture

The site uses a **CSS Variable-based theming system** with HSL color values for maximum flexibility and maintainability.

### Core Principles
1. **Semantic Naming**: Colors are named by purpose (primary, success, warning) not appearance
2. **Single Source of Truth**: All colors defined in `src/index.css` CSS variables
3. **Consistency**: Use theme tokens instead of direct Tailwind colors
4. **Accessibility**: Maintain WCAG AA contrast ratios

---

## Theme Color Tokens

### Base Colors
Defined in `src/index.css` under `:root`

| Token | HSL Value | Usage | Example |
|-------|-----------|-------|---------|
| `--background` | `0 0% 100%` | Main background | Body, cards |
| `--foreground` | `220 13% 20%` | Main text | Headings, body text |
| `--primary` | `220 10% 25%` | Brand color | Buttons, links, accents |
| `--primary-foreground` | `0 0% 100%` | Text on primary | Button text |
| `--secondary` | `220 10% 95%` | Secondary surfaces | Hover states, badges |
| `--secondary-foreground` | `220 13% 20%` | Text on secondary | |
| `--muted` | `220 10% 90%` | Muted backgrounds | Disabled states |
| `--muted-foreground` | `220 10% 45%` | Muted text | Descriptions, captions |
| `--accent` | `220 10% 25%` | Accent elements | Special highlights |
| `--accent-foreground` | `0 0% 100%` | Text on accent | |

### Semantic Status Colors

| Token | HSL Value | Usage | Example |
|-------|-----------|-------|---------|
| `--success` | `142 71% 45%` | Success states | Stock available, checkmarks |
| `--success-foreground` | `0 0% 100%` | Text on success | |
| `--warning` | `38 92% 50%` | Warning states | Important notices |
| `--warning-foreground` | `0 0% 100%` | Text on warning | |
| `--info` | `217 91% 60%` | Info states | Badges, certification icons |
| `--info-foreground` | `0 0% 100%` | Text on info | |
| `--destructive` | `0 84% 60%` | Error/destructive | Sold out, errors |
| `--destructive-foreground` | `0 0% 100%` | Text on destructive | |

### Utility Colors

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--card` | `0 0% 98%` | Card backgrounds |
| `--card-foreground` | `220 13% 20%` | Text on cards |
| `--border` | `220 10% 88%` | Borders, dividers |
| `--input` | `220 10% 88%` | Input borders |
| `--ring` | `220 10% 25%` | Focus rings |

### Contact/WhatsApp Colors

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--whatsapp` | `142 70% 49%` | WhatsApp brand | Main WhatsApp button |
| `--contact-sales` | `217 91% 60%` | Sales contact | Sales team button |
| `--contact-service` | `38 92% 50%` | Service contact | Service team button |
| `--contact-owner` | `271 76% 53%` | Owner contact | Owner direct line button |

---

## Gradient Tokens

Defined as CSS custom properties in `src/index.css`

```css
--gradient-primary: linear-gradient(135deg, hsl(220 10% 30%) 0%, hsl(220 10% 20%) 100%);
--gradient-card: linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(0 0% 98%) 100%);
--gradient-hero: linear-gradient(180deg, hsl(0 0% 97%) 0%, hsl(0 0% 100%) 50%, hsl(0 0% 100%) 100%);
--gradient-service-icon: linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 100%);
--gradient-instagram: linear-gradient(135deg, hsl(271 76% 53%) 0%, hsl(330 81% 60%) 50%, hsl(38 92% 50%) 100%);
```

### Utility Classes

```css
.hero-gradient { background: var(--gradient-hero); }
.instagram-gradient { background: var(--gradient-instagram); }
.glass-card { /* Glassmorphism effect */ }
```

---

## Usage Guidelines

### ✅ DO: Use Semantic Tokens

```tsx
// Good - Uses semantic token
<p className="text-foreground">Main heading</p>
<p className="text-muted-foreground">Secondary text</p>
<div className="bg-success text-success-foreground">Success message</div>
```

### ❌ DON'T: Use Direct Tailwind Colors

```tsx
// Bad - Direct color usage
<p className="text-gray-900">Heading</p>
<p className="text-gray-600">Description</p>
<div className="bg-green-500 text-white">Success</div>
```

### Text Colors

| Purpose | Class | When to Use |
|---------|-------|-------------|
| Primary text | `text-foreground` | Headings, important text |
| Secondary text | `text-muted-foreground` | Descriptions, captions |
| Links/accents | `text-primary` | Interactive elements |
| Success | `text-success` | Positive states |
| Warning | `text-warning` | Alerts, important notices |
| Error | `text-destructive` | Errors, sold out |

### Background Colors

| Purpose | Class | When to Use |
|---------|-------|-------------|
| Main background | `bg-background` | Page background |
| Card background | `bg-card` | Content cards |
| Secondary | `bg-secondary` | Hover states |
| Muted | `bg-muted` | Disabled/inactive |
| Success | `bg-success` | Success indicators |
| Warning | `bg-warning` | Warning boxes |

### Opacity Modifiers

**Standard opacity levels:** Use `/10`, `/20`, `/30`, `/50`, `/75` for consistency

```tsx
// Good - Standard opacity
<div className="bg-success/10 border border-success/20">
  Success message with subtle background
</div>

// Avoid - Non-standard opacity
<div className="bg-success/15 border border-success/35">
```

---

## Component Patterns

### Status Badges

```tsx
// Stock available
<Badge className="bg-success/10 border-success/20 text-success">
  Available
</Badge>

// Warning
<Badge className="bg-warning/10 border-warning/20 text-warning">
  Low Stock
</Badge>

// Sold out
<Badge className="bg-destructive/10 border-destructive/20 text-destructive">
  Sold Out
</Badge>
```

### Info Boxes

```tsx
// Success box
<div className="bg-success/10 border border-success/20 rounded-lg p-4">
  <CheckCircle className="text-success" />
  <p className="text-success">Success message</p>
</div>

// Warning box
<div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
  <AlertTriangle className="text-warning" />
  <p className="text-warning">Warning message</p>
</div>

// Error box
<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
  <XCircle className="text-destructive" />
  <p className="text-destructive">Error message</p>
</div>
```

### Buttons

Use Button component variants instead of direct colors:

```tsx
<Button variant="default">Primary action</Button>
<Button variant="secondary">Secondary action</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline style</Button>
<Button variant="ghost">Ghost style</Button>
```

---

## Special Cases

### WhatsApp Button Exception
The main WhatsApp floating button uses `--whatsapp` token for brand recognition:

```tsx
<Button className="bg-whatsapp hover:bg-whatsapp/90">
  Chat WhatsApp
</Button>
```

### Instagram Gradient
Use `instagram-gradient` utility class for Instagram CTAs:

```tsx
<Button className="instagram-gradient hover:opacity-90">
  Follow Instagram
</Button>
```

### Brand Colors in External Links
When linking to external platforms, you MAY use their brand colors for recognition:
- WhatsApp: `bg-whatsapp` (green)
- Instagram: `instagram-gradient` (purple-pink-orange)
- Tokopedia: `text-success` (green)
- Shopee: `text-warning` (orange)

---

## Migration Checklist

When updating existing components:

- [ ] Replace `text-gray-900` with `text-foreground`
- [ ] Replace `text-gray-600` with `text-muted-foreground`
- [ ] Replace `text-gray-300` with `text-border`
- [ ] Replace `bg-white` with `bg-background` or `bg-card`
- [ ] Replace `bg-gray-50` with `bg-secondary`
- [ ] Replace `text-green-*` with `text-success`
- [ ] Replace `text-red-*` with `text-destructive`
- [ ] Replace `text-blue-*` with `text-info`
- [ ] Replace `text-orange-*` with `text-warning`
- [ ] Replace `bg-green-500/10` with `bg-success/10`
- [ ] Replace `bg-red-500/10` with `bg-destructive/10`
- [ ] Replace `border-green-500/20` with `border-success/20`
- [ ] Replace hardcoded gradients with utility classes

---

## Accessibility

### Contrast Ratios
All color combinations must meet WCAG AA standards:
- **Normal text:** Minimum 4.5:1 contrast ratio
- **Large text (18px+):** Minimum 3:1 contrast ratio

### Testing
```bash
# Check contrast in browser DevTools
# Lighthouse accessibility audit
npm run lighthouse
```

---

## File Structure

```
src/
├── index.css                    # Color token definitions
├── tailwind.config.ts          # Tailwind color extensions
└── components/
    └── ui/
        ├── button.tsx          # Button variants
        └── badge.tsx           # Badge variants
```

---

## Future Considerations

### Dark Mode (Planned)
When implementing dark mode, add color overrides:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: 220 13% 10%;
    --foreground: 0 0% 95%;
    /* ... other overrides */
  }
}
```

### Theme Switching
Consider adding theme toggle for:
- Light mode (default)
- Dark mode
- High contrast mode

---

## Resources

- **Tailwind CSS Docs:** https://tailwindcss.com/docs/customizing-colors
- **HSL Color Picker:** https://hslpicker.com/
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **shadcn/ui Theming:** https://ui.shadcn.com/docs/theming

---

## Questions?

For questions about color usage or to propose changes:
1. Check this guide first
2. Review existing components for patterns
3. Discuss with team before adding new colors

**Maintain consistency. Think in systems, not instances.**
