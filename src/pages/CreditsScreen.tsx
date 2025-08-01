import Overlay from "@components/Content/Overlay";

import сontainercredits from "/assets/сontainercredits.png";

export const CreditsScreen = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  pt-[51px] pb-[51px] h-[100vh]"
      data-name="кредиты"
    >
      <Overlay />
      <div
        className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full z-1"
        data-name="content"
      >
        <img
          src={сontainercredits}
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
};
