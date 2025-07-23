import { useTheme } from "@context/ThemeProvider";
import ToggleSwitch from "@components/Shared/ToggleSwitch";
import { useState } from "react";

export default function CreditCardScreen() {
  const { theme } = useTheme();
  const [showBlockedCards, setShowBlockedCards] = useState(false);

  const pageControlImg =
    theme === "standard" ? "--pageControl.png" : "--pageControlwhite.png";
  const balanceImg = theme === "standard" ? "balance.png" : "balancewhite.png";
  const conditionsImg =
    theme === "standard" ? "conditions.png" : "conditionswhite.png";
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start size-full">
      <div className="flex flex-col justify-between h-full p-0 m-0 leading-none self-center items-center gap-3">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img
            src={`/pwa-ceb/assets/wrapper copy.png`}
            alt="Картинка 2"
            className="block w-full"
          />

          <img
            src={`/pwa-ceb/assets/${pageControlImg}`}
            alt="Картинка 2"
            className="block w-[64px] h-[8px] mx-auto"
          />
          <img
            src={`/pwa-ceb/assets/${balanceImg}`}
            alt="Картинка 2"
            className="block"
          />
          <div className="flex mx-auto gap-2 items-center self-center">
            <p style={{ fontSize: "14px" }}>Потратить 753.42</p>
            <ToggleSwitch
              enabled={showBlockedCards}
              onChange={setShowBlockedCards}
            />
          </div>

          <img
            src={`/pwa-ceb/assets/${conditionsImg}`}
            alt="Картинка 2"
            className="block"
          />
        </div>
        <img
          src="/pwa-ceb/assets/creditsheet.png"
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
}
