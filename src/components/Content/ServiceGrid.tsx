import FeaturesCard from "./FeaturesCard";

export function ServicesGrid() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[32px] shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-1 pt-4 px-4 relative shrink-0 w-full">
        <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[16px] text-left tracking-[-0.16px]">
          <p className="block leading-[24px] font-semibold">Сервисы</p>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-2 px-4 relative shrink-0 w-full">
        {/* First Row */}
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 bg-[#f1f5fc] grow h-[228px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0">
            <div className="absolute bg-center bg-cover bg-no-repeat bottom-[-37px] right-[-64.5px] size-[228px]" />
            <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-[12px] top-0 w-[173px]">
              <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-left tracking-[-0.28px] w-full">
                  <p className="block leading-[20px] font-semibold">
                    Кешбэк от партнеров
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="bg-[#f1f5fc] h-[110px] overflow-clip relative rounded-[20px] shrink-0 w-full">
              <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-[12px] top-0 w-[167px]">
                <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-left tracking-[-0.28px] w-full">
                    <p className="block leading-[20px] font-semibold">
                      Заказ справок
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex items-center justify-center left-[47.5px] size-[145px] top-2.5">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="bg-center bg-cover bg-no-repeat size-[145px]" />
                </div>
              </div>
            </div>

            <div className="bg-[#f1f5fc] h-[110px] overflow-clip relative rounded-[20px] shrink-0 w-full">
              <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-[12px] top-0 w-[167px]">
                <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-left tracking-[-0.28px] w-full">
                    <p className="block leading-[20px] font-semibold">
                      Вопросы и ответы
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-center bg-cover bg-no-repeat left-[72.5px] size-[110px] top-[27px]" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 bg-[#f1f5fc] grow h-[110px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0">
            <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-[12px] top-0 w-[167px]">
              <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-left tracking-[-0.28px] w-full">
                  <p className="block leading-[20px] font-semibold">
                    Связь с банком
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bg-center bg-cover bg-no-repeat left-[47.5px] size-36 top-2.5" />
          </div>

          <div className="basis-0 bg-[#f1f5fc] grow h-[110px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0">
            <div className="absolute bg-center bg-cover bg-no-repeat left-[57px] size-[132px] top-3" />
            <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-[12px] top-0 w-[167px]">
              <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-left tracking-[-0.28px] w-full">
                  <p className="block leading-[20px] font-semibold">
                    Кредитная история
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 bg-[#f1f5fc] grow h-[110px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0">
            <div className="absolute bg-center bg-cover bg-no-repeat left-[57px] size-[132px] top-3" />
            <div className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-[12px] top-0 w-[167px]">
              <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-left tracking-[-0.28px] w-full">
                  <p className="block leading-[20px] font-semibold">Офисы и банкоматы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
