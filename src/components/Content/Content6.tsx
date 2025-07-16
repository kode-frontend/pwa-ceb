import Container13 from "../Content/Container13";
import Text4 from "../Content/Text4";

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start pl-2.5 pr-3 py-2.5 relative rounded-[20px] shrink-0 min-w-[120px]"
      data-name="content"
    >
      <div className="absolute border border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container13 />
      <Text4 />
    </div>
  );
}

export default Content6;
