function SectionHeader({ title }: { title: string }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[343px]">
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-3 relative w-full">
            <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative rounded-xl shrink-0 w-full">
              <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-left text-nowrap tracking-[-0.16px]">
                <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionHeader;