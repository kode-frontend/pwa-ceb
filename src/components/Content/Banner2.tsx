import banner_row from "/assets/banner_row.png";

function Banner2() {
  return (
    <div
      className="basis-0 grow h-[132px] overflow-clip relative shrink-0 cursor-pointer"
      data-name="banner"
    >
      <div className="relative w-[100%] h-[100%] overflow-hidden rounded-4xl">
        <img src={banner_row} alt="Карта" className="absolute object-cover" />
      </div>
    </div>
  );
}

export default Banner2;
