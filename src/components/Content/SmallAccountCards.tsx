import { svgPaths } from "@shared/constants/svgPaths";

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
      className={`box-border border-1 content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-[#316DCC]"
          : "bg-transparent hover:bg-[#f8fafc] hover:scale-[1.02] border-1 border-[#19191914]"
      }`}
      data-name="content"
    >
      <div
        className={`bg-[rgba(255,255,255,0.08)] overflow-clip relative rounded-[100px] shrink-0 size-8 ${
          isActive
            ? "bg-[#316DCC]"
            : "bg-[rgba(241, 245, 252, 1)] hover:scale-[1.02] border-1 border-[#19191914]"
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

function Container1() {
  return (
    <div
      className="bg-[#f1f5fc] overflow-clip relative rounded-[80px] shrink-0 size-8"
      data-name="container"
    >
      <Card1 />
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
      className={`box-border border-1 content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-[#316DCC]"
          : "bg-transparent hover:bg-[#f8fafc] hover:scale-[1.02] border-1 border-[#19191914]"
      }`}
      data-name="content"
    >
      <div className="absolute border border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container1 />
      <Text1 isActive={isActive} />
    </button>
  );
}

function BankLogo1() {
  return (
    <div className="relative w-9 h-9 rounded-lg overflow-hidden">
      <img
        src="/pwa-ceb/assets/mir.png"
        alt="Карта"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

function BankLogo2() {
  return (
    <div className="relative w-9 h-9 rounded-lg overflow-hidden">
      <img
        src="/pwa-ceb/assets/container.png"
        alt="Карта"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute" data-name="card">
      <div className="overflow-clip relative">
        <BankLogo1 />
      </div>
      <div className="absolute border-[0.4px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute" data-name="card">
      <div className="overflow-clip relative">
        <BankLogo2 />
      </div>
      <div className="absolute border-[0.4px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="bg-[#f1f5fc] overflow-clip relative rounded-[80px] shrink-0 size-8"
      data-name="container"
    >
      <Card2 />
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
      className={`box-border border-1 content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-[#316DCC]"
          : "bg-transparent hover:bg-[#f8fafc] hover:scale-[1.02] border-1 border-[#19191914]"
      }`}
      data-name="content"
    >
      <div className="absolute border border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container3 />
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
