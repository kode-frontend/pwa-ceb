import Part from "../Content/Part";
import Part1 from "../Content/Part1";
import Part2 from "../Content/Part2";
import Part3 from "../Content/Part3";
import Part4 from "../Content/Part4";

function Chart() {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-row h-2 items-center justify-start overflow-clip p-0 relative rounded-[100px] shrink-0 w-full"
      data-name="chart"
    >
      <Part />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
    </div>
  );
}

export default Chart;
