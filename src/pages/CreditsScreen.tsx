import Overlay from "@components/Shared/Overlay";

export const CreditsScreen = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start overflow-clip size-full  pt-[51px] pb-[51px]"
      data-name="кредиты"
    >
      <Overlay />
      <div
        className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
        data-name="content"
      >
        <img
          src={`/pwa-ceb/assets/сontainercredits.png`}
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
};
