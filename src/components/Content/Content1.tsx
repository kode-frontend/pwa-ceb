import Text1 from "../Content/Text1";
import Bonus1 from "../Content/Bonus1";

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <Text1 />
      <Bonus1 />
    </div>
  );
}

export default Content1;
