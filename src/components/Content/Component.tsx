import Overlay from "../Shared/Overlay";
import Content8 from "../Content/Content8";
import Tabbar1 from "../Content/Tabbar1";
import NavigationBar from "../NavigationBar/NavigationBar";

function Component({ scrollY = 0 }: { scrollY: number }) {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-[86px] pt-[99px] px-0 relative rounded-[40px] size-full"
      data-name="главная"
    >
      <Overlay />
      <Content8 />
      <Tabbar1 />
      <NavigationBar scrollY={scrollY} />
    </div>
  );
}

export default Component;
