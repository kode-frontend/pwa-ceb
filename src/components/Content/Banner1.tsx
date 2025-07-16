import Details1 from "../Content/Details1";
import Illustration5 from "../Content/Illustration5";

function Banner1() {
  return (
    <div
      className="h-[132px] overflow-clip relative rounded-3xl shrink-0 w-[343px]"
      data-name="banner"
      style={{
        backgroundImage:
          "linear-gradient(133.858deg, rgb(245, 94, 67) 0%, rgb(226, 66, 38) 100%)",
      }}
    >
      <Details1 />
      <Illustration5 />
    </div>
  );
}

export default Banner1;
