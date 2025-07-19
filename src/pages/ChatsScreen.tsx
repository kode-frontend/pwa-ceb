export const ChatsScreen = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start overflow-hidden size-full pt-[45px] pb-[51px]"
      data-name="кредиты"
    >
      <div
        className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
        data-name="content"
      >
        <div className="bg-[#ffffff] flex w-full p-0 m-0 overflow-hidden">
          <div className="flex flex-col justify-between p-0 m-0 leading-none h-screen w-full">
            <img
              src="/pwa-ceb/assets/bodyChat.png"
              alt="Картинка 3"
              className="block w-full flex-1"
            />
            <img
              src="/pwa-ceb/assets/chatInput.png"
              alt="Картинка 2"
              className="block w-full bg-[#ffffff]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
