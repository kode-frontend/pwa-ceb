import { useTheme } from "@context/ThemeProvider";

function CurrencyExchangeIcon() {
  const { theme } = useTheme();

  const backgroundColorSvg = theme === "standard" ? "#316DCC" : "white";
  const backgroundColor = theme === "standard" ? "white" : "#FFFFFF1F";
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-[100px] shrink-0"
      data-name="container"
      style={{ backgroundColor, borderRadius: "50%" }}
    >
      <div className="relative shrink-0" data-name="safe-square-svgrepo-com 2">
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            width="32"
            height="32"
            rx="16"
            fill={backgroundColorSvg}
            fillOpacity="0.08"
          />
          <path
            d="M14.999 12.2701C15.3613 10.1299 17.2239 8.5 19.4671 8.5C21.97 8.5 23.999 10.529 23.999 13.0319C23.999 15.2752 22.3691 17.1378 20.2289 17.5"
            stroke={backgroundColorSvg}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 23.5002C15.9853 23.5002 18 21.4854 18 19.0002C18 16.5149 15.9853 14.5002 13.5 14.5002C11.0147 14.5002 9 16.5149 9 19.0002C9 21.4854 11.0147 23.5002 13.5 23.5002Z"
            stroke={backgroundColorSvg}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 13.7503C9 11.2625 11.0121 9.25034 13.5 9.25034L12.8571 10.536"
            stroke={backgroundColorSvg}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 18.2497C24 20.7375 21.9879 22.7497 19.5 22.7497L20.1429 21.464"
            stroke={backgroundColorSvg}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CurrencyExchangeIcon;
