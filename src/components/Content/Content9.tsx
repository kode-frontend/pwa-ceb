import { useTheme } from "@context/ThemeProvider";
import Search2 from "../Content/Search2";
import Search3 from "../Content/Search3";
import Button5 from "../NavigationBar/Button5";

function Content9({ scrollY = 0 }: { scrollY?: number }) {
  const { theme } = useTheme();
  const backgroundColor = theme === "standard" ? "white" : "#FFFFFF14"
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <Search2 backgroundColor={backgroundColor} />
      <Search3 backgroundColor={backgroundColor} />
      <Button5 scrollY={scrollY}/>
    </div>
  );
}

export default Content9;
