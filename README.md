# Themesoft Corporate Website

A modern, animated corporate website for Themesoft.com built with Next.js, featuring Accenture-style animations and a beautiful, responsive design.

## Features

- 🎨 **Modern Design**: Dark theme with orange and blue accents
- ✨ **Beautiful Animations**: 
  - Particle background effects
  - Lottie animations for service icons
  - Scroll-triggered animations using Framer Motion
  - Smooth transitions and hover effects
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Next.js Image optimization, lazy loading, code splitting
- ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: 
  - Framer Motion for scroll animations
  - Lottie React for JSON-based animations
  - @tsparticles/react for particle effects
- **Icons**: React Icons
- **Forms**: React Hook Form

## Project Structure

```
themesoft2026/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── src/
│   ├── components/         # React components
│   │   ├── Header/         # Navigation header
│   │   ├── Hero/           # Hero section
│   │   ├── Services/       # Service sections
│   │   ├── Workforce/      # Workforce solutions
│   │   ├── Testimonial/    # Testimonial carousel
│   │   ├── Footer/         # Footer component
│   │   ├── Particles/      # Particle background
│   │   └── Animations/     # Animation components
│   ├── lib/                # Utilities and constants
│   │   ├── constants.ts    # Site content
│   │   └── animations.ts   # Animation utilities
│   └── styles/             # Additional styles
│       └── animations.css  # Custom animations
├── public/                 # Static assets
│   ├── images/            # Images and logos
│   ├── lottie/            # Lottie animation files
│   └── fonts/             # Custom fonts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd themesoft2026
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Adding Content

### Services

Edit `src/lib/constants.ts` to update service information:

```typescript
export const services = [
  {
    id: "ai",
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Your service description...",
    image: "/images/ai-visual.jpg",
    lottie: "/lottie/ai-brain.json",
  },
  // Add more services...
];
```

### Lottie Animations

1. Create or download Lottie animation JSON files
2. Place them in `public/lottie/`
3. Reference them in the service configuration

### Images

1. Add images to `public/images/`
2. Use Next.js Image component for optimization
3. Reference images in constants or directly in components

## Customization

### Colors

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  "primary-orange": "#FF6B35",
  "primary-blue": "#0066CC",
  // Add your colors...
}
```

### Animations

- Edit `src/lib/animations.ts` for animation variants
- Edit `src/styles/animations.css` for custom keyframes

## Performance Tips

- Optimize images before adding to `public/images/`
- Minimize Lottie file sizes
- Use Next.js Image component for all images
- Lazy load below-fold content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2023 Themesoft. All rights reserved.
