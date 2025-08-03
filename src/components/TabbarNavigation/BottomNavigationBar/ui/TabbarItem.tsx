interface TabbarItemProps {
  icon: React.ReactElement;
  tabbarScreenTitle: React.ReactElement;
}

function TabbarItem({ icon, tabbarScreenTitle }: TabbarItemProps) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-center justify-start min-h-px min-w-px pb-1 pt-2 px-0 relative shrink-0"
      data-name="tabbar_item"
    >
      <div className="relative shrink-0 size-6" data-name="vuesax/linear/home">
        <div
          className="absolute contents left-[2.998px] top-[3.166px]"
          data-name="vuesax/linear/home"
        >
          {icon}
        </div>
      </div>
      {tabbarScreenTitle}
    </div>
  );
}

export default TabbarItem;
