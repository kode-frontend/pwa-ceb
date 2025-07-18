import { svgPaths } from "@shared/constants/svgPaths";


// Wallet Check Icon
function WalletCheckIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <div className="absolute h-[17.55px] left-[1.85px] top-[2.975px] w-[19.15px]">
        <div className="absolute bottom-[-5.127%] left-0 right-[-4.7%] top-[-3.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path d={svgPaths.p2b280780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            <path d={svgPaths.p33caa280} stroke="white" strokeWidth="1.8" />
            <path d={svgPaths.p106c280} fill="white" />
            <path d={svgPaths.p1b6bc200} stroke="white" strokeLinecap="round" strokeWidth="1.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Arrow Right Icon
function ArrowRightIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <div className="absolute bottom-[16.667%] right-0 top-[16.667%] w-4">
        <div className="absolute bottom-[20.833%] flex items-center justify-center left-[35.417%] right-[35.417%] top-[20.833%]">
          <div className="flex-none h-[4.667px] rotate-[270deg] w-[9.333px]">
            <div className="relative size-full">
              <div className="absolute bottom-[-19.286%] left-[-9.643%] right-[-9.643%] top-[-19.286%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
                  <path d={svgPaths.p2f39e800} stroke="#9BA5B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NewProductCard() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative shrink-0 w-full">
        <div className="bg-[#316dcc] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative rounded-[100px] shrink-0 size-10">
          <WalletCheckIcon />
        </div>
        
        <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
          <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
            <div className="font-sans relative shrink-0 text-[#191919] text-[14px] tracking-[-0.28px] w-full">
              <p className="block leading-[20px] font-medium">Открыть новый продукт</p>
            </div>
            <div className="font-sans relative shrink-0 text-[#6f7884] text-[12px] tracking-[-0.12px] w-full">
              <p className="block leading-[16px]">
                Откройте счёт, карту, вклад или кредит
              </p>
            </div>
          </div>
        </div>
        
        <ArrowRightIcon />
      </div>
    </div>
  );
}