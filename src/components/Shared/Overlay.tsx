import { imgColor } from "@shared/constants/imgColor";

function Overlay() {
  return (
    <div
      className="absolute h-[100vh] left-0 overflow-clip right-0 top-0"
      data-name="overlay"
    >
      <div
        className="absolute bg-[#316dcc] h-[100vh] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_40%] right-0 top-1/2 translate-y-[-50%]"
        data-name="color"
        style={{ maskImage: `url('${imgColor}')` }}
      />
    </div>
  );
}

export default Overlay;
