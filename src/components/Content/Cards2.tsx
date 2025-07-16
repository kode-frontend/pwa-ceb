import Cards1 from "../Content/Cards1";
import Account2 from "../Content/Account2";

function Cards2() {
  return (
    <div className="relative shrink-0 w-full" data-name="cards">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-2 px-4 relative w-full">
          <Cards1 />
          <Account2 />
        </div>
      </div>
    </div>
  );
}

export default Cards2;
