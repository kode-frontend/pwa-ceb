import Messages2 from "../Content/Messages2";

function VuesaxLinearMessages2({active = false}) {
  return (
    <div
      className="absolute contents left-[3px] top-[3px]"
      data-name="vuesax/linear/messages-2"
    >
      <Messages2 active={active}/>
    </div>
  );
}

export default VuesaxLinearMessages2;
