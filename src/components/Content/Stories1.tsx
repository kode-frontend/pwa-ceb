function Stories1() {
  return (
    <div
      className="h-[90px] overflow-clip relative rounded-2xl shrink-0 w-[148px]"
      data-name="stories"
      style={{
        backgroundImage:
          "linear-gradient(121.304deg, rgb(245, 94, 67) 0%, rgb(226, 66, 38) 100%)",
      }}
    >
      <div className="relativerounded-lg overflow-hidden">
        <img
          src="/pwa-ceb/assets/stories2.png"
          alt="Карта"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Stories1;
