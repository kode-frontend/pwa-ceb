import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { PaymentsScreen } from "@pages/PaymentsScreen";
import { SettingsScreen } from "@pages/SettingsScreen";
import { HomeScreen } from "@pages/HomeScreen";
import ProfileScreen from "@pages/ProfileScreen";

import Tabbar1 from "@components/Content/Tabbar1";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import SettingsHeader from "@components/Shared/SettingsHeader";

import { useSwipeBack } from "@shared/hooks/useSwipeBack";

const App = () => {
  return (
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  );
};

const AppWithRouter = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useSwipeBack();

  const settingsRoute = location.pathname.includes("settings");
  const profileRoute = location.pathname.includes("profile");

  const Header = useMemo(() => {
    if (settingsRoute) return <SettingsHeader />;
    if (profileRoute) return null;
    return <NavigationBar scrollY={scrollY} />;
  }, [settingsRoute, profileRoute, scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-y-auto">
      {Header}

      <div className="h-full w-full">
        <Routes>
          <Route path="/pwa-ceb/" element={<HomeScreen />} />
          <Route path="/pwa-ceb/payments" element={<PaymentsScreen />} />
          <Route path="/pwa-ceb/settings" element={<SettingsScreen />} />
          <Route path="/pwa-ceb/profile" element={<ProfileScreen />} />
        </Routes>
      </div>

      {!profileRoute && <Tabbar1 />}
    </div>
  );
};

export default App;
