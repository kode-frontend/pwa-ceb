import { useNavigate } from "react-router-dom";

import investcontent from "/assets/investcontent.png";

export function InvestmentTabContent() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/invest");
  };
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-2 pt-1 px-2 relative shrink-0 w-full"
      data-name="container"
    >
      <div
        className="bg-[#f1f5fc] h-[220px] overflow-clip relative rounded-2xl shrink-0 w-full cursor-pointer"
        data-name="content"
        onClick={handleBack}
      >
        <div className="relative w-[100%] h-[100%] overflow-hidden">
          <img
            src={investcontent}
            alt="Карта"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
