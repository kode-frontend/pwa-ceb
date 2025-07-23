export default function SearchScreen() {
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
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
