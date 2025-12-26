/**
 * Smart Navigation Utilities for Database Computer
 * 
 * Handles navigation between pages and hash links intelligently:
 * - Hash links on homepage: smooth scroll to section
 * - Hash links on other pages: navigate to homepage with hash
 * - Route links: use React Router for SPA navigation
 * 
 * Usage:
 * import { useSmartNavigation } from '@/lib/navigation'
 * 
 * const { handleNavigation } = useSmartNavigation();
 * <a onClick={(e) => handleNavigation(e, '/pc-builder')}>...</a>
 */

import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * Check if a link is a hash link (e.g., #products, #services)
 */
export function isHashLink(href: string): boolean {
  return href.startsWith('#');
}

/**
 * Check if a link is a route path (e.g., /pc-builder, /about)
 */
export function isRoutePath(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('/#');
}

/**
 * Check if current path is homepage
 */
export function isHomepage(pathname: string): boolean {
  return pathname === '/' || pathname === '';
}

/**
 * Get navigation target based on current location and href
 * Returns: { type: 'hash' | 'route' | 'navigate', target: string }
 */
export function getNavigationTarget(href: string, currentPath: string) {
  const isHash = isHashLink(href);
  const isRoute = isRoutePath(href);
  const isHome = isHomepage(currentPath);

  if (isRoute) {
    // Route path: use React Router navigation
    return { type: 'route' as const, target: href };
  } else if (isHash && isHome) {
    // Hash link on homepage: smooth scroll
    return { type: 'hash' as const, target: href };
  } else if (isHash && !isHome) {
    // Hash link on other pages: navigate to homepage with hash
    return { type: 'navigate' as const, target: `/${href}` };
  } else {
    // Default: treat as hash
    return { type: 'hash' as const, target: href };
  }
}

/**
 * Smooth scroll to element with hash
 */
export function smoothScrollToHash(hash: string) {
  if (!hash || hash === '#') {
    // Scroll to top for empty hash
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Remove # from hash
  const id = hash.replace('#', '');
  const element = document.getElementById(id);

  if (element) {
    // Calculate offset for fixed header (adjust if needed)
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  } else {
    // If element doesn't exist, just scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Custom hook for smart navigation
 * Handles both hash links and route paths intelligently
 * 
 * @param onNavigate - Optional callback fired after navigation
 * @returns { handleNavigation } - Navigation handler function
 */
export function useSmartNavigation(onNavigate?: (href: string) => void) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const { type, target } = getNavigationTarget(href, location.pathname);

      // Call optional callback
      if (onNavigate) {
        onNavigate(href);
      }

      if (type === 'route') {
        // Prevent default and use React Router
        event.preventDefault();
        navigate(target);
      } else if (type === 'navigate') {
        // Navigate to homepage with hash
        event.preventDefault();
        navigate(target);
        // Scroll after navigation completes
        setTimeout(() => {
          const hash = target.split('/')[1]; // Get hash part
          smoothScrollToHash(hash);
        }, 100);
      } else if (type === 'hash') {
        // Smooth scroll to hash on current page
        event.preventDefault();
        smoothScrollToHash(target);
        // Update URL hash without page jump
        if (target !== '#') {
          window.history.pushState(null, '', target);
        }
      }
    },
    [navigate, location.pathname, onNavigate]
  );

  return { handleNavigation, currentPath: location.pathname };
}

/**
 * Determine if a link should use React Router Link or native anchor
 * Used for conditional rendering
 */
export function shouldUseRouterLink(href: string, currentPath: string): boolean {
  const { type } = getNavigationTarget(href, currentPath);
  return type === 'route' || type === 'navigate';
}
