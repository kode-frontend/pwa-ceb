import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";

import Tabbar1 from "@components/Content/Tabbar1";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import { PaymentsScreen } from "@pages/Payments";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full overflow-y-auto">
        {/* Навигация */}
        <NavigationBar scrollY={scrollY} />

        {/* Основной контент (роуты) */}
        <div className="h-full w-full pt-[99px] pb-[86px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payments" element={<PaymentsScreen />} />
            {/* Другие роуты */}
          </Routes>
        </div>

        {/* Таббар */}
        <Tabbar1 />
      </div>
    </BrowserRouter>
  );
};

export default App;
