import { useNavigate } from "react-router-dom";
import Container1 from "../Content/Container1";
import TextContainer from "../Content/TextContainer";
import { useTheme } from "@context/ThemeProvider";

function Card() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const backgroundColor = theme === "standard" ? "white" : "#FFFFFF1F";

  const handleBack = () => {
    navigate("/pwa-ceb/count-change");
  };
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-[20px] shrink-0 size-[110px] cursor-pointer"
      data-name="card"
      onClick={handleBack}
      style={{backgroundColor}}
    >
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container1 />
      <TextContainer />
    </div>
  );
}

export default Card;
