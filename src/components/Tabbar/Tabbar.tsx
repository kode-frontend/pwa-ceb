import { Link } from "react-router-dom";
import TabbarItem from "../Tabbar/TabbarItem";
import TabbarItem1 from "../Tabbar/TabbarItem1";
import TabbarItem2 from "../Tabbar/TabbarItem2";
import TabbarItem3 from "../Tabbar/TabbarItem3";
import TabbarItem4 from "../Tabbar/TabbarItem4";

const Tabbar = () => {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full !justify-around"
      data-name="tabbar"
    >
      <Link key={"/"} to={"/"}>
        <TabbarItem />
      </Link>
      <Link key={"/home1"} to={"/home1"}>
        <TabbarItem1 />
      </Link>
      <Link key={"/home2"} to={"/home2"}>
        <TabbarItem2 />
      </Link>
      <Link key={"/home3"} to={"/home3"}>
        <TabbarItem3 />
      </Link>
      <Link key={"/home4"} to={"/home4"}>
        <TabbarItem4 />
      </Link>
    </div>
  );
};

export default Tabbar;
