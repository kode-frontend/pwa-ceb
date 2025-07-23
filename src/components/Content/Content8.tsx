import Suggest from "../Content/Suggest";
import SmallBanners from "../Content/SmallBanners";
import BannerRow from "../Content/BannerRow";
import Container22 from "../Content/Container22";
import BannerRow1 from "../Content/BannerRow1";
import Features3 from "../Content/Features3";
import { InteractiveAccountCards } from "./InteractiveAccountCards";
import { NotificationBanners } from "./NotificationsBanner";
import { NewProductCard } from "./NewProductCard";
import { EditButton } from "./EditButton";
import { FinanceAnalytics } from "./FinanceAnalytics";

function Content8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="content"
      style={{ backgroundColor: "#F1F5FC" }}
    >
      <Suggest />
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-2 px-4 relative shrink-0 w-full">
        <InteractiveAccountCards />
        <NotificationBanners />
        <NewProductCard />
      </div>
      <SmallBanners />
      <div className="py-4 w-full">
        <FinanceAnalytics />
      </div>
      <BannerRow />
      <Container22 />
      <BannerRow1 />
      <Features3 />
      <EditButton />
    </div>
  );
}

export default Content8;
