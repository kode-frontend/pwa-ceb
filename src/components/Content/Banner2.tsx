import banner_row from "/assets/banner_row.png";

function Banner2() {
  return (
    <div
      className="basis-0 grow overflow-clip relative shrink-0 cursor-pointer"
      data-name="banner"
    >
      <div className="overflow-hidden rounded-4xl">
        <img src={banner_row} alt="Карта" />
      </div>
    </div>
  );
}

export default Banner2;
