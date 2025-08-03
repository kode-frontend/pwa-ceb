import { Link, useLocation } from "react-router-dom";
import TabbarItem from "./ui/TabbarItem";
import TabbarScreenTitle from "./ui/TabbarScreenTitle";
import TabbarIcon from "./ui/TabbarIcon";
import { routes } from "./constants/tabbarRoutes";

const BottomNavigationBar = () => {
  const location = useLocation();

  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full !justify-around"
      data-name="tabbar"
    >
      {routes.map(({ link, name, route }) => (
        <Link to={link} key={route}>
          <TabbarItem
            tabbarScreenTitle={
              <TabbarScreenTitle
                active={location.pathname === link}
                screenName={name}
              />
            }
            icon={
              <TabbarIcon active={location.pathname === link} route={route} />
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigationBar;
