import { useNavigate } from "react-router-dom";
import Group33489 from "../Content/Group33489";

function IconLinePlus() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/add-service");
  };
  return (
    <div className="relative shrink-0 size-6 cursor-pointer" data-name="icon_line/Plus" onClick={handleBack}>
      <Group33489 />
    </div>
  );
}

export default IconLinePlus;
