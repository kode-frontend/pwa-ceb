import { useNavigate } from "react-router-dom";
import Icn from "../Content/Icn";

function Search3() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pwa-ceb/notifications");
  };
  return (
    <div
      onClick={handleClick}
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-0 relative rounded-[100px] shrink-0 size-9 cursor-pointer"
      data-name="search"
    >
      <Icn />
    </div>
  );
}

export default Search3;
