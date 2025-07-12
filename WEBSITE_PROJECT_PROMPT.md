# Create One Eyed Man Labs Organization Website

## Project Overview
Create a professional, accessible website for One Eyed Man Labs (oneeyedmanlabs.org) - a mobile app development organization focused on accessibility and open-source solutions. This will serve as the primary web presence showcasing current and future mobile applications.

## Current Context
- **Domain**: oneeyedmanlabs.org (registered with Cloudflare)
- **GitHub Organization**: github.com/oneeyedmanlabs
- **Email**: contact@oneeyedmanlabs.org (Cloudflare Email Routing configured)
- **First Project**: AudioTag - NFC Audio Tag Management Android app (GPL-3.0 licensed)

## Technical Requirements

### Hosting & Deployment
- **Platform**: Cloudflare Pages (free, integrated with existing Cloudflare account)
- **Domain**: oneeyedmanlabs.org (already registered)
- **Repository**: Create new GitHub repo under oneeyedmanlabs organization
- **Deployment**: Automatic deployment from GitHub commits

### Technology Stack
- **Static site** - HTML5, CSS3, vanilla JavaScript
- **Mobile-responsive** design
- **Accessibility-first** approach (WCAG 2.1 AA compliance)
- **Fast loading** and optimized for global CDN
- **SEO optimized** with proper meta tags

## Content Structure

### Homepage Sections
1. **Hero Section**
   - Organization name and tagline
   - Mission statement about accessibility and open-source development
   - Professional but approachable tone

2. **Current Projects**
   - **AudioTag** - NFC Audio Tag Management for Android
     - Brief description: "Turn any NFC tag into a personal audio note"
     - Key features: Voice recording, text-to-speech, accessibility support
     - Links: Download (GitHub releases), Documentation, Privacy Policy, Source Code
     - GPL-3.0 license badge
     - Screenshots or demo GIF if available

3. **About Section**
   - One Eyed Man Labs mission and values
   - Focus on accessibility, privacy, and user empowerment
   - Open-source commitment
   - Quality over quantity approach

4. **Contact Section**
   - contact@oneeyedmanlabs.org
   - GitHub organization link
   - Professional inquiry invitation

### Additional Pages
- **Privacy Policy** (link from footer)
- **Projects** (dedicated page for detailed app showcases)
- **About** (expanded organizational information)

## Design Requirements

### Visual Identity
- **Clean, professional appearance**
- **Accessibility-focused** design (high contrast, readable fonts, proper spacing)
- **Color scheme**: Professional but not corporate (consider blues, grays, with accent color)
- **Typography**: Modern, readable fonts (system fonts or web fonts like Inter/Roboto)
- **Layout**: Centered content, max-width ~1200px, generous white space

### Mobile Experience
- **Mobile-first** responsive design
- **Touch-friendly** navigation and buttons
- **Fast loading** on mobile networks
- **Accessible** on screen readers

### Branding Elements
- **Consistent** with AudioTag app branding if possible
- **Professional logo/icon** for One Eyed Man Labs
- **Favicon** and social media preview images
- **GitHub organization** visual consistency

## Technical Specifications

### File Structure
```
/
├── index.html          (Homepage)
├── about.html          (About page)
├── projects.html       (Projects showcase)
├── privacy.html        (Privacy policy)
├── css/
│   ├── style.css       (Main styles)
│   └── responsive.css  (Mobile styles)
├── js/
│   └── main.js         (Minimal JavaScript)
├── images/
│   ├── logo.svg        (Organization logo)
│   ├── favicon.ico     (Site icon)
│   └── projects/       (Project screenshots)
└── README.md           (Project documentation)
```

### SEO & Meta Requirements
- **Title tags** for each page
- **Meta descriptions** optimized for search
- **Open Graph** tags for social media sharing
- **Structured data** for organization
- **Sitemap.xml** for search engines
- **Robots.txt** configuration

### Performance Requirements
- **Page load speed** under 2 seconds
- **Lighthouse score** 90+ for Performance, Accessibility, SEO
- **Image optimization** (WebP format with fallbacks)
- **Minimal JavaScript** for fast loading
- **CSS optimization** (minified, critical CSS inline)

## Content Guidelines

### Tone & Voice
- **Professional** but approachable
- **Inclusive** and accessibility-aware language
- **Technical accuracy** without jargon
- **Clear value propositions** for each project
- **Open-source friendly** community focus

### AudioTag Project Description
Use this information about the AudioTag app:
- **Purpose**: NFC Audio Tag Management for Android
- **Key Features**: 
  - Voice recording with NFC tag association
  - Text-to-speech tag creation
  - Unknown tag detection and association
  - Full TalkBack accessibility support
  - Multi-theme support (Light/Dark/System/High Contrast)
  - Backup/export system with Android Auto Backup
  - Open source (GPL-3.0 licensed)
- **Target Users**: Anyone who wants to create audio-enabled NFC experiences
- **Accessibility Focus**: Designed for visually impaired users with full screen reader support
- **Privacy**: Local storage only, no cloud uploads, privacy-first design

### Links to Include
- **GitHub**: https://github.com/oneeyedmanlabs/audiotag
- **Releases**: https://github.com/oneeyedmanlabs/audiotag/releases
- **Issues**: https://github.com/oneeyedmanlabs/audiotag/issues
- **License**: https://github.com/oneeyedmanlabs/audiotag/blob/main/LICENSE

## Deliverables

### Phase 1 (MVP)
1. **Complete static website** with all pages
2. **Mobile-responsive** design
3. **Accessibility compliant** (WCAG 2.1 AA)
4. **GitHub repository** setup for deployment
5. **Cloudflare Pages** deployment configuration
6. **SEO optimization** basic implementation

### Phase 2 (Enhancements)
1. **Contact form** integration (Cloudflare Forms)
2. **Blog section** for development updates
3. **Advanced animations** and interactions
4. **Performance optimizations**
5. **Analytics** integration (privacy-conscious)

## Success Criteria
- **Professional appearance** representing the organization well
- **Accessibility compliance** demonstrating commitment to inclusive design
- **Fast loading** and mobile-friendly experience
- **Clear project showcasing** that drives downloads and engagement
- **Easy maintenance** for future updates and new projects
- **Search engine visibility** for relevant queries

## Next Steps After Completion
1. **Deploy to Cloudflare Pages**
2. **Configure custom domain** (oneeyedmanlabs.org)
3. **Test accessibility** with screen readers
4. **Submit to search engines**
5. **Share on social media** and development communities

---

**Please create this website following modern web development best practices, with a strong emphasis on accessibility, performance, and professional presentation. The site should serve as a credible showcase for the One Eyed Man Labs organization and its commitment to accessible, open-source mobile development.**