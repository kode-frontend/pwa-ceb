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
      <Link to="/home">
        <TabbarItem active={location.pathname === "/home"} />
      </Link>
      <Link to="/payments">
        <TabbarItem1 active={location.pathname === "/payments"} />
      </Link>
      <Link to="/loans">
        <TabbarItem2 active={location.pathname === "/loans"}/>
      </Link>
      <Link to="/chats">
        <TabbarItem3 active={location.pathname === "/chats"}/>
      </Link>
      <Link to="/settings">
        <TabbarItem4 active={location.pathname === "/settings"} />
      </Link>
    </div>
  );
};

export default Tabbar;
