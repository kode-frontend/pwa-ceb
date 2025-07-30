function SelectPhotoButton() {
  return (
    <div className="relative shrink-0 w-full cursor-pointer">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start py-3 pb-[44px] relative w-full">
          <div className="bg-[#316DCC1A] relative rounded-xl shrink-0 w-full">
            <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[16px] relative w-full">
                <div className="font-sans leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap tracking-[-0.4px]">
                  <p
                    className="adjustLetterSpacing block leading-[24px] whitespace-pre font-medium"
                    style={{ color: "#316DCC" }}
                  >
                    Выбрать фото
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPhotoButton;
