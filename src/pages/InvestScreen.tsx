import investimage from "/assets/investimage.png";

export default function InvestScreen() {
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="flex flex-col justify-between p-0 m-0 leading-none">
        <img
          src={investimage}
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
}
