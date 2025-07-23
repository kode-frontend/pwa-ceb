import Tabbar from "../Tabbar/Tabbar";

function TabbarNavigation() {
  return (
    <div
      className="fixed backdrop-blur-[20px] backdrop-filter bg-[rgba(241,241,241,0.92)] bottom-0 box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 pb-safe-bottom"
      data-name="tabbar"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="absolute border-[0.5px_0px_0px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none" />
      <Tabbar />
    </div>
  );
}

export default TabbarNavigation;
