import Content10 from "@components/Content/Content10";
import Overlay from "@components/Shared/Overlay";

export const PaymentsScreen = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start overflow-clip size-full pt-[51px] pb-[51px] h-[100vh] overflow-auto"
      data-name="Платежи"
    >
      <Overlay />
      <Content10 />
    </div>
  );
};
