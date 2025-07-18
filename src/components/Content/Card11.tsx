import TextContainer7 from "../Content/TextContainer7";
import Illustration7 from "../Content/Illustration7";
import { useNavigate } from "react-router-dom";

function Card11() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/invest");
  };
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[132px] min-h-px min-w-px overflow-clip relative rounded-3xl shrink-0 cursor-pointer"
      data-name="card"
      onClick={handleBack}
    >
      <TextContainer7 />
      <Illustration7 />
    </div>
  );
}

export default Card11;
