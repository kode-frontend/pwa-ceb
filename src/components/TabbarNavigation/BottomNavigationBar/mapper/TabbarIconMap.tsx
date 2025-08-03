import { svgPaths } from "@shared/constants/svgPaths";
import { JSX } from "react";

export type TabbarRoute = "home" | "payments" | "loans" | "chats" | "settings";

function TabbarIconMap(backgroundColor: string, route: TabbarRoute) {
  const icons: Record<TabbarRoute, JSX.Element> = {
    home: (
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="home">
          <path
            d="M10.0015 15.2325V12.5329"
            id="Vector"
            stroke={backgroundColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d={svgPaths.p4c1e880}
            id="Vector_2"
            stroke={backgroundColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </g>
      </svg>
    ),
    payments: (
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="transfer-4-svgrepo-com 1">
          <path d={svgPaths.pea3a400} fill={backgroundColor} id="å½¢ç¶" />
        </g>
      </svg>
    ),
    loans: (
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="coins">
          <path
            d={svgPaths.p4974400}
            id="vector"
            stroke={backgroundColor}
            strokeWidth="1.8"
          />
          <path
            d={svgPaths.p21deb000}
            id="vector_2"
            stroke={backgroundColor}
            strokeWidth="1.8"
          />
          <path
            d={svgPaths.p19b993f0}
            id="vector_3"
            stroke={backgroundColor}
            strokeWidth="1.8"
          />
          <path
            d={svgPaths.p381ed800}
            id="vector_4"
            stroke={backgroundColor}
            strokeWidth="1.8"
          />
          <circle
            cx="14.806"
            cy="14.95"
            id="vector_5"
            r="4.05"
            stroke={backgroundColor}
            strokeWidth="1.8"
          />
        </g>
      </svg>
    ),
    chats: (
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="messages-2">
          <path
            d={svgPaths.p4a3d00}
            id="Vector"
            stroke={backgroundColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d={svgPaths.p5be9d70}
            id="Vector_2"
            stroke={backgroundColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </g>
      </svg>
    ),
    settings: (
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 20"
      >
        <g id="Settings">
          <circle
            cx="2.7"
            cy="2.7"
            id="Ellipse 33"
            r="2.7"
            stroke={backgroundColor}
            strokeWidth="1.8"
            transform="matrix(-1 0 0 1 12.2337 7.3)"
          />
          <path d={svgPaths.p3069ad00} fill={backgroundColor} id="Subtract" />
        </g>
      </svg>
    ),
  };
  return icons[route]
}
export default TabbarIconMap;
