import TextContainer8 from "../Content/TextContainer8";
import Illustration8 from "../Content/Illustration8";
import { useNavigate } from "react-router-dom";

function Card12() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/new-product");
  };
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[132px] min-h-px min-w-px overflow-clip relative rounded-3xl shrink-0 cursor-pointer"
      data-name="card"
      onClick={handleBack}
    >
      <TextContainer8 />
      <Illustration8 />
    </div>
  );
}

export default Card12;
