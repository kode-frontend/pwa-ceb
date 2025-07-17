import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useSwipeBack = () => {
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;

      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX.current;

      if (diff > 75) {
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
  }, [navigate]);
};
