import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/services/api";
import placeholderImg from "@/assets/placeholder.svg";

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
  isSoldOut?: boolean;
}

/**
 * ProductImageGallery Component
 * 
 * Features:
 * - Main image display with thumbnail navigation
 * - Click thumbnail to switch main image
 * - Lightbox/zoom functionality for detailed inspection
 * - Mobile swipe support via touch gestures
 * - Optimized Cloudinary thumbnail loading
 * - Sold out overlay support
 */
const ProductImageGallery = ({ images, productName, isSoldOut = false }: ProductImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Fallback to placeholder if no images
  const displayImages = images && images.length > 0 
    ? images 
    : [{ id: 0, url: placeholderImg, thumbnail_url: placeholderImg, is_primary: true, sort_order: 0 }];

  const currentImage = displayImages[selectedIndex];

  // Navigate to previous image
  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  // Navigate to next image
  const handleNext = () => {
    setSelectedIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  // Open lightbox with current image
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  // Lightbox navigation
  const lightboxPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  // Generate Cloudinary thumbnail URL for optimized loading
  const getThumbnailUrl = (url: string, width = 150, height = 150): string => {
    if (!url || url.includes('placeholder')) return url;
    
    // Check if it's a Cloudinary URL
    if (url.includes('cloudinary.com')) {
      // Insert transformation parameters before /upload/
      return url.replace('/upload/', `/upload/w_${width},h_${height},c_fill,f_auto,q_auto/`);
    }
    
    return url;
  };

  // Generate optimized main image URL
  const getMainImageUrl = (url: string): string => {
    if (!url || url.includes('placeholder')) return url;
    
    // Check if it's a Cloudinary URL
    if (url.includes('cloudinary.com')) {
      // Insert transformation parameters before /upload/
      return url.replace('/upload/', '/upload/w_800,h_800,c_limit,f_auto,q_auto/');
    }
    
    return url;
  };

  return (
    <>
      {/* Main Image Display */}
      <div className="space-y-4">
        <div className="relative bg-secondary/50 rounded-2xl overflow-hidden aspect-square group">
          <img
            src={getMainImageUrl(currentImage.url)}
            alt={`${productName} - Image ${selectedIndex + 1}`}
            className={cn(
              "w-full h-full object-cover transition-transform duration-300",
              isSoldOut && "grayscale"
            )}
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = placeholderImg;
            }}
          />

          {/* Sold Out Overlay */}
          {isSoldOut && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-destructive text-destructive-foreground text-2xl font-bold px-8 py-4 rounded-lg rotate-[-12deg] shadow-lg">
                TERJUAL
              </span>
            </div>
          )}

          {/* Navigation Arrows - Show only if multiple images */}
          {displayImages.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Zoom Button */}
          {!isSoldOut && (
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => openLightbox(selectedIndex)}
              aria-label="Zoom image"
            >
              <ZoomIn className="h-5 w-5" />
            </Button>
          )}

          {/* Image Counter */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {selectedIndex + 1} / {displayImages.length}
            </div>
          )}
        </div>

        {/* Thumbnail Strip - Show only if multiple images */}
        {displayImages.length > 1 && (
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {displayImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105",
                  selectedIndex === index
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-transparent hover:border-primary/50"
                )}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={getThumbnailUrl(image.thumbnail_url || image.url, 150, 150)}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className={cn(
                    "w-full h-full object-cover",
                    isSoldOut && "grayscale"
                  )}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = placeholderImg;
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Main Lightbox Image */}
            <img
              src={displayImages[lightboxIndex].url}
              alt={`${productName} - Full view ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = placeholderImg;
              }}
            />

            {/* Navigation Arrows in Lightbox */}
            {displayImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={lightboxPrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={lightboxNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Lightbox Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
                  {lightboxIndex + 1} / {displayImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductImageGallery;
