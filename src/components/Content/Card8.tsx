import Container19 from "../Content/Container19";
import Text10 from "../Content/Text10";

function Card8() {
  return (
    <div
      className="bg-[#f2f3f5] relative rounded-3xl shrink-0 w-full"
      data-name="card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-[16px] relative w-full">
          <Container19 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

export default Card8;
