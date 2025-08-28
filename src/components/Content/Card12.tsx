import { useNavigate } from "react-router-dom";

import cardspic from "/assets/cardspic.png";

function Card12() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/new-product");
  };
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px overflow-clip relative rounded-3xl shrink-0 cursor-pointer"
      data-name="card"
      onClick={handleBack}
    >
      <div className="overflow-hidden">
        <img
          src={cardspic}
          alt="Карта"
        />
      </div>
      <div
        className="absolute left-[32.5px] size-[184px] top-[19px]"
        data-name="illustration"
      >
        <div
          className="absolute bg-center bg-cover bg-no-repeat left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[184px_184px] size-[184px] top-0"
          data-name="img"
        />
      </div>
    </div>
  );
}

export default Card12;
