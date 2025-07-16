import Container6 from "../Content/Container6";
import Container7 from "../Content/Container7";

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

export default Content;
