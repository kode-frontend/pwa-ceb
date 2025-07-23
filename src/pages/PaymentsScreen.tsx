import Content10 from "@components/Content/Content10";
import Overlay from "@components/Content/Overlay";

export const PaymentsScreen = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full pt-[51px] pb-[51px]"
      data-name="Платежи"
    >
      <Overlay />
      <Content10 />
    </div>
  );
};
