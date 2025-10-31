import { useEffect, RefObject } from 'react';

interface UseSpotlightOptions {
  /**
   * Ref to the container element that should have the spotlight effect
   */
  containerRef: RefObject<HTMLElement | null>;
  /**
   * Whether the spotlight effect is enabled
   * @default true
   */
  enabled?: boolean;
  /**
   * Selector for items within the container that should have individual glow
   * @default '.spotlight-item'
   */
  itemSelector?: string;
  /**
   * Spotlight radius in pixels
   * @default 300
   */
  radius?: number;
  /**
   * Distance from card center where full glow starts (as fraction of radius)
   * @default 0.5
   */
  proximityFactor?: number;
  /**
   * Distance from card center where glow fades to 0 (as fraction of radius)
   * @default 0.75
   */
  fadeFactor?: number;
}

/**
 * Hook that adds mouse-tracking spotlight effect to a container and its children
 * 
 * @example
 * const containerRef = useRef<HTMLDivElement>(null);
 * useSpotlight({ containerRef });
 * 
 * return (
 *   <div ref={containerRef} className="spotlight-container">
 *     <div className="spotlight-item">Card 1</div>
 *     <div className="spotlight-item">Card 2</div>
 *   </div>
 * );
 */
export const useSpotlight = ({
  containerRef,
  enabled = true,
  itemSelector = '.spotlight-item',
  radius = 300,
  proximityFactor = 0.5,
  fadeFactor = 0.75,
}: UseSpotlightOptions) => {
  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const proximity = radius * proximityFactor;
    const fadeDistance = radius * fadeFactor;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      // Update spotlight position
      container.style.setProperty('--spotlight-x', `${e.clientX}px`);
      container.style.setProperty('--spotlight-y', `${e.clientY}px`);

      if (!isInside) {
        // Clear all glows when mouse is outside
        const items = container.querySelectorAll<HTMLElement>(itemSelector);
        items.forEach((item) => {
          item.style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      // Update glow intensity for each item
      const items = container.querySelectorAll<HTMLElement>(itemSelector);
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const centerX = itemRect.left + itemRect.width / 2;
        const centerY = itemRect.top + itemRect.height / 2;

        // Calculate distance from mouse to card center, accounting for card size
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(itemRect.width, itemRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        // Calculate glow intensity based on distance
        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        // Calculate relative position within the item for gradient positioning
        const relativeX = ((e.clientX - itemRect.left) / itemRect.width) * 100;
        const relativeY = ((e.clientY - itemRect.top) / itemRect.height) * 100;

        item.style.setProperty('--glow-x', `${relativeX}%`);
        item.style.setProperty('--glow-y', `${relativeY}%`);
        item.style.setProperty('--glow-intensity', glowIntensity.toString());
        item.style.setProperty('--glow-radius', `${radius}px`);
      });
    };

    const handleMouseLeave = () => {
      const items = container.querySelectorAll<HTMLElement>(itemSelector);
      items.forEach((item) => {
        item.style.setProperty('--glow-intensity', '0');
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, enabled, itemSelector, radius, proximityFactor, fadeFactor]);
};
