import imgChatGptImage620250921441 from "figma:asset/86924a42731ed44af625794d6b95a67cb8f809a0.png";
import imgChatGptImage1620251037571 from "figma:asset/4d857a970b69c89142dad79333087aa97619ee01.png";

import { svgPaths } from "@shared/constants/svgPaths";
import { AccountTabs } from "./AccountTabs";

// RUB Icon Component
function RubIcon() {
  return (
    <div className="absolute left-2 size-6 top-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPaths.p1fb1dd00} fill="#316DCC" />
      </svg>
    </div>
  );
}

// Current Account Card
function CurrentAccountCard() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <div className="absolute border-[0px_0px_0.5px] border-[rgba(25,25,25,0.01)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />

      {/* Content */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
            <div className="bg-[rgba(49,109,204,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-10">
              <RubIcon />
            </div>

            <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
                <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
                  <p className="block leading-[24px]">67 538.00 ₽</p>
                </div>
                <div className="font-sans relative shrink-0 text-[#6f7884] text-[14px] tracking-[-0.14px] w-full">
                  <p className="block leading-[20px] font-sans font-semibold">Текущий счет · 1766</p>
                </div>
              </div>

              <div className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start px-1.5 py-1 relative rounded-[100px] shrink-0">
                <div className="absolute border-[0.5px] border-[rgb(25 25 25 / 14%)] border-solid inset-0 pointer-events-none rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Cards */}
      <div className="scrollbar-hide box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-x-auto pb-4 pl-[72px] pr-4 pt-0 relative shrink-0 w-full">
        {/* My Card */}
        <div className="bg-[#f1f5fc] h-9 relative rounded-lg shrink-0 w-14">
          <div className="h-9 overflow-clip relative w-14">
            <div
              className="absolute bg-center bg-cover bg-no-repeat h-[42px] opacity-50 top-0 translate-x-[-50%] w-16"
              style={{
                left: "calc(50% + 4px)",
                backgroundImage: `url('${imgChatGptImage620250921441}')`,
              }}
            />
            <div className="absolute box-border content-stretch flex flex-row gap-2.5 h-[22px] items-start justify-start left-0 p-[4px] top-0 w-14">
              <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191919] text-[10px] text-left text-nowrap tracking-[-0.1px]">
                <p className="block leading-[12px] overflow-inherit">Моя</p>
              </div>
            </div>
            <div className="absolute h-3.5 left-0 top-[22px] w-14">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 56 14"
              >
                <path d={svgPaths.p39cb4e00} fill="#191919" />
                <path d={svgPaths.p301c8f00} fill="#191919" />
                <path d={svgPaths.p21a46600} fill="#191919" />
                <path d={svgPaths.p36490800} fill="#191919" />
              </svg>
            </div>
          </div>
          <div className="absolute border-[0.5px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
        </div>

        {/* Wife's Card */}
        <div className="bg-[#e2e4ea] box-border content-stretch flex flex-col h-9 items-start justify-start p-0 relative rounded-lg shrink-0 w-14">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative size-full">
                <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6f7884] text-[10px] text-left text-nowrap tracking-[-0.1px]">
                  <p className="block leading-[12px] overflow-inherit">Жены</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-end relative size-full">
              <div className="box-border content-stretch flex flex-row items-end justify-between p-[4px] relative w-full">
                <div className="h-[7.813px] relative shrink-0 w-[6.667px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 7 8"
                  >
                    <path d={svgPaths.p174ff470} fill="#6F7884" />
                  </svg>
                </div>
                <div className="h-1.5 relative shrink-0 w-[21px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 21 6"
                  >
                    <path d={svgPaths.p2f2b2680} fill="#6F7884" />
                    <path d={svgPaths.pee5d700} fill="#6F7884" />
                    <path d={svgPaths.pd29d200} fill="#6F7884" />
                    <path d={svgPaths.p39101200} fill="#6F7884" />
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

// Credit Card
function CreditCard() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative shrink-0 w-full">
      <div className="bg-[#f1f5fc] overflow-clip relative rounded-[100px] shrink-0 size-10">
        <div className="absolute bg-[#f1f5fc] h-9 left-2 rounded-lg top-2 w-14">
          <div className="h-9 overflow-clip relative w-14">
            <div
              className="absolute bg-center bg-cover bg-no-repeat h-[43px] top-0 translate-x-[-50%] w-[64.5px]"
              style={{
                left: "calc(50% + 4px)",
                backgroundImage: `url('${imgChatGptImage1620251037571}')`,
              }}
            />
            <div className="absolute h-[18px] left-0 top-0 w-14">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 56 18"
              >
                <path d={svgPaths.p12032a00} fill="white" />
                <path d={svgPaths.pd228600} fill="white" />
                <path d={svgPaths.p20406b80} fill="white" />
                <path d={svgPaths.p384be600} fill="white" />
              </svg>
            </div>
          </div>
          <div className="absolute border-[0.5px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-lg" />
        </div>
      </div>

      <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
            <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[16px] text-left tracking-[-0.16px]">
              <p className="block leading-[24px] ">90 938.00 ₽</p>
            </div>
            <div className="box-border content-stretch flex flex-row gap-1 h-6 items-center justify-start px-1.5 py-1 relative rounded-[100px] shrink-0">
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

// Expand Button
function ExpandButton() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pb-3 pt-1.5 px-0 relative shrink-0 w-full">
      <div className="bg-[#f1f5fc] h-7 relative rounded-[100px] shrink-0 w-12">
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 h-7 items-center justify-center px-0 py-[100px] relative w-12">
            <div className="relative shrink-0 size-6">
              <div className="absolute bottom-[16.667%] flex items-center justify-center left-1/2 top-[16.667%] translate-x-[-50%] w-4">
                <div className="flex-none rotate-[90deg] scale-y-[-100%] size-4">
                  <div className="absolute bottom-[20.833%] flex items-center justify-center left-[35.417%] right-[35.417%] top-[20.833%]">
                    <div className="flex-none h-[4.667px] rotate-[270deg] w-[9.333px]">
                      <div className="relative size-full">
                        <div className="absolute bottom-[-19.286%] left-[-9.643%] right-[-9.643%] top-[-19.286%]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 12 7"
                          >
                            <path
                              d={svgPaths.p2f39e800}
                              stroke="#6F7884"
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
      </div>
    </div>
  );
}

export function AccountCards() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full">
      <AccountTabs />
      <CurrentAccountCard />
      <CreditCard />
      <ExpandButton />
    </div>
  );
}
