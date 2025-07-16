import Tabs from "../Content/Tabs";
import Account from "../Content/Account";
import Account1 from "../Content/Account1";
import Container10 from "../Content/Container10";

function Cards1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-3xl shrink-0 w-full"
      data-name="cards"
    >
      <Tabs />
      <Account />
      <Account1 />
      <Container10 />
    </div>
  );
}

export default Cards1;
