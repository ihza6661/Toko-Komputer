#!/bin/bash

#############################################
# Portfolio Image Optimizer
# Automated script to optimize images for web
# Usage: ./optimize-image.sh <input-image>
#############################################

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
IMG_DIR="$SCRIPT_DIR/public/img"

echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}    Portfolio Image Optimizer v1.0${NC}"
echo -e "${BLUE}==================================================${NC}"
echo ""

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo -e "${RED}Error: ImageMagick is not installed.${NC}"
    echo "Install it with: sudo apt install imagemagick"
    exit 1
fi

# Check if input file is provided
if [ $# -eq 0 ]; then
    echo -e "${RED}Error: No input file specified.${NC}"
    echo ""
    echo "Usage: ./optimize-image.sh <input-image> [quality]"
    echo ""
    echo "Examples:"
    echo "  ./optimize-image.sh my-project.png"
    echo "  ./optimize-image.sh my-project.png 90"
    echo "  ./optimize-image.sh ~/Downloads/screenshot.png 85"
    echo ""
    exit 1
fi

INPUT_FILE="$1"
QUALITY="${2:-85}"  # Default quality is 85

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo -e "${RED}Error: File '$INPUT_FILE' not found.${NC}"
    exit 1
fi

# Get filename without path and extension
FILENAME=$(basename "$INPUT_FILE")
BASENAME="${FILENAME%.*}"
EXTENSION="${FILENAME##*.}"

# Convert to lowercase for extension check
EXT_LOWER=$(echo "$EXTENSION" | tr '[:upper:]' '[:lower:]')

# Check if it's a supported format
if [[ ! "$EXT_LOWER" =~ ^(png|jpg|jpeg|webp)$ ]]; then
    echo -e "${RED}Error: Unsupported format '$EXTENSION'${NC}"
    echo "Supported formats: PNG, JPG, JPEG, WEBP"
    exit 1
fi

# Show input file info
echo -e "${YELLOW}Input File:${NC}"
echo "  Name: $FILENAME"
echo "  Size: $(du -h "$INPUT_FILE" | cut -f1)"
echo "  Path: $INPUT_FILE"
echo ""

# Get image dimensions
DIMENSIONS=$(identify -format "%wx%h" "$INPUT_FILE" 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "  Dimensions: $DIMENSIONS"
else
    echo -e "${YELLOW}  Warning: Could not read image dimensions${NC}"
fi
echo ""

# Ask for output filename
echo -e "${YELLOW}Enter output filename (without extension):${NC}"
echo -e "${BLUE}Default: $BASENAME${NC}"
read -p "> " OUTPUT_NAME

# Use default if empty
if [ -z "$OUTPUT_NAME" ]; then
    OUTPUT_NAME="$BASENAME"
fi

# Output paths
OUTPUT_PNG="$IMG_DIR/${OUTPUT_NAME}.png"
OUTPUT_WEBP="$IMG_DIR/${OUTPUT_NAME}.webp"

echo ""
echo -e "${YELLOW}Optimization Settings:${NC}"
echo "  Quality: $QUALITY%"
echo "  Output WebP: $OUTPUT_WEBP"
echo ""

# Ask for confirmation
read -p "Proceed with optimization? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Optimization cancelled.${NC}"
    exit 0
fi

echo ""
echo -e "${BLUE}Starting optimization...${NC}"
echo ""

# Copy original to img folder if not already there
if [ "$INPUT_FILE" != "$OUTPUT_PNG" ]; then
    echo "📦 Copying original to: $OUTPUT_PNG"
    cp "$INPUT_FILE" "$OUTPUT_PNG"
    if [ $? -ne 0 ]; then
        echo -e "${RED}Error: Failed to copy file${NC}"
        exit 1
    fi
fi

# Optimize to WebP
echo "⚡ Optimizing to WebP..."
magick "$OUTPUT_PNG" -quality "$QUALITY" -define webp:method=6 "$OUTPUT_WEBP"

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Optimization failed${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}==================================================${NC}"
echo -e "${GREEN}    ✅ Optimization Complete!${NC}"
echo -e "${GREEN}==================================================${NC}"
echo ""

# Show results
ORIGINAL_SIZE=$(stat -f%z "$OUTPUT_PNG" 2>/dev/null || stat -c%s "$OUTPUT_PNG" 2>/dev/null)
WEBP_SIZE=$(stat -f%z "$OUTPUT_WEBP" 2>/dev/null || stat -c%s "$OUTPUT_WEBP" 2>/dev/null)

ORIGINAL_KB=$((ORIGINAL_SIZE / 1024))
WEBP_KB=$((WEBP_SIZE / 1024))
SAVINGS=$((ORIGINAL_SIZE - WEBP_SIZE))
SAVINGS_KB=$((SAVINGS / 1024))
PERCENT_SAVINGS=$((100 - (WEBP_SIZE * 100 / ORIGINAL_SIZE)))

echo -e "${YELLOW}Results:${NC}"
echo "  Original PNG: ${ORIGINAL_KB} KB"
echo "  Optimized WebP: ${WEBP_KB} KB"
echo ""
echo -e "${GREEN}  💾 Saved: ${SAVINGS_KB} KB (${PERCENT_SAVINGS}% reduction)${NC}"
echo ""

# Check if it's a good size for web
if [ $WEBP_KB -lt 100 ]; then
    echo -e "${GREEN}  ✅ Excellent size for web!${NC}"
elif [ $WEBP_KB -lt 200 ]; then
    echo -e "${YELLOW}  ⚠️  Good size, but could be smaller${NC}"
else
    echo -e "${RED}  ⚠️  Consider reducing quality for better performance${NC}"
    echo "     Try: ./optimize-image.sh $INPUT_FILE 75"
fi

echo ""
echo -e "${YELLOW}Files created:${NC}"
echo "  📄 $OUTPUT_PNG (backup)"
echo "  🚀 $OUTPUT_WEBP (use this in portfolio)"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Add to portfolioData.js:"
echo ""
echo -e "${GREEN}   {${NC}"
echo -e "${GREEN}     id: X,${NC}"
echo -e "${GREEN}     title: \"Your Project Name\",${NC}"
echo -e "${GREEN}     img: \"/img/${OUTPUT_NAME}.webp\",${NC}"
echo -e "${GREEN}     desc: \"Your project description...\",${NC}"
echo -e "${GREEN}     button: \"View Project\",${NC}"
echo -e "${GREEN}     link: \"https://your-project.com\",${NC}"
echo -e "${GREEN}   }${NC}"
echo ""
echo "2. Test in browser: npm run dev"
echo ""
echo -e "${GREEN}Done! 🎉${NC}"
