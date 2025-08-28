import { useNavigate } from "react-router-dom";

import bankcontent from "/assets/bankcontent.png";

function DepositPromoCard() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/bank-deposit");
  };
  return (
    <div
      className="bg-[#f1f5fc] overflow-clip relative rounded-2xl shrink-0 w-full cursor-pointer"
      data-name="content"
      onClick={handleBack}
    >
      <div className="overflow-hidden">
        <img
          src={bankcontent}
          alt="Карта"
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
