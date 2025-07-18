function SelectPhotoButton() {
  return (
    <div className="bg-[rgba(49,109,204,0.1)] relative rounded-2xl shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[16px] md:p-[18px] relative w-full">
          <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#316dcc] text-[16px] md:text-[17px] lg:text-[18px] text-center text-nowrap tracking-[-0.4px]">
            <p className="adjustLetterSpacing block leading-[24px] md:leading-[26px] whitespace-pre">
              Выбрать фото
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPhotoButton;