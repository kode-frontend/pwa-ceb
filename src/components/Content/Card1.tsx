import Container3 from "../Content/Container3";
import TextContainer1 from "../Content/TextContainer1";

function Card1() {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-[20px] shrink-0 size-[110px]"
      data-name="card"
    >
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container3 />
      <TextContainer1 />
    </div>
  );
}

export default Card1;
