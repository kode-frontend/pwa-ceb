import chatInput1 from "/assets/chatInput1.png";
import bodyChat from "/assets/bodyChat.png";

export const ChatsScreen = () => {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full"
      data-name="кредиты"
    >
      <div
        className="content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
        data-name="content"
      >
        <div className="bg-[#ffffff] flex flex-col w-full p-0 m-0 overflow-hidden">
          <div className="flex flex-col p-0 m-0 leading-none w-full h-[100vh]">
            <img src={bodyChat} alt="Картинка 3" className="block w-full" />
          </div>
          <img
            src={chatInput1}
            alt="Картинка 3"
            style={{
              left: 0,
              right: 0,
              bottom: "52px",
              position: "fixed",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
