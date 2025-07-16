import Container8 from "../Content/Container8";
import Content1 from "../Content/Content1";

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
          <Container8 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

export default Content2;
