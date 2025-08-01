import { useLocation } from "react-router-dom";

function ToggleSwitch({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}) {
  const location = useLocation();
  return (
    <div
      className="h-8 overflow-clip relative rounded-[100px] shrink-0 w-[52px] cursor-pointer transition-colors"
      onClick={() => onChange(!enabled)}
      style={{
        backgroundColor: location.pathname.includes("/settings")
          ? "#E2E4EA"
          : "#191919",
      }}
    >
      <div
        className={`absolute bg-[#ffffff] left-0.5 rounded-[100px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.15),0px_3px_1px_0px_rgba(0,0,0,0.06)] size-7 top-1/2 translate-y-[-50%] transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </div>
  );
}
export default ToggleSwitch;
