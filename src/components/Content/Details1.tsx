import Text7 from "../Content/Text7";
import Button3 from "../Content/Button3";
import { useNavigate } from "react-router-dom";

function Details1() {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/additional-points");
  };
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[132px] items-start justify-between left-0 p-[16px] top-0 w-[218px] cursor-pointer"
      data-name="details"
      onClick={handleBack}
    >
      <Text7 />
      <Button3 />
    </div>
  );
}

export default Details1;
