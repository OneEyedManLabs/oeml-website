# One Eyed Man Labs Website

This repository contains the official website for One Eyed Man Labs (oneeyedmanlabs.org) - a mobile app development organization focused on accessibility and open-source solutions.

## Project Overview

The website showcases our mobile applications, particularly AudioTag - an NFC Audio Tag Management app for Android. It serves as our primary web presence and demonstrates our commitment to accessibility, privacy, and open-source development.

## Technology Stack

- **Static HTML/CSS/JavaScript** - No build system required
- **Mobile-responsive design** with accessibility-first approach
- **Deployment**: Cloudflare Pages with automatic GitHub deployment
- **Domain**: oneeyedmanlabs.org (managed via Cloudflare)

## File Structure

```
/
├── index.html          # Homepage
├── about.html          # About page
├── projects.html       # Projects showcase
├── privacy.html        # Privacy policy
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
├── css/
│   ├── style.css       # Main styles
│   └── responsive.css  # Mobile-responsive styles
├── js/
│   └── main.js         # Accessibility-focused JavaScript
├── images/
│   ├── logo.svg        # Organization logo
│   ├── favicon.ico     # Site icon
│   ├── favicon.svg     # SVG favicon
│   └── projects/       # Project screenshots
└── README.md           # This file
```

## Key Features

### Accessibility
- **WCAG 2.1 AA compliance** with comprehensive accessibility features
- Full screen reader support with proper ARIA labels
- High contrast theme support
- Keyboard navigation for all interactive elements
- Skip links and focus management

### Performance
- Optimized for fast loading (target: under 2 seconds)
- Mobile-first responsive design
- Minimal JavaScript for enhanced accessibility
- SEO optimized with proper meta tags and structured data

### Privacy
- No analytics or tracking
- No cookies or user data collection
- Privacy-first approach aligned with our application values

## Development

### Local Development
Since this is a static site, you can develop locally by:

1. Opening `index.html` directly in a browser, or
2. Using a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

### Testing Accessibility
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation works throughout
- Check color contrast ratios
- Test with browser accessibility tools

### Performance Testing
- Use Lighthouse for performance auditing
- Test on various devices and connection speeds
- Verify images are optimized

## Deployment

The site is deployed via Cloudflare Pages with automatic deployment from the main branch. Any push to main triggers a new deployment.

### Deployment Configuration
- **Build command**: None (static site)
- **Build output directory**: `/` (root)
- **Node.js version**: Not required

## Content Updates

### Adding New Projects
1. Update `index.html` project section
2. Add detailed project page or expand `projects.html`
3. Add project images to `images/projects/`
4. Update sitemap.xml if adding new pages

### Updating Content
- All content can be edited directly in HTML files
- Maintain accessibility standards when adding new content
- Test thoroughly after content changes

## SEO and Analytics

- **SEO**: Handled via meta tags, Open Graph, and structured data
- **Analytics**: Intentionally not implemented to respect user privacy
- **Sitemap**: Updated manually in `sitemap.xml`

## Contributing

While this is primarily an organizational website, we welcome:
- Accessibility improvements
- Performance optimizations
- Bug fixes
- Content suggestions

Please ensure all contributions maintain our accessibility and privacy standards.

## License

This website code is available under the MIT License. Content and branding are property of One Eyed Man Labs.

## Contact

- **Email**: contact@oneeyedmanlabs.org
- **GitHub**: https://github.com/oneeyedmanlabs
- **Website**: https://oneeyedmanlabs.org

## Our Applications

### AudioTag
- **Repository**: https://github.com/oneeyedmanlabs/audiotag
- **Platform**: Android
- **License**: GPL-3.0
- **Features**: NFC Audio Tag Management with full accessibility support

---

**One Eyed Man Labs** - Building accessible mobile experiences for everyone.