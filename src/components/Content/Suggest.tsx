import Button from "../Content/Button";
import Card from "../Content/Card";
import Card1 from "../Content/Card1";
import Card2 from "../Content/Card2";

function Suggest() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0 w-full overflow-x-auto scrollbar-hide"
      data-name="suggest"
    >
      <div className="flex flex-row items-center self-stretch shrink-0">
        <Button />
      </div>
      <Card />
      <Card1 />
    </div>
  );
}

export default Suggest;
