export default function SearchScreen() {
  return (
    <div className="relative bg-[#f1f5fc] w-full p-0 m-0 overflow-hidden h-[100vh]">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src="/pwa-ceb/assets/SearchField (iOS).png"
          alt="Картинка 1"
          className="block w-full"
        />
        <img
          src="/pwa-ceb/assets/wrapper.png"
          alt="Картинка 2"
          className="block w-full"
        />
      </div>
      <img
        src="/pwa-ceb/assets/KeyboardAlphabeticRegular.png"
        alt="Картинка 3"
        className="absolute bottom-0 left-0 w-full"
      />
    </div>
  );
}
