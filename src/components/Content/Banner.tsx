import Details from "../Content/Details";
import Illustration4 from "../Content/Illustration4";

function Banner() {
  return (
    <div
      className="h-[132px] overflow-clip relative rounded-3xl shrink-0 w-[343px]"
      data-name="banner"
      style={{
        backgroundImage:
          "linear-gradient(133.858deg, rgb(197, 91, 249) 0%, rgb(173, 45, 236) 100%)",
      }}
    >
      <Details />
      <Illustration4 />
    </div>
  );
}

export default Banner;
