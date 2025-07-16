import Part5 from "../Content/Part5";
import Part6 from "../Content/Part6";

function Chart1() {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-row h-2 items-center justify-start overflow-clip p-0 relative rounded-[100px] shrink-0 w-full"
      data-name="chart"
    >
      <Part5 />
      <Part6 />
    </div>
  );
}

export default Chart1;
