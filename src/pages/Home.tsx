import Content8 from "@components/Content/Content8";
import Overlay from "@components/Shared/Overlay";

export const Home = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start overflow-clip size-full"
      data-name="главная"
    >
      <Overlay />
      <Content8 />
    </div>
  );
};