import { useTheme } from "@context/ThemeProvider";
import IconLinePlus from "../Content/IconLinePlus";
import { useNavigate } from "react-router-dom";

function Button() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/add-service");
  };

  const backgroundColor = theme === "standard" ? "#316DCC" : "white";
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-0 relative rounded-[100px] shrink-0 w-11 cursor-pointer"
      data-name="button"
      style={{ backgroundColor }}
      onClick={handleBack}
    >
      <IconLinePlus />
    </div>
  );
}

export default Button;
