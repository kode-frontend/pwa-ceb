import { useTheme } from "@context/ThemeProvider";
import TopbarSearchButton from "./TopbarSearchButton";
import TopbarNotificationButton from "./TopbarNotificationButton";
import QrButtonNavigation from "./TopbarQrButton";

function TopbarNavigationButtons({ scrollY = 0 }: { scrollY?: number }) {
  const { theme } = useTheme();
  const backgroundColor = theme === "standard" ? "white" : "#FFFFFF14"
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <TopbarSearchButton backgroundColor={backgroundColor} />
      <TopbarNotificationButton backgroundColor={backgroundColor} />
      <QrButtonNavigation scrollY={scrollY}/>
    </div>
  );
}

export default TopbarNavigationButtons;
