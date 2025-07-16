import { svgPaths } from "@shared/constants/svgPaths";

function ArrowRight2() {
  return (
    <div
      className="absolute contents left-[5.667px] top-[3.333px]"
      data-name="Arrow - Right 2"
    >
      <div className="absolute bottom-[20.833%] flex items-center justify-center left-[35.417%] right-[35.417%] top-[20.833%]">
        <div className="flex-none h-[4.667px] rotate-[270deg] w-[9.333px]">
          <div className="relative size-full" data-name="Stroke 1">
            <div className="absolute bottom-[-19.286%] left-[-9.643%] right-[-9.643%] top-[-19.286%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12 7"
              >
                <path
                  d={svgPaths.p2f39e800}
                  id="Stroke 1"
                  stroke="var(--stroke-0, #6F7884)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrowRight2;
