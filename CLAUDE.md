# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the One Eyed Man Labs organization website (oneeyedmanlabs.org) - a static website showcasing mobile app development projects focused on accessibility and open-source solutions.

## Technology Stack

- **Static HTML/CSS/JavaScript** - No build system or package manager
- **Vanilla web technologies** - No frameworks or dependencies
- **Mobile-responsive design** with accessibility-first approach
- **Deployment**: Cloudflare Pages with automatic GitHub deployment

## Project Structure

Based on the planned file structure from WEBSITE_PROJECT_PROMPT.md:

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

## Development Commands

Since this is a static site with no build system:

- **Local development**: Open `index.html` directly in browser or use a simple HTTP server
- **Testing**: Manual testing across devices and screen readers
- **Validation**: Use online HTML/CSS validators and accessibility checkers
- **Performance**: Test with Lighthouse for 90+ scores in Performance, Accessibility, SEO

## Key Requirements

### Accessibility
- **WCAG 2.1 AA compliance** is mandatory
- Full screen reader support (test with TalkBack/VoiceOver)
- High contrast theme support
- Keyboard navigation for all interactive elements

### Performance
- Page load speed under 2 seconds
- Minimal JavaScript usage
- Optimized images (WebP with fallbacks)
- CSS optimization (minified, critical CSS inline)

### Content Focus
- **AudioTag project showcase** - NFC Audio Tag Management Android app
- GitHub links: https://github.com/oneeyedmanlabs/audiotag
- GPL-3.0 licensed, privacy-first, accessibility-focused
- Professional tone while remaining approachable

### SEO Requirements
- Title tags and meta descriptions for each page
- Open Graph tags for social sharing
- Structured data for organization
- Sitemap.xml and robots.txt

## Important Links
- **Domain**: oneeyedmanlabs.org (Cloudflare)
- **GitHub Organization**: github.com/oneeyedmanlabs  
- **Contact**: contact@oneeyedmanlabs.org
- **AudioTag Repository**: https://github.com/oneeyedmanlabs/audiotag

## Design Guidelines
- Clean, professional appearance
- Color scheme: Professional blues/grays with accent color
- Typography: Modern, readable fonts (Inter/Roboto or system fonts)
- Layout: Centered content, max-width ~1200px, generous white space
- Mobile-first responsive design