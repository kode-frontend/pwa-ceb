import Title from "../Content/Title";
import Container15 from "../Content/Container15";

function Block() {
  return (
    <div
      className="basis-0 bg-[#f2f3f5] grow min-h-px min-w-px relative rounded-[20px] shrink-0"
      data-name="block"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <Title />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

export default Block;
