import Search1 from "../Content/Search1";

function Search2(backgroundColor: any) {
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-0 relative rounded-[100px] shrink-0 size-9"
      data-name="search"
      style={backgroundColor}
    >
      <Search1 />
    </div>
  );
}

export default Search2;
