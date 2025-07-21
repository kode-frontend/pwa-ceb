import { svgPaths } from "@shared/constants/svgPaths";
import { CardsTabContentProps } from "./InteractiveAccountCards";
import { useNavigate } from "react-router-dom";

function IcnRub24() {
  return (
    <div className="absolute left-2 size-6 top-2" data-name="icn_rub_24">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icn_rub_24">
          <path
            d={svgPaths.p1fb1dd00}
            fill="var(--fill-0, #316DCC)"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function MainAccountCard() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/debet-card");
  };
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full cursor-pointer"
      data-name="account"
      onClick={handleBack}
    >
      <div className="absolute border-[0px_0px_0.5px] border-[rgba(25,25,25,0.01)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="relative shrink-0 w-full" data-name="content">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
            <div
              className="bg-[rgba(49,109,204,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-10"
              data-name="container"
            >
              <IcnRub24 />
            </div>
            <div
              className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
              data-name="container"
            >
              <div
                className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
                data-name="text"
              >
                <div className=" relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
                  <p className="block leading-[24px] font-sans font-semibold">
                    67 538.00 ₽
                  </p>
                </div>
                <div className="font-sans relative shrink-0 text-[#6f7884] text-[14px] tracking-[-0.14px] w-full">
                  <p className="block leading-[20px]">Текущий счет · 1766</p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start px-1.5 py-1 relative rounded-[100px] shrink-0"
                data-name="bonus"
              >
                <div className="absolute border-[0.5px] border-[rgb(25 25 25 / 14%)] border-solid inset-0 pointer-events-none rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-4 pl-[72px] pr-4 pt-0 relative shrink-0 w-full"
        data-name="cards"
      >
        <div
          className="bg-[#f1f5fc] h-9 relative rounded-lg shrink-0 w-14"
          data-name="card"
        >
          <div className="h-9 overflow-clip relative w-14">
            <div
              className="absolute bg-center bg-cover bg-no-repeat h-[42px] opacity-50 top-0 translate-x-[-50%] w-16"
              data-name="ChatGPT Image 6 июн. 2025 г., 09_21_44 1"
              style={{
                left: "calc(50% + 4px)",
              }}
            />
            <div
              className="absolute box-border content-stretch flex flex-row gap-2.5 h-[22px] items-start justify-start left-0 p-[4px] top-0 w-14"
              data-name="label"
            >
              <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191919] text-[10px] text-left text-nowrap tracking-[-0.1px]">
                <p className="[text-overflow:inherit] [text-wrap-mode:inherit] [white-space-collapse:inherit] block leading-[12px] overflow-inherit px-1">
                  Моя
                </p>
              </div>
            </div>
            <div className="relative w-14 h-9 rounded-lg overflow-hidden">
              <img
                src="/pwa-ceb/assets/card (1).png"
                alt="Карта"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute border-[0.5px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
        </div>
        <div
          className="bg-[#e2e4ea] box-border content-stretch flex flex-col h-9 items-start justify-start p-0 relative rounded-lg shrink-0 w-14"
          data-name="card"
        >
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
            data-name="label"
          >
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative size-full">
                <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6f7884] text-[10px] text-left text-nowrap tracking-[-0.1px]">
                  <p className="[text-overflow:inherit] [text-wrap-mode:inherit] [white-space-collapse:inherit] block leading-[12px] overflow-inherit px-1">
                    Жены
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="bank_logo">
            <div className="flex flex-row items-end relative size-full">
              <div className="box-border content-stretch flex flex-row items-end justify-between p-[4px] relative w-full">
                <div
                  className="h-[7.813px] relative shrink-0 w-[6.667px]"
                  data-name="lock"
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 7 8"
                  >
                    <g id="lock">
                      <path
                        d={svgPaths.p174ff470}
                        fill="var(--fill-0, #6F7884)"
                        id="combo shape"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="h-1.5 relative shrink-0 w-[21px]"
                  data-name="mir"
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    role="presentation"
                    viewBox="0 0 21 6"
                  >
                    <g id="mir">
                      <path
                        d={svgPaths.p2f2b2680}
                        fill="var(--fill-0, #6F7884)"
                      />
                      <path
                        d={svgPaths.pee5d700}
                        fill="var(--fill-0, #6F7884)"
                      />
                      <path
                        d={svgPaths.pd29d200}
                        fill="var(--fill-0, #6F7884)"
                      />
                      <path
                        d={svgPaths.p39101200}
                        fill="var(--fill-0, #6F7884)"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditCard() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/credit-card");
  };
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative shrink-0 w-full cursor-pointer"
      data-name="content"
      onClick={handleBack}
    >
      <div
        className="bg-[#f1f5fc] overflow-clip relative rounded-[100px] shrink-0 size-10"
        data-name="container"
      >
        <div className="relative w-11 h-13 rounded-lg overflow-hidden">
          <img
            src="/pwa-ceb/assets/mir.png"
            alt="Карта"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
        data-name="content"
      >
        <div
          className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
          data-name="text"
        >
          <div
            className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
            data-name="title"
          >
            <div className="basis-0 grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[16px] text-left tracking-[-0.16px]">
              <p className="block leading-[24px] font-sans font-semibold">
                90 938.00 ₽
              </p>
            </div>
            <div
              className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start px-1.5 py-1 relative rounded-[100px] shrink-0"
              data-name="bonus"
            >
              <div className="absolute border-[0.5px] border-[rgb(25 25 25 / 14%)] border-solid inset-0 pointer-events-none rounded-[100px]" />
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[10px] text-left text-nowrap tracking-[-0.1px]">
                <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
                  753.42
                </p>
              </div>
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-left text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
                  💎
                </p>
              </div>
            </div>
          </div>
          <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#6f7884] text-[14px] text-left tracking-[-0.14px] w-full">
            <p className="block leading-[20px]">Кредитная карта · 3312</p>
          </div>
          <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#6f7884] text-[14px] text-left tracking-[-0.14px] w-full">
            <p className="block leading-[20px]">Urban Card</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleButton({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) {
  function ArrowIcon() {
    return (
      <div
        className="relative size-6"
        data-name="Iconly/Regular/Light/Arrow - Right 2"
      >
        <div className="absolute bottom-[16.667%] flex items-center justify-center left-1/2 top-[16.667%] translate-x-[-50%] w-4">
          <div className="flex-none rotate-[90deg] scale-y-[-100%] size-4">
            <div
              className="relative size-full"
              data-name="Iconly/Light/Arrow - Right 2"
            >
              <div
                className="absolute bottom-[20.833%] contents left-[35.417%] right-[35.417%] top-[20.833%]"
                data-name="Arrow - Right 2"
              >
                <div className="absolute bottom-[20.833%] flex items-center justify-center left-[35.417%] right-[35.417%] top-[20.833%]">
                  <div className="flex-none h-[4.667px] rotate-[270deg] w-[9.333px]">
                    <div className="relative size-full" data-name="Stroke 1">
                      <div
                        className="absolute bottom-[-19.286%] left-[-9.643%] right-[-9.643%] top-[-19.286%]"
                        style={
                          {
                            "--stroke-0":
                              "rgba(111.00000098347664, 120.00000044703484, 132.0000073313713, 1)",
                          } as React.CSSProperties
                        }
                      >
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          role="presentation"
                          viewBox="0 0 12 7"
                        >
                          <path
                            d={svgPaths.p2f39e800}
                            id="Stroke 1"
                            stroke="var(--stroke-0, #6F7884)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isExpanded) {
    return (
      <button
        onClick={onToggle}
        className="bg-[#f1f5fc] h-7 relative rounded-[100px] shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#e8eef8]"
        data-name="container"
      >
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row h-7 items-center justify-center pl-1 pr-2 py-[100px] relative">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none scale-y-[-100%]">
                <ArrowIcon />
              </div>
            </div>
            <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#6f7884] text-[12px] text-left text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[16px] whitespace-pre font-semibold">
                Скрыть
              </p>
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="bg-[#f1f5fc] h-7 relative rounded-[100px] shrink-0 w-12 cursor-pointer transition-all duration-200 hover:bg-[#e8eef8]"
      data-name="container"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-7 items-center justify-center px-0 py-[100px] relative w-12">
          <ArrowIcon />
        </div>
      </div>
    </button>
  );
}

function AdditionalAccount() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full transition-all duration-300 ease-in-out"
      data-name="account"
    >
      <div className="absolute border-[0px_0px_0.5px] border-[rgba(25,25,25,0.01)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <div className="relative shrink-0 w-full" data-name="content">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
            <div
              className="bg-[rgba(49,109,204,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-10"
              data-name="container"
            >
              <IcnRub24 />
            </div>
            <div
              className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
              data-name="container"
            >
              <div
                className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
                data-name="text"
              >
                <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
                  <p className="block leading-[24px] font-semibold">0.00 ₽</p>
                </div>
                <div className="font-sans relative shrink-0 text-[#6f7884] text-[14px] tracking-[-0.14px] w-full">
                  <p className="block leading-[20px]">Текущий счет · 3813</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardsTabContent({
  isExpanded,
  onToggle,
}: CardsTabContentProps) {
  return (
    <>
      <MainAccountCard />
      <CreditCard />
      <div
        className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0 py-3 relative shrink-0 w-full"
        data-name="container"
      >
        <ToggleButton isExpanded={isExpanded} onToggle={onToggle} />
      </div>
      {isExpanded && <AdditionalAccount />}
    </>
  );
}
