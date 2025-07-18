import { svgPaths } from "@shared/constants/svgPaths";

function CreditAccount() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="account"
    >
      <div className="relative shrink-0 w-full" data-name="content">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
            <div
              className="bg-[rgba(49,109,204,0.1)] overflow-clip relative rounded-[100px] shrink-0 size-10"
              data-name="container"
            >
              <div className="absolute left-[8.5px] size-6 top-2" data-name="coins">
                <div className="absolute bottom-[12.5%] left-[12.775%] right-[12.825%] top-[12.5%]" data-name="coins">
                  <div className="absolute bottom-[-5%] left-[-5.041%] right-[-5.041%] top-[-5%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 20 20"
                    >
                      <g id="coins">
                        <path
                          d={svgPaths.p4974400}
                          id="vector"
                          stroke="var(--stroke-0, #316DCC)"
                          strokeWidth="1.8"
                        />
                        <path
                          d={svgPaths.p21deb000}
                          id="vector_2"
                          stroke="var(--stroke-0, #316DCC)"
                          strokeWidth="1.8"
                        />
                        <path
                          d={svgPaths.p19b993f0}
                          id="vector_3"
                          stroke="var(--stroke-0, #316DCC)"
                          strokeWidth="1.8"
                        />
                        <path
                          d={svgPaths.p381ed800}
                          id="vector_4"
                          stroke="var(--stroke-0, #316DCC)"
                          strokeWidth="1.8"
                        />
                        <circle
                          cx="14.806"
                          cy="14.95"
                          id="vector_5"
                          r="4.05"
                          stroke="var(--stroke-0, #316DCC)"
                          strokeWidth="1.8"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
              data-name="text"
            >
              <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
                <p className="block leading-[24px] font-semibold">72 874.12 ₽</p>
              </div>
              <div className="font-sans relative shrink-0 text-[#6f7884] text-[14px] tracking-[-0.14px] w-full">
                <p className="block leading-[20px]">Моментальный · *4742</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditPromoCard() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-2 pt-0 px-2 relative shrink-0 w-full"
      data-name="container"
    >
      <div
        className="bg-[#f1f5fc] h-[68px] relative rounded-2xl shrink-0 w-full"
        data-name="content"
      >
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 h-[68px] items-center justify-start px-4 py-3 relative w-full">
            <div
              className="bg-[#ffffff] overflow-clip relative rounded-[100px] shrink-0 size-10"
              data-name="container"
            >
              <div
                className="absolute contents left-1/2 translate-x-[-50%] translate-y-[-50%]"
                data-name="img"
                style={{ top: "calc(50% + 4px)" }}
              >
                <div
                  className="absolute bg-center bg-cover bg-no-repeat left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[48px_48px] size-12 translate-x-[-50%] translate-y-[-50%]"
                  data-name="img"
                  style={{
                    top: "calc(50% + 4px)",
                  }}
                />
                <div
                  className="absolute bg-[#316dcc] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[48px_48px] mix-blend-color opacity-50 size-12 translate-x-[-50%] translate-y-[-50%]"
                  data-name="color"
                  style={{ top: "calc(50% + 4px)" }}
                />
              </div>
            </div>
            <div
              className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
              data-name="content"
            >
              <div
                className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
                data-name="text"
              >
                <div
                  className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
                  data-name="text"
                >
                  <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
                    <p className="block leading-[24px] font-semibold">Кредит за 5 минут</p>
                  </div>
                  <div className="font-sans relative shrink-0 text-[#6f7884] text-[14px] tracking-[-0.14px] w-full">
                    <p className="block leading-[20px] whitespace-pre-wrap">{`До 4 000 000 ₽ –  на любые цели`}</p>
                  </div>
                </div>
              </div>
              <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
                <div className="flex-none rotate-[270deg]">
                  <div className="overflow-clip relative size-4" data-name="close">
                    <div className="absolute bottom-[24.353%] left-[24.374%] right-[24.356%] top-[24.375%]" data-name="close">
                      <div className="absolute bottom-[-0.002%] left-0 right-[-0.001%] top-0">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 9 9"
                        >
                          <g id="close">
                            <path
                              d={svgPaths.p1b65d400}
                              fill="var(--fill-0, #9BA5B3)"
                              id="Union"
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
        </div>
      </div>
    </div>
  );
}

export function CreditsTabContent() {
  return (
    <>
      <CreditAccount />
      <CreditPromoCard />
    </>
  );
}