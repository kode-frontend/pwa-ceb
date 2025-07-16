import Container21 from "../Content/Container21";
import Text12 from "../Content/Text12";

function Card10() {
  return (
    <div
      className="basis-0 bg-[#f2f3f5] grow h-[136px] min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name="card"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-[136px] items-start justify-between p-[16px] relative w-full">
          <Container21 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

export default Card10;
