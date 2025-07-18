function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="text"
    >
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-left tracking-[-0.28px] w-full">
        <p className="block leading-[20px]">Офисы и банкоматы</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 items-start justify-start left-0 p-[12px] top-0 w-[167px]"
      data-name="details"
    >
      <Text />
    </div>
  );
}

function Card() {
  return (
    <div
      className="basis-0 bg-[#f1f5fc] grow h-[110px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0"
      data-name="card"
    >
      <Details />
      <div className="absolute flex items-center justify-center right-[9px] size-[173px] top-[-13px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-center bg-cover bg-no-repeat size-[173px]"
            data-name="3d-illustration-of-atm 1"
          />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesCard() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative size-full"
      data-name="features"
    >
      <Card />
    </div>
  );
}