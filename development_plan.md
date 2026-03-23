# Isha Hospital - 3 Page Static Website Plan

## Context
Build a 3-page static website (Home, About Us, Contact Us) for "Isha Hospital" using the existing Next.js 16.2.1 + Tailwind CSS v4 + TypeScript project. The design follows the provided mockup images in `Design Images/` folder, with animations inspired by [healthca reference site](https://kits.yumnatype.com/healthca/). The theme system must be centralized so rebranding requires editing only CSS variables in one file.

---

## Tech Stack
- **Next.js 16.2.1** (App Router, Server Components by default)
- **Tailwind CSS v4** (`@theme inline` in globals.css, no tailwind.config.js)
- **TypeScript 5+**, **React 19.2.4**
- **motion** (Framer Motion v11+ renamed) - for scroll-triggered animations, counters, hover effects
- **@emailjs/browser** - contact form email sending (no backend needed)
- **Font**: Poppins (via `next/font/google`)

---

## Theming System (Single-file color control)

All colors defined as CSS custom properties in `app/globals.css`, registered via `@theme inline` so Tailwind utilities like `bg-primary`, `text-primary-dark` work everywhere.

```
--color-primary: #8B1A1A       (dark maroon - navbar, footer, CTAs, hero overlays)
--color-primary-dark: #6B1414  (hover states)
--color-primary-light: #A52020 (lighter accent)
--color-accent: #FDF2F2        (light cream/pink backgrounds)
--color-text-primary: #1A1A1A  (dark text)
--color-text-secondary: #555555 (muted text)
```

To rebrand: change only the `:root` variables in `globals.css`.

---

## File Structure

```
app/
├── globals.css                    # Theme tokens + Tailwind
├── layout.tsx                     # Root layout (TopBar, Navbar, Footer)
├── page.tsx                       # Home page
├── about/page.tsx                 # About Us page
├── contact/page.tsx               # Contact Us page
├── data/siteData.ts               # All static content (text, stats, services, etc.)
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx             # Contact info bar (phone, email)
│   │   ├── Navbar.tsx             # Sticky nav + mobile hamburger menu (Client)
│   │   └── Footer.tsx             # 4-column footer
│   ├── shared/
│   │   ├── PageHeroBanner.tsx     # Reusable page hero with breadcrumb
│   │   ├── FindRightCare.tsx      # "Find the Right Care" CTA section
│   │   ├── HealthPartnerStats.tsx # Stats with counter animations (Client)
│   │   ├── CTABanner.tsx          # Full-width maroon CTA banner
│   │   ├── SectionHeading.tsx     # Reusable subtitle + title pattern
│   │   └── Button.tsx             # Button variants (primary/secondary/outline)
│   ├── animations/
│   │   ├── FadeIn.tsx             # Scroll-triggered fade-in (Client)
│   │   ├── SlideIn.tsx            # Scroll-triggered slide from left/right (Client)
│   │   ├── StaggerChildren.tsx    # Stagger children entrance (Client)
│   │   └── CounterAnimation.tsx   # Animated number counter (Client)
│   ├── home/
│   │   ├── HeroSection.tsx        # Hero with bg image, text, doctor overlay
│   │   ├── ServicesCards.tsx       # 4 service cards grid
│   │   ├── TestimonialsSection.tsx # Testimonial carousel (Client)
│   │   ├── CareProcess.tsx        # 4-step numbered process
│   │   ├── AchievementsSection.tsx # Achievement icon cards
│   │   └── DoctorProfile.tsx      # Staff doctor card
│   ├── about/
│   │   ├── AboutContent.tsx       # "Compassionate Care" section
│   │   ├── VisionMission.tsx      # Vision & Mission
│   │   ├── DeliverySection.tsx    # "We Deliver Care" with stats
│   │   ├── BestServices.tsx       # Service cards
│   │   └── CommunityCommitment.tsx
│   └── contact/
│       ├── ContactInfo.tsx        # Working hours + contact details
│       ├── ContactForm.tsx        # Form with validation (Client)
│       ├── TeamPhoto.tsx          # Full-width team photo
│       └── MapSection.tsx         # Google Maps embed (Client)
public/
├── images/
│   ├── logo.svg                   # Isha Hospital logo
│   ├── hero-bg.jpg, doctor-hero.png
│   ├── services/                  # Service card images
│   ├── doctors/                   # Doctor + team photos
│   ├── testimonials/              # Author photos
│   └── icons/                     # Achievement/feature SVG icons
```

---

## Page Breakdown

### Home Page (`app/page.tsx`) - from design mockup
1. **Hero Section** - Full-width bg image, "We Are A Full Service Clinic With Modern Technology", 2 CTA buttons, doctor image on right
2. **Services Cards** - 4 cards grid (Comprehensive Care, Medical Excellence, etc.)
3. **Patient Testimonials** - Carousel with quotes
4. **Care Process** - "Simple Care Process" - 4 numbered steps
5. **Health Partner Stats** - Counters (years, patients, doctors)
6. **Achievements** - "Dedicated Excellence in Health & Wellness" icon cards
7. **Doctor Profile** - Staff doctor card with CTA
8. **CTA Banner** - Full-width maroon banner
9. **Find Right Care** - Doctor image + CTA buttons

### About Us Page (`app/about/page.tsx`)
1. **Page Hero Banner** - "About Us" with breadcrumb
2. **About Content** - "Compassionate Care, Medical Excellence" + doctor image
3. **Vision & Mission** - "Transforming Healthcare"
4. **Health Partner Stats** (reused)
5. **Delivery Section** - "We Deliver Care" with stats
6. **Patient Testimonials** (reused)
7. **Best Services** - Service cards
8. **CTA Banner** - "Book Your Care"
9. **Community Commitment**
10. **Find Right Care** (reused)

### Contact Us Page (`app/contact/page.tsx`)
1. **Page Hero Banner** - "Contact Us"
2. **Contact Section** - Left: working hours + info | Right: form (Name, Email, Phone, Subject, Message)
3. **Team Photo** - Full-width group photo
4. **Map Section** - Embedded Google Map
5. **Find Right Care** (reused)

---

## Animation Strategy (using `motion` library)

| Animation | Where Used | Trigger |
|-----------|-----------|---------|
| Fade-in up | Most section content | Scroll into view (once) |
| Slide-in left/right | About sections, split layouts | Scroll into view |
| Counter (0 to N) | Stats sections | Scroll into view |
| Staggered cards | Service grids, process steps | Scroll into view |
| Hover lift + shadow | Cards, buttons | Mouse hover |
| Scale on tap | Buttons | Click/tap |

All animation wrappers are thin Client Components wrapping Server-rendered children to minimize JS bundle.

---

## Build Order

### Phase 1: Foundation
1. Install `motion` package
2. Set up theming in `globals.css` (CSS variables + `@theme inline`)
3. Update `layout.tsx` (Poppins font, metadata, structure)
4. Create `app/data/siteData.ts` with all static content
5. Add placeholder images to `public/images/`

### Phase 2: Layout Components
6. `Button.tsx` - reusable button
7. `SectionHeading.tsx` - reusable heading
8. `TopBar.tsx` - contact info bar
9. `Navbar.tsx` - sticky nav + mobile menu
10. `Footer.tsx` - 4-column footer

### Phase 3: Animation Components
11. `FadeIn.tsx`, `SlideIn.tsx`, `StaggerChildren.tsx`
12. `CounterAnimation.tsx`

### Phase 4: Shared Sections
13. `PageHeroBanner.tsx`
14. `HealthPartnerStats.tsx`
15. `CTABanner.tsx`
16. `FindRightCare.tsx`

### Phase 5: Home Page (all home sections + compose page.tsx)
17-23. Build each home section, then compose in `page.tsx`

### Phase 6: About Page (all about sections + compose page.tsx)
24-29. Build each about section, then compose in `about/page.tsx`

### Phase 7: Contact Page (all contact sections + compose page.tsx)
30-34. Build each contact section, then compose in `contact/page.tsx`

### Phase 8: Polish
35. Responsive testing across breakpoints
36. Animation timing adjustments
37. Image optimization (priority, sizes props)
38. Accessibility check
39. Theme swap test (change primary color to verify)

---

## Verification Plan
1. `npm run dev` - ensure all 3 pages render without errors
2. Navigate between pages - verify smooth transitions and nav active states
3. Scroll each page top to bottom - verify all animations trigger correctly
4. Resize browser from mobile to desktop - verify responsive layouts
5. Change `--color-primary` in globals.css to a blue shade - verify entire site rebrands
6. Check browser console for errors/warnings
7. Run `npm run build` for production build validation

---

## Key Design Decisions
- **Server Components by default**: Only Navbar, ContactForm, TestimonialsSection, animation wrappers, and MapSection are Client Components
- **Centralized content**: All text/data in `siteData.ts` for easy updates
- **Centralized theme**: All colors in CSS variables for one-file rebranding
- **`motion` library**: Lightweight, React 19 compatible, provides `whileInView` for scroll animations
- **Responsive**: Mobile-first with Tailwind breakpoints (md, lg, xl)

---

## Decisions Made
- **Images**: User will provide real image assets into `public/images/` - build with placeholder structure, swap when provided
- **Contact Form**: Working form using **EmailJS** (free tier: 200 emails/month, no backend needed, browser-side only). Install `@emailjs/browser` package. User will configure their EmailJS service ID, template ID, and public key.
- **Contact Info**: Use dummy/placeholder data for now - user will provide real details later
- **Google Maps**: Use placeholder map embed for now - user will share the real location/embed URL later
