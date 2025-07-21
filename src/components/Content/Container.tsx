import { useTheme } from "@context/ThemeProvider";
import SafeSquareSvgrepoCom2 from "../Content/SafeSquareSvgrepoCom2";

function Container() {
  const { theme } = useTheme();
  const backgroundColor = theme === "standard" ? "#316DCC1A" : "#FFFFFF14";
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="container"
      style={{ backgroundColor, borderRadius: "50%" }}
    >
      <SafeSquareSvgrepoCom2 />
    </div>
  );
}

export default Container;
