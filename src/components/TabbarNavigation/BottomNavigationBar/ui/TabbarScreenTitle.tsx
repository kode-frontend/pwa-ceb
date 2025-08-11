interface TabbarScreenTitleProps {
  active: boolean;
  screenName: string;
}

function TabbarScreenTitle({ active, screenName }: TabbarScreenTitleProps) {
  return (
    <div
      className={`flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[${
        active ? "#191919" : "#9ba5b3"
      }]  text-left text-nowrap tracking-[-0.1px]`}
    >
      <p className="adjustLetterSpacing block leading-[12px] whitespace-pre caption-3">
        {screenName}
      </p>
    </div>
  );
}

export default TabbarScreenTitle;
