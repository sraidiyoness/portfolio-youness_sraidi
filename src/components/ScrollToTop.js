import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This component is used to scroll to the top of the page when the route path changes.
 * This is useful for single-page applications where the user can navigate between pages
 * by clicking on links, and the page should scroll to the top when this happens.
 *
 * The component uses the `useLocation` hook from `react-router-dom` to get the current
 * location and the `useEffect` hook to scroll to the top of the page when the location
 * changes.
 */
function ScrollToTop() {
  // Get the current location
  const { pathname } = useLocation();

  // Use the useEffect hook to scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // The component doesn't render anything, so return null
  return null;
}

export default ScrollToTop;
