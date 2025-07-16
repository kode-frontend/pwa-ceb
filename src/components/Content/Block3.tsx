import Card7 from "../Content/Card7";
import Card8 from "../Content/Card8";

function Block3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="block"
    >
      <Card7 />
      <Card8 />
    </div>
  );
}

export default Block3;
