import Container14 from "../Content/Container14";
import Text5 from "../Content/Text5";

function Content7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 min-w-[120px]"
      data-name="content"
    >
      <div className="absolute border border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container14 />
      <Text5 />
    </div>
  );
}

export default Content7;
