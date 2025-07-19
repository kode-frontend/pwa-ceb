import Coins2 from "../Content/Coins2";

function Coins3({active = false}) {
  return (
    <div className="relative shrink-0 size-6" data-name="coins">
      <Coins2 active={active}/>
    </div>
  );
}

export default Coins3;
