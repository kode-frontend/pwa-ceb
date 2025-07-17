import Content8 from "@components/Content/Content8";
import Overlay from "@components/Shared/Overlay";

export const HomeScreen = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start overflow-clip size-full  pt-[51px] pb-[51px]"
      data-name="главная"
    >
      <Overlay />
      <Content8 />
    </div>
  );
};