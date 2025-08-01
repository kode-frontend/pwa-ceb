import { svgPaths } from "@shared/constants/svgPaths";

import { Mir2 } from "./Mir2";
import { Mir } from "./Mir";

type CardType = "current" | "credit1" | "credit2";

function Text({
  number,
  type,
  isActive,
}: {
  number: string;
  type: string;
  isActive?: boolean;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="text"
    >
      <div
        className={`font-sans relative shrink-0 text-[14px] tracking-[-0.28px] w-full ${
          isActive ? "text-[#ffffff]" : "text-[#191919]"
        }`}
      >
        <p className="block leading-[20px]">{number}</p>
      </div>
      <div
        className={`font-sans relative shrink-0 text-[12px] tracking-[-0.12px] w-full ${
          isActive ? "text-[rgba(255,255,255,0.7)]" : "text-[#6f7884]"
        }`}
      >
        <p className="block leading-[16px]">{type}</p>
      </div>
    </div>
  );
}

function CurrentAccountCard({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`box-border border-1 content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 cursor-pointer ${
        isActive ? "bg-[#316DCC]" : "bg-transparent border-1 border-[#19191914]"
      }`}
      data-name="content"
    >
      <div
        className={`overflow-clip relative rounded-[100px] shrink-0 size-8 ${
          isActive ? "bg-[#4178D0]" : "bg-[#F1F5FC] border-1 border-[#19191914]"
        }`}
        data-name="container"
      >
        <div
          className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          data-name="icn_rub_24"
        >
          <svg
            className="block size-full"
            fill={isActive ? "white" : "black"}
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <g id="icn_rub_24">
              <path
                d={svgPaths.p272ed500}
                fill={isActive ? "white" : "black"}
                id="Union"
              />
            </g>
          </svg>
        </div>
      </div>
      <Text number="**** 1766" type="Текущий счет" isActive={isActive} />
    </button>
  );
}

function Container1({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className={`overflow-clip relative rounded-[100px] shrink-0 size-8 ${
        isActive ? "bg-[#4178D0]" : "bg-[#F1F5FC] border-1 border-[#19191914]"
      }`}
      data-name="container"
    >
      <div className="absolute" data-name="card">
        <div className="overflow-clip relative">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g clip-path="url(#clip0_4384_17354)">
                <rect x="0.5" width="32" height="32" rx="16" />
                <g clip-path="url(#clip1_4384_17354)">
                  <rect
                    x="6.89844"
                    y="6.4"
                    width="44.8"
                    height="28.8"
                    rx="6.4"
                    fill="#F1F5FC"
                  />
                  <rect
                    x="6.69922"
                    y="6.39997"
                    width="51.6"
                    height="34.4"
                    fill="url(#pattern0_4384_17354)"
                  />
                  <path
                    d="M22.2177 13.3698V16H23.6666V14.4413H25.3087C25.9993 14.4365 26.5861 13.9908 26.8083 13.3698H22.2177Z"
                    fill="white"
                  />
                  <path
                    d="M22.0245 11.2023C22.1091 12.2763 23.1185 13.1262 24.35 13.1262C24.3548 13.1262 26.8687 13.1262 26.8687 13.1262C26.888 13.0288 26.8977 12.9265 26.8977 12.8218C26.8977 11.9305 26.1853 11.2096 25.3039 11.2023H22.0245Z"
                    fill="white"
                  />
                  <path
                    d="M19.8802 13.0994C19.8971 13.0702 19.9237 13.0532 19.9575 13.0532C20.0058 13.0532 20.042 13.0921 20.0444 13.1384V15.9756H21.4933V11.2023H20.0444C19.8609 11.2096 19.6532 11.3435 19.5759 11.5116L18.4241 14.0054C18.4216 14.0151 18.4168 14.0249 18.412 14.0346C18.3951 14.059 18.3661 14.076 18.3323 14.076C18.2792 14.076 18.2357 14.0322 18.2357 13.9786V11.2023H16.7868V15.9756H18.2357C18.4168 15.9659 18.6197 15.8319 18.6969 15.6663L19.8802 13.1067C19.8778 13.1043 19.8802 13.1019 19.8802 13.0994Z"
                    fill="white"
                  />
                  <path
                    d="M14.4709 13.1824L13.6233 15.9757H12.5801L11.7349 13.1799C11.7277 13.1361 11.689 13.102 11.6407 13.102C11.5876 13.102 11.5465 13.1458 11.5465 13.197V15.9733H10.0977V11.2H11.7108C11.9764 11.2 12.2565 11.4094 12.3338 11.6651L13.0389 13.9909C13.0751 14.1078 13.1307 14.1054 13.1669 13.9909L13.872 11.6651C13.9493 11.407 14.2294 11.2 14.495 11.2H16.1081V15.9733H14.6593V13.197C14.6593 13.197 14.6593 13.197 14.6593 13.1945C14.6593 13.141 14.6158 13.0996 14.5651 13.0996C14.5168 13.102 14.4781 13.1361 14.4709 13.1824Z"
                    fill="white"
                  />
                </g>
                <rect
                  x="7.09844"
                  y="6.6"
                  width="44.4"
                  height="28.4"
                  rx="6.2"
                  stroke="#191919"
                  stroke-opacity="0.08"
                  stroke-width="0.4"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0_4384_17354"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_4384_17354"
                    transform="scale(0.000651042 0.000976562)"
                  />
                </pattern>
                <clipPath id="clip0_4384_17354">
                  <rect x="0.5" width="32" height="32" rx="16" fill="white" />
                </clipPath>
                <clipPath id="clip1_4384_17354">
                  <rect
                    x="6.89844"
                    y="6.4"
                    width="44.8"
                    height="28.8"
                    rx="6.4"
                    fill="white"
                  />
                </clipPath>
                <Mir />
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute border-[0.4px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      </div>
    </div>
  );
}

function Text1({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="text"
    >
      <div
        className={`font-sans relative shrink-0 text-[14px] tracking-[-0.28px] w-full ${
          isActive ? "text-[#ffffff]" : "text-[#191919]"
        }`}
      >
        <p className="leading-[20px]">
          <span>{`**** `}</span>
          <span className="font-sans not-italic">3312</span>
        </p>
      </div>
      <div
        className={`font-sans relative shrink-0 text-[12px] tracking-[-0.12px] w-full ${
          isActive ? "text-[rgba(255,255,255,0.7)]" : "text-[#6f7884]"
        }`}
      >
        <p className="block leading-[16px]">Кредитная карта</p>
      </div>
    </div>
  );
}

function CreditCard1({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`box-border border-1 content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 cursor-pointer ${
        isActive ? "bg-[#316DCC]" : "bg-[#FFFFFF] border-1 border-[#19191914]"
      }`}
      data-name="content"
    >
      <div className="absolute border border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container1 isActive={isActive} />
      <Text1 isActive={isActive} />
    </button>
  );
}

function Container3({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className={`overflow-clip relative rounded-[100px] shrink-0 size-8 ${
        isActive ? "bg-[#4178D0]" : "bg-[#F1F5FC] border-1 border-[#19191914]"
      }`}
      data-name="container"
    >
      <div className="absolute" data-name="card">
        <div className="overflow-clip relative">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g clip-path="url(#clip0_4706_6537)">
                <rect x="0.5" width="32" height="32" rx="16" />
                <g clip-path="url(#clip1_4706_6537)">
                  <rect
                    x="6.89844"
                    y="6.4"
                    width="44.8"
                    height="28.8"
                    rx="6.4"
                    fill="#191919"
                  />
                  <rect
                    opacity="0.5"
                    x="6.69922"
                    y="6.39997"
                    width="51.6"
                    height="34.4"
                    fill="url(#pattern0_4706_6537)"
                  />
                  <path
                    d="M22.2177 13.3698V16H23.6666V14.4413H25.3087C25.9993 14.4365 26.5861 13.9908 26.8083 13.3698H22.2177Z"
                    fill="white"
                  />
                  <path
                    d="M22.0245 11.2023C22.1091 12.2763 23.1185 13.1262 24.35 13.1262C24.3548 13.1262 26.8687 13.1262 26.8687 13.1262C26.888 13.0288 26.8977 12.9265 26.8977 12.8218C26.8977 11.9305 26.1853 11.2096 25.3039 11.2023H22.0245Z"
                    fill="white"
                  />
                  <path
                    d="M19.8802 13.0994C19.8971 13.0702 19.9237 13.0532 19.9575 13.0532C20.0058 13.0532 20.042 13.0921 20.0444 13.1384V15.9756H21.4933V11.2023H20.0444C19.8609 11.2096 19.6532 11.3435 19.5759 11.5116L18.4241 14.0054C18.4216 14.0151 18.4168 14.0249 18.412 14.0346C18.3951 14.059 18.3661 14.076 18.3323 14.076C18.2792 14.076 18.2357 14.0322 18.2357 13.9786V11.2023H16.7868V15.9756H18.2357C18.4168 15.9659 18.6197 15.8319 18.6969 15.6663L19.8802 13.1067C19.8778 13.1043 19.8802 13.1019 19.8802 13.0994Z"
                    fill="white"
                  />
                  <path
                    d="M14.4709 13.1824L13.6233 15.9757H12.5801L11.7349 13.1799C11.7277 13.1361 11.689 13.102 11.6407 13.102C11.5876 13.102 11.5465 13.1458 11.5465 13.197V15.9733H10.0977V11.2H11.7108C11.9764 11.2 12.2565 11.4094 12.3338 11.6651L13.0389 13.9909C13.0751 14.1078 13.1307 14.1054 13.1669 13.9909L13.872 11.6651C13.9493 11.407 14.2294 11.2 14.495 11.2H16.1081V15.9733H14.6593V13.197C14.6593 13.197 14.6593 13.197 14.6593 13.1945C14.6593 13.141 14.6158 13.0996 14.5651 13.0996C14.5168 13.102 14.4781 13.1361 14.4709 13.1824Z"
                    fill="white"
                  />
                </g>
                <rect
                  x="7.09844"
                  y="6.6"
                  width="44.4"
                  height="28.4"
                  rx="6.2"
                  stroke="#191919"
                  stroke-opacity="0.08"
                  stroke-width="0.4"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0_4706_6537"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_4706_6537"
                    transform="scale(0.000651042 0.000976562)"
                  />
                </pattern>
                <clipPath id="clip0_4706_6537">
                  <rect x="0.5" width="32" height="32" rx="16" fill="white" />
                </clipPath>
                <clipPath id="clip1_4706_6537">
                  <rect
                    x="6.89844"
                    y="6.4"
                    width="44.8"
                    height="28.8"
                    rx="6.4"
                    fill="white"
                  />
                </clipPath>
                <Mir2 />
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute border-[0.4px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      </div>
    </div>
  );
}

function Text2({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left"
      data-name="text"
    >
      <div
        className={`font-sans relative shrink-0 text-[14px] tracking-[-0.28px] w-full ${
          isActive ? "text-[#ffffff]" : "text-[#191919]"
        }`}
      >
        <p className="block leading-[20px]">**** 2345</p>
      </div>
      <div
        className={`font-sans relative shrink-0 text-[12px] tracking-[-0.12px] w-full ${
          isActive ? "text-[rgba(255,255,255,0.7)]" : "text-[#6f7884]"
        }`}
      >
        <p className="block leading-[16px]">Кредитная карта</p>
      </div>
    </div>
  );
}

function CreditCard2({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`box-border border-1 content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 cursor-pointer ${
        isActive ? "bg-[#316DCC]" : "bg-[#FFFFFF] border-1 border-[#19191914]"
      }`}
      data-name="content"
    >
      <div className="absolute border border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container3 isActive={isActive} />
      <Text2 isActive={isActive} />
    </button>
  );
}

interface SmallAccountCardsProps {
  selectedCard?: CardType;
  onCardChange?: (cardId: CardType) => void;
}

export function SmallAccountCards({
  selectedCard = "current",
  onCardChange,
}: SmallAccountCardsProps) {
  const handleCardClick = (cardId: CardType) => {
    onCardChange?.(cardId);
  };

  return (
    <div
      className="scrollbar-hide box-border flex flex-row gap-4 overflow-x-auto px-4 py-1 w-full"
      data-name="cards"
    >
      <CurrentAccountCard
        isActive={selectedCard === "current"}
        onClick={() => handleCardClick("current")}
      />
      <CreditCard1
        isActive={selectedCard === "credit1"}
        onClick={() => handleCardClick("credit1")}
      />
      <CreditCard2
        isActive={selectedCard === "credit2"}
        onClick={() => handleCardClick("credit2")}
      />
    </div>
  );
}
