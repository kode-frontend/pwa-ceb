import { svgPaths } from "@shared/constants/svgPaths";

function DocumentsCopyDocument() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Documents/Copy-Document"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Documents/Copy-Document">
          <g id="Icon">
            <path d={svgPaths.p27c3d680} fill="var(--fill-0, #316DCC)" />
            <path d={svgPaths.p3b05b000} fill="var(--fill-0, #316DCC)" />
            <path d={svgPaths.p8d3cd00} fill="var(--fill-0, #316DCC)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p19698600}
              fill="var(--fill-0, #316DCC)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default DocumentsCopyDocument;
