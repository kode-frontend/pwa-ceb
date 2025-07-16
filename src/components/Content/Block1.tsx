import Title1 from "../Content/Title1";
import Chart1 from "../Content/Chart1";

function Block1() {
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative rounded-[20px] shrink-0 w-[120px]"
      data-name="block"
    >
      <Title1 />
      <Chart1 />
    </div>
  );
}

export default Block1;
