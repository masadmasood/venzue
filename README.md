# Venzue - Venue Booking Platform

Venzue is a modern venue booking and event service platform that connects event organizers with perfect venues and trusted service providers. Built with Next.js 15, TypeScript, and Tailwind CSS.

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

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/masadmasood/venzue.git
cd venzue
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design Features

- **Custom Color Palette**: Brand-specific gradients and colors
- **Responsive Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: 1024px+
- **Smooth Animations**: Transition effects and hover states
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized images, lazy loading, and code splitting

## 📝 Configuration

### Tailwind CSS
Custom theme configuration in `globals.css` includes:
- Brand colors (Primary: #FF5037)
- Custom spacing and border radius
- Gradient definitions
- Typography scale

### TypeScript
Strict mode enabled for type safety across all components.

## 🔧 Customization

### Adding New Sections
1. Create component in `src/shared/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Follow existing responsive patterns

### Modifying Theme
Update CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary: #FF5037;
  --star: #FEC432;
  /* Add custom variables */
}
```

## 📦 Dependencies

### Core
- `next`: ^15.x
- `react`: ^19.x
- `typescript`: ^5.x

### UI Libraries
- `@radix-ui/react-select`: Select components
- `lucide-react`: Icon library
- `tailwindcss`: ^4.x

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👥 Author

**Masad Masood**
- GitHub: [@masadmasood](https://github.com/masadmasood)

## 🤝 Contributing

This is a private project. Contact the repository owner for collaboration opportunities.

## 📞 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
