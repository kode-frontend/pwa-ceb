function Stories() {
  return (
    <div
      className="h-[90px] overflow-clip relative rounded-2xl shrink-0 w-[148px]"
      data-name="stories"
      style={{
        backgroundImage:
          "linear-gradient(121.304deg, rgb(48, 148, 241) 0%, rgb(21, 131, 233) 100%)",
      }}
    >
      <div className="relativerounded-lg overflow-hidden">
        <img
          src="/pwa-ceb/assets/stories1.png"
          alt="Карта"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Stories;
