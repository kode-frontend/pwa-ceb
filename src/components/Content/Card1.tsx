import { useNavigate } from "react-router-dom";
import Container3 from "../Content/Container3";
import TextContainer1 from "../Content/TextContainer1";
import { useTheme } from "@context/ThemeProvider";

function Card1() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const backgroundColor = theme === "standard" ? "white" : "#FFFFFF1F";

  const handleBack = () => {
    navigate("/pwa-ceb/sbp");
  };
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-[20px] shrink-0 size-[110px] cursor-pointer"
      data-name="card"
      onClick={handleBack}
      style={{backgroundColor}}
    >
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container3 />
      <TextContainer1 />
    </div>
  );
}

export default Card1;
