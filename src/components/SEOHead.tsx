import { Helmet } from "react-helmet-async";

export interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  keywords?: string;
  author?: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * SEOHead Component - Reusable SEO meta tags injector
 * 
 * This component handles all SEO meta tags including:
 * - Basic meta tags (title, description, keywords)
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Canonical URLs
 * 
 * @example
 * <SEOHead 
 *   title="Product Name - Database Computer"
 *   description="Product description"
 *   image="/product-image.jpg"
 *   type="product"
 * />
 */
export const SEOHead = ({
  title = "Database Computer | Official Store Laptop, Printer, Smartphone Pontianak",
  description = "Database Computer - Gold Merchant Tokopedia & Shopee Mall Partner. Jual Laptop, Printer Epson/Canon/HP, Tinta Original, Smartphone. Authorized Dealer Pontianak sejak 2015.",
  image = "/og-image.jpg",
  url,
  type = "website",
  keywords = "database computer pontianak, laptop pontianak, printer pontianak, tinta printer pontianak, smartphone pontianak, gold merchant tokopedia, shopee mall pontianak, authorized dealer epson, toko komputer pontianak",
  author = "Database Computer",
  canonical,
  noindex = false,
}: SEOHeadProps) => {
  // Get current URL if not provided
  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "https://database.id");
  
  // Ensure image is absolute URL for social media
  const absoluteImage = image.startsWith("http") 
    ? image 
    : `https://database.id${image.startsWith("/") ? image : `/${image}`}`;

  // Canonical URL (default to current URL without query params)
  const canonicalUrl = canonical || currentUrl.split("?")[0];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Database Computer" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:site" content="@databasecomputer" />
      <meta name="twitter:creator" content="@databasecomputer" />

      {/* Additional SEO */}
      <meta name="language" content="Indonesian" />
      <meta name="geo.region" content="ID-KB" />
      <meta name="geo.placename" content="Pontianak" />
      <meta name="geo.position" content="-0.0263;109.3425" />
      <meta name="ICBM" content="-0.0263, 109.3425" />
    </Helmet>
  );
};

export default SEOHead;
