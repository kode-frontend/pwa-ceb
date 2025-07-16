import Home from "../Shared/Home";

function VuesaxLinearHome({ active = false }) {
  return (
    <div
      className="absolute contents left-[2.998px] top-[3.166px]"
      data-name="vuesax/linear/home"
    >
      <Home active={active}/>
    </div>
  );
}

export default VuesaxLinearHome;
