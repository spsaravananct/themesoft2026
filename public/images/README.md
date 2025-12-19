# Image Placeholders

This directory contains placeholder images for the Themesoft website. Replace these with your actual images from Shutterstock or other sources.

## Directory Structure

```
public/images/
├── ai-visual.jpg              # AI service section image
├── cybersecurity-visual.jpg   # Cybersecurity service section image
├── cloud-visual.jpg           # Cloud services section image
├── consulting-visual.jpg       # Software consulting section image
├── workforce-visual.jpg       # Workforce solutions section image
├── logos/
│   ├── celestial.svg          # Celestial client logo
│   ├── apex.svg               # APEX client logo
│   ├── quantum.svg            # Quantum client logo
│   └── acme.svg               # Acme Corp client logo
└── testimonials/
    └── jane-doyle.jpg         # Testimonial profile image
```

## Image Requirements

### Service Section Images
- **Format**: JPG or WebP (recommended for better performance)
- **Dimensions**: 800x500px minimum (16:10 aspect ratio)
- **File Size**: Optimize to under 200KB for web performance
- **Content**: Professional images related to each service

### Client Logos
- **Format**: SVG (preferred) or PNG with transparent background
- **Dimensions**: 200x200px minimum
- **File Size**: Keep SVG files optimized, PNG under 50KB

### Testimonial Images
- **Format**: JPG or WebP
- **Dimensions**: 400x400px (square, 1:1 aspect ratio)
- **File Size**: Optimize to under 100KB
- **Content**: Professional headshots

## Current Status

All images are currently using placeholder components. The website will automatically show beautiful gradient placeholders until you add your actual images.

## Adding Images

1. Download your images from Shutterstock or other sources
2. Optimize them using tools like:
   - [TinyPNG](https://tinypng.com/) for compression
   - [Squoosh](https://squoosh.app/) for format conversion
3. Place them in the appropriate directories above
4. Ensure filenames match exactly (case-sensitive)
5. The website will automatically use them once placed

## Notes

- The PlaceholderImage component will automatically handle missing images
- Images are optimized using Next.js Image component
- All images are lazy-loaded for better performance
- Responsive images are automatically generated

