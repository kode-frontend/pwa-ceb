import { svgPaths } from "@shared/constants/svgPaths";
import React from "react";
import { useNavigate } from "react-router-dom";

// Alert Icon Component
function AlertIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p264d5240}
          fill="#316DCC"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d={svgPaths.p8acf070}
          fill="#316DCC"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

// Notification Banner Component
function NotificationBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#316DCC1A] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[12px] relative rounded-2xl shrink-0 w-[100%] h-[72px]">
      <AlertIcon />
      <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[12px] text-left tracking-[-0.12px]">
        {children}
      </div>
    </div>
  );
}

export function NotificationBanners() {
  const navigate = useNavigate();

  const handleCreditsBack = () => {
    navigate("/moment");
  };
  const handleCreditsCardBack = () => {
    navigate("/credit-card");
  };
  return (
    <div className="bg-[rgba(49, 109, 204, 0.1)] box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-2 relative shrink-0 w-full">
      <div
        onClick={handleCreditsBack}
        className="cursor-pointer"
        style={{ width: "100%" }}
      >
        <NotificationBanner>
          <p className="leading-[16px] font-sans font-medium">
            26 августа 2025 спишется платеж по Кредит Моментальный в размере 36 571.28 ₽. Не забудьте пополнить счет
          </p>
        </NotificationBanner>
      </div>

      <div
        onClick={handleCreditsCardBack}
        className="cursor-pointer"
        style={{ width: "100%" }}
      >
        <NotificationBanner>
          <p className="leading-[16px] font-sans font-medium">
            29 августа 2025 спишется платеж по Urban Card *3312 в размере 12 311.00 ₽. Не забудьте пополнить счет
          </p>
        </NotificationBanner>
      </div>
    </div>
  );
}
