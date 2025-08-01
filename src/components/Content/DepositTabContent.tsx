import { useNavigate } from "react-router-dom";

import bankcontent from "/assets/bankcontent.png";

function DepositPromoCard() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/bank-deposit");
  };
  return (
    <div
      className="bg-[#f1f5fc] h-[220px] overflow-clip relative rounded-2xl shrink-0 w-full cursor-pointer"
      data-name="content"
      onClick={handleBack}
    >
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        <img
          src={bankcontent}
          alt="Карта"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export function DepositTabContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-2 pt-1 px-2 relative shrink-0 w-full"
      data-name="container"
    >
      <DepositPromoCard />
    </div>
  );
}
