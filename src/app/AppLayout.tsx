import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { useTheme } from "@context/ThemeProvider";

import { useSwipeBack } from "@shared/hooks/useSwipeBack";

import { colorOptions } from "@pages/ColorSelectionScreen";

import { routeFlags } from "../router/routeFlags";
import TabbarNavigation from "@components/TabbarNavigation/TabbarNavigation";

export const AppLayout = () => {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const location = useLocation();

  const path = location.pathname;

  const hasBottomTabbar = !Object.values(routeFlags).some(Boolean);

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";

  useSwipeBack();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (path === "/home") {
      document.body.style.background =
        backgroundColor === "#FFFFFF" ? "#f1f5fc" : backgroundColor;
    } else {
      document.body.style.background = "#f2f3f5";
    }
  }, [path]);

  return (
    <div
      className={
        theme === "standard"
          ? "theme-standard font-sans"
          : "theme-primary font-sans"
      }
    >
      {path && hasBottomTabbar && (
        <TabbarNavigation
          scrollY={scrollY}
          path={path}
          children={
            <div
              className="w-full scrollbar-hide h-full"
              style={{ backgroundColor }}
            >
              <ScrollRestoration getKey={(location) => location.pathname} />
              <Outlet key={location.pathname} />
            </div>
          }
        />
      )}
    </div>
  );
};
