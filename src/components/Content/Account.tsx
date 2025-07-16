import Content from "../Content/Content";
import Cards from "../Content/Cards";

function Account() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="account"
    >
      <div className="absolute border-[0px_0px_0.5px] border-[rgba(25,25,25,0.01)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
      <Content />
      <Cards />
    </div>
  );
}

export default Account;
