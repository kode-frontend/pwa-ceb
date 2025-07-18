function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="text"
    >
      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left tracking-[-0.28px] w-full">
        <p className="block leading-[20px]">
          Приведи друга
          <br />
          с CARD CREDIT
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1.5 relative rounded-[100px] shrink-0"
      data-name="button"
    >
      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre font-semibold">
          Подробнее
        </p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[132px] items-start justify-between left-0 p-[16px] top-0 w-[218px]"
      data-name="details"
    >
      <Text />
      <Button />
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
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-36 right-[-118px] top-[-6px] w-[363.495px]"
        data-name="image 3"
      />
    </div>
  );
}
