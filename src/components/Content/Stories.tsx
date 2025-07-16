import Illustration from "../Content/Illustration";
import TextContainer3 from "../Content/TextContainer3";

function Stories() {
  return (
    <div
      className="h-[90px] overflow-clip relative rounded-2xl shrink-0 w-[148px]"
      data-name="stories"
      style={{
        backgroundImage:
          "linear-gradient(121.304deg, rgb(48, 148, 241) 0%, rgb(21, 131, 233) 100%)",
      }}
    >
      <Illustration />
      <TextContainer3 />
    </div>
  );
}

export default Stories;
