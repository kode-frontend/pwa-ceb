function Details() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[132px] items-start justify-between left-0 p-[16px] top-0 w-[218px]"
      data-name="details"
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

export default function Text6() {
  return (
    <div
      className="overflow-clip relative rounded-3xl size-full"
      data-name="banner"
    >
      <Details />
    </div>
  );
}
