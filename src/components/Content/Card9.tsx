import Container20 from "../Content/Container20";
import Text11 from "../Content/Text11";

function Card9() {
  return (
    <div
      className="basis-0 bg-[#f2f3f5] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="card"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[16px] relative w-full">
          <Container20 />
          <Text11 />
        </div>
      </div>
    </div>
  );
}

export default Card9;
