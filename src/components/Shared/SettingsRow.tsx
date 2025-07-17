import { svgPaths } from "@shared/constants/svgPaths";
import ToggleSwitch from "./ToggleSwitch";

function SettingsRow({
  icon,
  title,
  hasArrow = false,
  hasSwitch = false,
  switchEnabled = false,
  onSwitchChange,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  hasArrow?: boolean;
  hasSwitch?: boolean;
  switchEnabled?: boolean;
  onSwitchChange?: (enabled: boolean) => void;
  onClick?: () => void;
}) {
  return (
    <div
      className={`box-border content-stretch flex flex-col gap-3 items-start justify-center px-4 py-3 relative shrink-0 w-full ${
        onClick ? "cursor-pointer hover:bg-gray-50" : ""
      }`}
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full">
        {/* Leading content */}
        <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
          <div className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
            {/* Icon */}
            <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
              <div className="bg-[#f1f5fc] box-border content-stretch flex flex-row items-center justify-center min-h-9 min-w-9 overflow-clip p-[6px] relative rounded-xl shrink-0 size-9">
                {icon}
              </div>
            </div>

            {/* Text */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
                <div className="-webkit-box basis-0 css-3k2ayj font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191919] text-[16px] text-left tracking-[-0.16px]">
                  <p className="block leading-[24px]">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trailing content */}
        {hasSwitch && (
          <ToggleSwitch
            enabled={switchEnabled}
            onChange={onSwitchChange || (() => {})}
          />
        )}

        {hasArrow && (
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[8px]">
            <div className="flex-none rotate-[270deg] scale-y-[-100%]">
              <div className="h-2 relative w-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 8"
                >
                  <path d={svgPaths.p2bf00df0} fill="#9BA5B3" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SettingsRow;
