import Card3 from "../Content/Card3";
import Card4 from "../Content/Card4";
import Card5 from "../Content/Card5";

function Cards() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-4 pl-[72px] pr-4 pt-0 relative shrink-0 w-[343px] overflow-x-auto scrollbar-hide"
      data-name="cards"
    >
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

export default Cards;
