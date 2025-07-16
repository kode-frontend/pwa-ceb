import { svgPaths } from "@shared/constants/svgPaths";

function WalletCheck() {
  return (
    <div
      className="absolute h-[17.55px] left-[1.85px] top-[2.975px] w-[19.151px]"
      data-name="wallet-check"
    >
      <div className="absolute bottom-[-5.13%] left-0 right-[-4.699%] top-[-3.5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 20"
        >
          <g id="wallet-check">
            <path
              d={svgPaths.p2b280780}
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p33caa280}
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p106c280}
              fill="var(--fill-0, white)"
              id="Union"
            />
            <path
              d={svgPaths.p1b6bc200}
              id="vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default WalletCheck;
