import promisepayimg from "/assets/promisepayimg.png";
import footerbutton from "/assets/footerbutton.png";

export default function PromisePayScreen() {
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src={promisepayimg}
          alt="Картинка 3"
          className="block w-full"
        />
        <img
          src={footerbutton}
          alt="Картинка 2"
          className="block w-full bg-[#ffffff]"
        />
        
      </div>
    </div>
  );
}
