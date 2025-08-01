import { useTheme } from "@context/ThemeProvider";
import ToggleSwitch from "@components/Shared/ToggleSwitch";
import { useState } from "react";

import wrapper1 from "/assets/wrapper1.png";
import balance from "/assets/balance.png";
import balancewhite from "/assets/balancewhite.png";
import conditions from "/assets/conditions.png";
import conditionswhite from "/assets/conditionswhite.png";
import creditsheet from "/assets/creditsheet.png";
import pageControl from "/assets/pageControl.png";
import pageControlwhite from "/assets/pageControlwhite.png";

export default function CreditCardScreen() {
  const { theme } = useTheme();
  const [showBlockedCards, setShowBlockedCards] = useState(false);

  const pageControlImg =
    theme === "standard" ? pageControl : pageControlwhite;
  const balanceImg = theme === "standard" ? balance : balancewhite;
  const conditionsImg =
    theme === "standard" ? conditions : conditionswhite;
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start size-full">
      <div className="flex flex-col justify-between h-full p-0 m-0 leading-none self-center items-center gap-3">
        <div className="flex flex-col gap-2 items-center justify-center">
          <img
            src={wrapper1}
            alt="Картинка 2"
            className="block w-full"
          />

          <img
            src={pageControlImg}
            alt="Картинка 2"
            className="block w-[64px] h-[8px] mx-auto"
          />
          <img
            src={balanceImg}
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
            src={conditionsImg}
            alt="Картинка 2"
            className="block"
          />
        </div>
        <img
          src={creditsheet}
          alt="Картинка 3"
          className="block w-full h-full"
        />
      </div>
    </div>
  );
}
