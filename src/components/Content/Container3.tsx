import Container2 from "../Content/Container2";
import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";

function Container3() {
  const { theme } = useTheme();
  const backgroundColor = theme === "standard" ? "#6F7884" : "white";
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between pb-3 pl-3 pr-2.5 pt-2.5 relative w-full">
          <Container2 />
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
            <div className="flex-none rotate-[270deg]">
              <div className="overflow-clip relative size-4" data-name="close">
                <div
                  className="absolute h-[8.204px] left-[3.9px] top-[3.9px] w-[8.203px]"
                  data-name="close"
                >
                  <div className="absolute bottom-[-0.002%] left-0 right-[-0.001%] top-0">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 9 9"
                    >
                      <g id="close">
                        <path
                          d={svgPaths.p1b65d400}
                          fill={backgroundColor}
                          fillOpacity="0.7"
                          id="Union"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container3;
