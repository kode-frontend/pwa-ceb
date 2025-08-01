import notificationsWrapper from "/assets/notificationsWrapper.png";

export default function NotificationsScreen() {
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img src={notificationsWrapper} alt="Картинка 2" className="block w-full" />
      </div>
    </div>
  );
}
