function Banner() {
  return (
    <div
      className="h-[132px] overflow-clip relative rounded-3xl shrink-0 w-[343px]"
      data-name="banner"
      style={{
        backgroundImage:
          "linear-gradient(133.858deg, rgb(197, 91, 249) 0%, rgb(173, 45, 236) 100%)",
      }}
    >
      <div className="relativerounded-lg overflow-hidden">
        <img
          src="/pwa-ceb/assets/banner1.png"
          alt="Карта"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
