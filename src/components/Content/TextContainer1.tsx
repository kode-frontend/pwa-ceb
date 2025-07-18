import { useNavigate } from "react-router-dom";

function TextContainer1() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/sbp");
  };
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full cursor-pointer"
      data-name="text_container"
      onClick={handleBack}
    >
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-end justify-start p-[12px] relative size-full">
          <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left tracking-[-0.14px]">
            <p className="block leading-[20px]">Перевод по СБП</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextContainer1;
