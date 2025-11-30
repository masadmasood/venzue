# Venzue - Venue Booking Platform

Venzue is a modern venue booking and event service platform that connects event organizers with perfect venues and trusted service providers. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Venue Discovery**: Browse curated collection of venues across multiple categories
- **Smart Search**: Advanced filtering with location, date, and venue type options
- **Featured Venues**: Showcase of premium venues with detailed information
- **Vendor Services**: Comprehensive marketplace for event services (caterers, decorators, photographers, entertainment)
- **Destination Exploration**: Discover exceptional event destinations across regions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Interactive Carousels**: Smooth browsing experience with custom carousel components
- **Scroll-based Navigation**: Dynamic header with search functionality that appears on scroll
- **Testimonials & Reviews**: Social proof from satisfied customers

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.xx](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.xx with custom design system
- **UI Components**: 
  - Radix UI primitives for accessible components
  - Custom carousel implementation
  - Lucide React icons
- **Fonts**: Poppins (Google Fonts)
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
venzue/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with header
│   │   └── page.tsx            # Home page
│   ├── shared/
│   │   ├── components/
│   │   │   ├── core/           # Core reusable components
│   │   │   ├── sections/       # Page sections
│   │   │   │   ├── header.tsx
│   │   │   │   ├── header-wrapper.tsx
│   │   │   │   ├── hero.tsx
│   │   │   │   ├── venue-categories.tsx
│   │   │   │   ├── featured-venues.tsx
│   │   │   │   ├── trusted-vendors.tsx
│   │   │   │   ├── grow-business.tsx
│   │   │   │   ├── perfect-venue.tsx
│   │   │   │   ├── testimonials.tsx
│   │   │   │   ├── exceptional-destinations.tsx
│   │   │   │   ├── list-venue.tsx
│   │   │   │   └── footer.tsx
│   │   │   └── ui/             # UI primitives
│   │   │       ├── button.tsx
│   │   │       ├── carousel.tsx
│   │   │       ├── select.tsx
│   │   │       └── search-bar.tsx
│   │   └── lib/
│   │       └── utils.ts        # Utility functions
│   └── styles/
│       └── globals.css         # Global styles & theme
├── public/
│   └── images/                 # Static assets
└── components.json             # shadcn/ui configuration
```

## 🎨 Key Components

### Header & Navigation
- **Fixed Header**: Transparent background with scroll detection
- **Dynamic Search**: Search icon appears in header on scroll (desktop only)
- **Language Selector**: Multi-language support (EN, AR, UR)
- **User Actions**: Quick access to listings and user account

### Hero Section
- **Auto-rotating Carousel**: 5-second interval background slides
- **Search Bar**: Comprehensive search with location, date, guest count, and venue type filters
- **Responsive Behavior**: Search bar always visible on mobile, hides on scroll for desktop

### Section Components
- **Venue Categories**: Browse by celebration, corporate, creative, wedding, etc.
- **Featured Venues**: Gallery-style browsing with filters
- **Trusted Vendors**: Carousel of service providers
- **Business Cards**: Gradient CTA cards with overlap effects
- **Perfect Venue**: Step-by-step process guide
- **Testimonials**: Customer reviews with statistics
- **Exceptional Destinations**: Regional venue exploration


## 📄 License

MIT License - feel free to use this project for learning and personal projects.

## 👥 Author

**Asad Masood**
- GitHub: [@masadmasood](https://github.com/masadmasood)
- LinkedIn: [Asad Masood](https://linkedin.com/in/masadmasood)



## 📞 Support

If you have any questions or run into issues:
- Open an issue on GitHub
- Contact via email or LinkedIn

