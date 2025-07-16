import TopTitle from "../NavigationBar/TopTitle";

function NavigationBar({ scrollY = 0 }: { scrollY?: number }) {
  return (
    <div
      className="fixed bg-[#316dcc] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0 z-10"
      data-name="navigation_bar"
    >
      <TopTitle scrollY={scrollY} />
    </div>
  );
}

export default NavigationBar;
