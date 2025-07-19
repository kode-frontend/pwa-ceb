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
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        <img
          src="/pwa-ceb/assets/additionalpic.png"
          alt="Карта"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Details1;
