import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DISABLED_SWIPE_BACK_ROUTES = [
  "/pwa-ceb/",
  "/pwa-ceb/payments",
  "/pwa-ceb/loans",
  "/pwa-ceb/chats",
  "/pwa-ceb/settings",
];

export const useSwipeBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const isSwipeBackDisabled = DISABLED_SWIPE_BACK_ROUTES.includes(
      location.pathname
    );

    const handleTouchStart = (e: TouchEvent) => {
      if (isSwipeBackDisabled) return;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isSwipeBackDisabled || touchStartX.current === null) return;

      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX.current;

      if (diff > 120) {
        navigate(-1);
      }

      touchStartX.current = null;
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate, location.pathname]);

  useEffect(() => {
    if (DISABLED_SWIPE_BACK_ROUTES.includes(location.pathname)) {
      const handlePopState = () => {
        window.history.pushState(null, "", window.location.href);
      };

      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [location.pathname]);
};
