function SafeSvgIllustration() {
  return <></>;
}

function DepositIllustration() {
  return (
    <div
      className="absolute size-[269.5px] top-[36.75px] translate-x-[-50%]"
      data-name="illustration"
      style={{ left: "calc(50% + 110.75px)" }}
    >
      <SafeSvgIllustration />
    </div>
  );
}

function DepositText() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="text"
    >
      <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
        <p className="block leading-[24px]">Откройте вклад до 32%</p>
      </div>
      <div className="font-sans relative shrink-0 text-[#6f7884] text-[14px] tracking-[-0.14px] w-full">
        <p className="block leading-[20px]">
          Получайте доход от ваших вложений по привлекательной ставке
        </p>
      </div>
    </div>
  );
}

function DepositContent() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-4 p-0 top-4 w-[303px]"
      data-name="content"
    >
      <DepositText />
    </div>
  );
}

function DepositButton() {
  return (
    <div
      className="absolute bg-[#316dcc] box-border content-stretch flex flex-row gap-2.5 h-11 items-center justify-center left-4 px-6 py-0 rounded-2xl top-40"
      data-name="button"
    >
      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.28px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre font-semibold">
          Подробнее
        </p>
      </div>
    </div>
  );
}

function DepositPromoCard() {
  return (
    <div
      className="bg-[#f1f5fc] h-[220px] overflow-clip relative rounded-2xl shrink-0 w-full"
      data-name="content"
    >
      <DepositIllustration />
      <DepositContent />
      <DepositButton />
    </div>
  );
}

export function DepositTabContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-2 pt-1 px-2 relative shrink-0 w-full"
      data-name="container"
    >
      <DepositPromoCard />
    </div>
  );
}
