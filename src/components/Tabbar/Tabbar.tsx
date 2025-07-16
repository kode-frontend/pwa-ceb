import { Link, useLocation } from "react-router-dom";
import TabbarItem from "../Tabbar/TabbarItem";
import TabbarItem1 from "../Tabbar/TabbarItem1";
import TabbarItem2 from "../Tabbar/TabbarItem2";
import TabbarItem3 from "../Tabbar/TabbarItem3";
import TabbarItem4 from "../Tabbar/TabbarItem4";

const Tabbar = () => {
  const location = useLocation();
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full !justify-around"
      data-name="tabbar"
    >
      <Link to="/pwa-ceb/">
        <TabbarItem active={location.pathname === "/pwa-ceb/"} />
      </Link>
      <Link to="/pwa-ceb/payments">
        <TabbarItem1 active={location.pathname === "/pwa-ceb/payments"} />
      </Link>
      <Link to="/home2">
        <TabbarItem2 />
      </Link>
      <Link to="/home3">
        <TabbarItem3 />
      </Link>
      <Link to="/home4">
        <TabbarItem4 />
      </Link>
    </div>
  );
};

export default Tabbar;
