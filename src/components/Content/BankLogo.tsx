import { svgPaths } from "@shared/constants/svgPaths";

function BankLogo() {
  return (
    <div className="relative shrink-0 w-full" data-name="bank_logo">
      <div className="flex flex-col items-end justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-end justify-end p-[4px] relative w-full">
          <div className="h-1.5 relative shrink-0 w-[21px]" data-name="mir">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 21 6"
            >
              <g id="mir">
                <path d={svgPaths.p2f2b2680} fill="var(--fill-0, white)" />
                <path d={svgPaths.pee5d700} fill="var(--fill-0, white)" />
                <path d={svgPaths.pd29d200} fill="var(--fill-0, white)" />
                <path d={svgPaths.p39101200} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankLogo;
