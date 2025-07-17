import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { PaymentsScreen } from "@pages/PaymentsScreen";
import { SettingsScreen } from "@pages/SettingsScreen";
import { HomeScreen } from "@pages/HomeScreen";

import Tabbar1 from "@components/Content/Tabbar1";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import SettingsHeader from "@components/Shared/SettingsHeader";

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

  const settingsRoute = location.pathname.includes("settings");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-y-auto">
      {settingsRoute ? <SettingsHeader /> : <NavigationBar scrollY={scrollY} />}
      <div className="h-full w-full">
        <Routes>
          <Route path="/pwa-ceb/" element={<HomeScreen />} />
          <Route path="/pwa-ceb/payments" element={<PaymentsScreen />} />
          <Route path="/pwa-ceb/settings" element={<SettingsScreen />} />
        </Routes>
      </div>
      <Tabbar1 />
    </div>
  );
};
export default App;
