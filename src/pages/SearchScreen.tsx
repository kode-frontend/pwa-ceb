import SearchField from "/assets/SearchField.png";
import wrapper from "/assets/wrapper.png";
import KeyboardAlphabeticRegular from "/assets/KeyboardAlphabeticRegular.png";

export default function SearchScreen() {
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full pt-2">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src={SearchField}
          alt="Картинка 1"
          className="block w-full"
        />
        <img
          src={wrapper}
          alt="Картинка 2"
          className="block w-full"
        />
      </div>
      <img
        src={KeyboardAlphabeticRegular}
        alt="Картинка 3"
        className="absolute bottom-0 left-0 w-full"
      />
    </div>
  );
}
