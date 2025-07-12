/**
 * One Eyed Man Labs Website - Main JavaScript
 * Accessibility-focused enhancements for navigation and user experience
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeNavigation();
        initializeAccessibilityFeatures();
        initializeSmoothScrolling();
        initializeThemeSwitcher();
    });

    /**
     * Initialize mobile navigation functionality
     */
    function initializeNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!navToggle || !navMenu) return;

        // Toggle mobile menu
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Update ARIA attribute
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle menu visibility
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Manage focus for accessibility
            if (!isExpanded) {
                // Menu is opening - focus first menu item
                const firstMenuItem = navMenu.querySelector('a');
                if (firstMenuItem) {
                    firstMenuItem.focus();
                }
            }
        });

        // Close menu when clicking on nav links (mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(event) {
            const isNavClick = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isNavClick && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Handle escape key to close menu
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });

        // Ensure menu is visible on desktop resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /**
     * Initialize accessibility enhancements
     */
    function initializeAccessibilityFeatures() {
        // Enhance button and link accessibility
        enhanceInteractiveElements();
        
        // Add skip link functionality
        enhanceSkipLink();
        
        // Improve form accessibility if forms exist
        enhanceFormAccessibility();
        
        // Add focus management for modals/dropdowns
        manageFocusTrapping();
    }

    /**
     * Enhance interactive elements for better accessibility
     */
    function enhanceInteractiveElements() {
        // Ensure all buttons have proper ARIA labels
        const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
        buttons.forEach(function(button) {
            const buttonText = button.textContent.trim();
            if (!buttonText && !button.getAttribute('aria-label')) {
                console.warn('Button without accessible name found:', button);
            }
        });

        // Add click handlers for better keyboard navigation
        const clickableElements = document.querySelectorAll('[role="button"]:not(button):not(input)');
        clickableElements.forEach(function(element) {
            element.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    element.click();
                }
            });
        });

        // Enhance external links
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        externalLinks.forEach(function(link) {
            // Add visual indicator for screen readers
            if (!link.getAttribute('aria-label') && !link.querySelector('.sr-only')) {
                const linkText = link.textContent.trim();
                link.setAttribute('aria-label', linkText + ' (opens in new tab)');
            }
        });
    }

    /**
     * Enhance skip link functionality
     */
    function enhanceSkipLink() {
        const skipLink = document.querySelector('.skip-link');
        if (!skipLink) return;

        skipLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = skipLink.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.focus();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    /**
     * Enhance form accessibility
     */
    function enhanceFormAccessibility() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            // Associate labels with inputs
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(function(input) {
                const label = form.querySelector('label[for="' + input.id + '"]');
                if (!label && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
                    console.warn('Input without accessible label found:', input);
                }
            });

            // Add live region for form errors
            if (!form.querySelector('.form-errors')) {
                const errorContainer = document.createElement('div');
                errorContainer.className = 'form-errors';
                errorContainer.setAttribute('aria-live', 'polite');
                errorContainer.setAttribute('aria-atomic', 'true');
                form.insertBefore(errorContainer, form.firstChild);
            }
        });
    }

    /**
     * Manage focus trapping for modal dialogs and dropdowns
     */
    function manageFocusTrapping() {
        // This would be expanded if we add modal dialogs or complex dropdowns
        // For now, ensure focus management for the navigation menu is handled above
        
        // Trap focus within active navigation menu on mobile
        document.addEventListener('keydown', function(event) {
            const navMenu = document.querySelector('.nav-menu.active');
            if (!navMenu || event.key !== 'Tab') return;

            const focusableElements = navMenu.querySelectorAll(
                'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }

    /**
     * Initialize smooth scrolling for anchor links
     */
    function initializeSmoothScrolling() {
        // Only apply to internal anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
        
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    event.preventDefault();
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Manage focus for accessibility
                    // Set tabindex to make element focusable if it isn't already
                    const originalTabIndex = targetElement.getAttribute('tabindex');
                    if (!targetElement.matches(':focus') && !targetElement.matches('input, textarea, select, button, a')) {
                        targetElement.setAttribute('tabindex', '-1');
                        targetElement.focus();
                        
                        // Remove tabindex after focus is lost
                        targetElement.addEventListener('blur', function() {
                            if (originalTabIndex === null) {
                                targetElement.removeAttribute('tabindex');
                            } else {
                                targetElement.setAttribute('tabindex', originalTabIndex);
                            }
                        }, { once: true });
                    } else {
                        targetElement.focus();
                    }
                }
            });
        });
    }

    /**
     * Utility function to announce messages to screen readers
     */
    function announceToScreenReader(message, priority) {
        priority = priority || 'polite';
        
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', priority);
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        // Remove after announcement
        setTimeout(function() {
            document.body.removeChild(announcement);
        }, 1000);
    }

    /**
     * Handle reduced motion preferences
     */
    function respectReducedMotionPreference() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Disable smooth scrolling if user prefers reduced motion
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }

    // Initialize reduced motion handling
    respectReducedMotionPreference();
    
    // Listen for changes in motion preference
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        mediaQuery.addListener(respectReducedMotionPreference);
    }

    /**
     * Initialize theme switcher functionality
     */
    function initializeThemeSwitcher() {
        const themeButtons = document.querySelectorAll('.theme-btn');
        const htmlElement = document.documentElement;
        
        // Load saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        
        // Add click handlers to theme buttons
        themeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const theme = button.getAttribute('data-theme');
                setTheme(theme);
                localStorage.setItem('theme', theme);
                
                // Announce theme change to screen readers
                announceToScreenReader('Theme changed to ' + theme.replace('-', ' ') + ' mode', 'polite');
            });
            
            // Add keyboard support
            button.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    button.click();
                }
            });
        });
        
        function setTheme(theme) {
            // Remove existing theme classes
            htmlElement.removeAttribute('data-theme');
            
            // Apply new theme (dark is default, so only set attribute for light and high-contrast)
            if (theme !== 'dark') {
                htmlElement.setAttribute('data-theme', theme);
            }
            
            // Update active button state
            themeButtons.forEach(function(btn) {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            
            const activeButton = document.querySelector('.theme-btn[data-theme="' + theme + '"]');
            if (activeButton) {
                activeButton.classList.add('active');
                activeButton.setAttribute('aria-pressed', 'true');
            }
        }
        
        // Handle system preference changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener(function(e) {
            // Only auto-switch if no manual theme has been set
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'dark'); // Default to dark regardless
            }
        });
        
        // Set initial aria-pressed states
        themeButtons.forEach(function(btn) {
            btn.setAttribute('aria-pressed', 'false');
        });
        
        const currentActiveButton = document.querySelector('.theme-btn[data-theme="' + savedTheme + '"]');
        if (currentActiveButton) {
            currentActiveButton.setAttribute('aria-pressed', 'true');
        }
    }

    // Make utility function available globally for other scripts
    window.OEML = window.OEML || {};
    window.OEML.announceToScreenReader = announceToScreenReader;

})();