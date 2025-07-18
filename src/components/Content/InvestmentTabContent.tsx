import { useNavigate } from 'react-router-dom';

function SimpleInvestmentSvg() {
  return (
    <svg
      className="h-[184px] w-[185.521px]"
      viewBox="0 0 186 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient circles */}
      <circle
        cx="93"
        cy="92"
        r="80"
        fill="url(#gradient1)"
        opacity="0.6"
      />
      <circle
        cx="130"
        cy="60"
        r="50"
        fill="url(#gradient2)"
        opacity="0.4"
      />
      
      {/* Phone mockup */}
      <rect
        x="60"
        y="40"
        width="70"
        height="120"
        rx="12"
        fill="#316DCC"
        stroke="#2563EB"
        strokeWidth="1"
      />
      
      {/* Screen */}
      <rect
        x="65"
        y="50"
        width="60"
        height="100"
        rx="6"
        fill="#ffffff"
      />
      
      {/* Simple chart bars */}
      <rect x="75" y="120" width="6" height="20" rx="1" fill="#298FEF" />
      <rect x="85" y="110" width="6" height="30" rx="1" fill="#316DCC" />
      <rect x="95" y="105" width="6" height="35" rx="1" fill="#1E40AF" />
      <rect x="105" y="100" width="6" height="40" rx="1" fill="#298FEF" />
      <rect x="115" y="95" width="6" height="45" rx="1" fill="#316DCC" />
      
      {/* Simple growth line */}
      <path
        d="M75 90 L85 80 L95 85 L105 70 L115 75 L125 65"
        stroke="#F59E0B"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Growth arrow */}
      <path
        d="M140 50 L155 35 M155 35 L150 40 M155 35 L150 30"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Floating elements */}
      <circle cx="40" cy="70" r="8" fill="#298FEF" opacity="0.7" />
      <circle cx="150" cy="120" r="10" fill="#316DCC" opacity="0.6" />
      <circle cx="160" cy="40" r="6" fill="#1E40AF" opacity="0.8" />
      
      {/* Gradients */}
      <defs>
        <radialGradient id="gradient1" cx="0.5" cy="0.5" r="0.8">
          <stop offset="0%" stopColor="#E8F4FD" />
          <stop offset="100%" stopColor="#298FEF" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id="gradient2" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#316DCC" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.1" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function InvestmentText() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="text"
    >
      <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
        <p className="block leading-[24px]">Инвестиции с БКС</p>
      </div>
      <div className="font-sans relative shrink-0 text-[#6f7884] text-[14px] tracking-[-0.14px] w-full">
        <p className="block leading-[20px]">
          Воспользоваться сервисом и выбрать подходящий продукт можно, открыв
          брокерский счёт у нашего партнёра
        </p>
      </div>
    </div>
  );
}

function InvestmentContent() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-4 p-0 top-4 w-[303px]"
      data-name="content"
    >
      <InvestmentText />
    </div>
  );
}

function InvestmentButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/invest");
  };
  return (
    <div
      className="absolute bg-[#316dcc] box-border content-stretch flex flex-row gap-2.5 h-11 items-center justify-center left-4 px-6 py-0 rounded-2xl top-40 cursor-pointer"
      data-name="button"
      onClick={handleBack}
    >
      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.28px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Открыть счет
        </p>
      </div>
    </div>
  );
}

function InvestmentPromoCard() {
  return (
    <div
      className="bg-[#f1f5fc] h-[220px] overflow-clip relative rounded-2xl shrink-0 w-full"
      data-name="content"
    >
      <div
        className="absolute h-[184px] top-[95px] translate-x-[-50%] w-[185.521px]"
        data-name="investment-illustration"
        style={{ left: "calc(50% + 111px)" }}
      >
        <SimpleInvestmentSvg />
      </div>
      <InvestmentContent />
      <InvestmentButton />
    </div>
  );
}

export function InvestmentTabContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-2 pt-1 px-2 relative shrink-0 w-full"
      data-name="container"
    >
      <InvestmentPromoCard />
    </div>
  );
}