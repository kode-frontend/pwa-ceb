import Container18 from "../Content/Container18";
import Text9 from "../Content/Text9";

function Card7() {
  return (
    <div
      className="bg-[#f2f3f5] relative rounded-3xl shrink-0 w-full"
      data-name="card"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-center p-[16px] relative w-full">
          <Container18 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

export default Card7;
