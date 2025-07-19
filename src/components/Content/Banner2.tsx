function Banner2() {
  return (
    <div
      className="basis-0 grow h-[132px] min-h-px min-w-px overflow-clip relative rounded-3xl shrink-0"
      data-name="banner"
      style={{
        backgroundImage:
          "linear-gradient(133.858deg, rgb(245, 94, 67) 0%, rgb(226, 66, 38) 100%)",
      }}
    >
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        <img
          src="/pwa-ceb/assets/banner_row.png"
          alt="Карта"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner2;
