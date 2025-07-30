import React, { JSX } from "react";
import { BankingIconType, BankingItem } from "./banking";
import { svgPaths } from "@shared/constants/svgPaths";

interface BankingCellProps {
  item: BankingItem;
  className?: string;
  index?: number;
}

// Switch-based icon renderer согласно guidelines
const renderIcon = (iconType: BankingIconType): JSX.Element => {
  switch (iconType) {
    case BankingIconType.QR:
      return (
        <div className="relative shrink-0 size-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H8C3.58172 36 0 32.4183 0 28V8Z"
              fill="#F1F5FC"
            />
            <path
              d="M9 16V10C9 9.71667 9.09583 9.47917 9.2875 9.2875C9.47917 9.09583 9.71667 9 10 9H16C16.2833 9 16.5208 9.09583 16.7125 9.2875C16.9042 9.47917 17 9.71667 17 10V16C17 16.2833 16.9042 16.5208 16.7125 16.7125C16.5208 16.9042 16.2833 17 16 17H10C9.71667 17 9.47917 16.9042 9.2875 16.7125C9.09583 16.5208 9 16.2833 9 16ZM11 15H15V11H11V15ZM9 26V20C9 19.7167 9.09583 19.4792 9.2875 19.2875C9.47917 19.0958 9.71667 19 10 19H16C16.2833 19 16.5208 19.0958 16.7125 19.2875C16.9042 19.4792 17 19.7167 17 20V26C17 26.2833 16.9042 26.5208 16.7125 26.7125C16.5208 26.9042 16.2833 27 16 27H10C9.71667 27 9.47917 26.9042 9.2875 26.7125C9.09583 26.5208 9 26.2833 9 26ZM11 25H15V21H11V25ZM19 16V10C19 9.71667 19.0958 9.47917 19.2875 9.2875C19.4792 9.09583 19.7167 9 20 9H26C26.2833 9 26.5208 9.09583 26.7125 9.2875C26.9042 9.47917 27 9.71667 27 10V16C27 16.2833 26.9042 16.5208 26.7125 16.7125C26.5208 16.9042 26.2833 17 26 17H20C19.7167 17 19.4792 16.9042 19.2875 16.7125C19.0958 16.5208 19 16.2833 19 16ZM21 15H25V11H21V15ZM25 27V25H27V27H25ZM19 21V19H21V21H19ZM21 23V21H23V23H21ZM19 25V23H21V25H19ZM21 27V25H23V27H21ZM23 25V23H25V25H23ZM23 21V19H25V21H23ZM25 23V21H27V23H25Z"
              fill="#191919"
            />
          </svg>
        </div>
      );

    case BankingIconType.SBP:
      return (
        <div className="relative shrink-0 size-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H8C3.58172 36 0 32.4183 0 28V8Z"
              fill="#F1F5FC"
            />
            <path
              d="M8.40039 11.224L11.3068 16.419V19.5878L8.40379 24.7726L8.40039 11.224Z"
              fill="#5B57A2"
            />
            <path
              d="M19.5596 14.5287L22.283 12.8595L27.8566 12.8543L19.5596 17.9371V14.5287Z"
              fill="#D90751"
            />
            <path
              d="M19.5443 11.1934L19.5597 18.0714L16.6465 16.2814V6L19.5445 11.1934H19.5443Z"
              fill="#FAB718"
            />
            <path
              d="M27.8567 12.8542L22.2829 12.8594L19.5443 11.1934L16.6465 6L27.8565 12.8542H27.8567Z"
              fill="#ED6F26"
            />
            <path
              d="M19.5597 24.8014V21.4644L16.6465 19.7084L16.6481 30L19.5597 24.8014Z"
              fill="#63B22F"
            />
            <path
              d="M22.2764 23.1474L11.3066 16.419L8.40039 11.224L27.845 23.1406L22.2762 23.1474H22.2764Z"
              fill="#1487C9"
            />
            <path
              d="M16.6484 30L19.5596 24.8014L22.2762 23.1474L27.8448 23.1406L16.6484 30Z"
              fill="#017F36"
            />
            <path
              d="M8.40332 24.7725L16.6699 19.7085L13.8907 18.0033L11.3063 19.5877L8.40332 24.7725Z"
              fill="#984995"
            />
          </svg>
        </div>
      );

    case BankingIconType.BANK:
      return (
        <div className="relative shrink-0 size-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H8C3.58172 36 0 32.4183 0 28V8Z"
              fill="#F1F5FC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8321 7.24802C17.5779 6.91733 18.4221 6.91733 19.1679 7.24802L27.7995 11.0754C29.7751 11.9514 29.1703 15 27.0209 15H8.97906C6.82967 15 6.22489 11.9514 8.20047 11.0754L16.8321 7.24802ZM18.3893 9.12765C18.1407 9.01742 17.8593 9.01742 17.6107 9.12765L9.41076 12.7635C9.31198 12.8073 9.34324 12.9549 9.45129 12.9549H26.5487C26.6568 12.9549 26.688 12.8073 26.5892 12.7635L18.3893 9.12765Z"
              fill="#0F0F0F"
            />
            <path
              d="M8 28C8 27.4477 8.44772 27 9 27H27C27.5523 27 28 27.4477 28 28C28 28.5523 27.5523 29 27 29H9C8.44772 29 8 28.5523 8 28Z"
              fill="#0F0F0F"
            />
            <path
              d="M12 26C11.4477 26 11 25.5523 11 25V17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17V25C13 25.5523 12.5523 26 12 26Z"
              fill="#0F0F0F"
            />
            <path
              d="M23 25C23 25.5523 23.4477 26 24 26C24.5523 26 25 25.5523 25 25V17C25 16.4477 24.5523 16 24 16C23.4477 16 23 16.4477 23 17V25Z"
              fill="#0F0F0F"
            />
            <path
              d="M21.9625 20.7717C21.9387 20.6981 21.903 20.6309 21.8574 20.5739L19.8568 18.1763C19.8102 18.1204 19.7548 18.0761 19.6939 18.0458C19.633 18.0156 19.5677 18 19.5017 18C19.3685 18 19.2408 18.0634 19.1466 18.1763C19.0524 18.2892 18.9995 18.4422 18.9995 18.6019C18.9995 18.7615 19.0524 18.9146 19.1466 19.0274L20.297 20.4001H14.5002C14.3675 20.4001 14.2403 20.4632 14.1465 20.5756C14.0527 20.6881 14 20.8405 14 20.9995C14 21.1585 14.0527 21.3109 14.1465 21.4233C14.2403 21.5357 14.3675 21.5989 14.5002 21.5989H20.297L19.1466 22.9715C19.0997 23.0273 19.0625 23.0936 19.0371 23.1666C19.0117 23.2396 18.9987 23.318 18.9987 23.3971C18.9987 23.4762 19.0117 23.5546 19.0371 23.6276C19.0625 23.7007 19.0997 23.767 19.1466 23.8227C19.1931 23.8789 19.2484 23.9235 19.3094 23.9539C19.3703 23.9843 19.4357 24 19.5017 24C19.5677 24 19.6331 23.9843 19.6941 23.9539C19.755 23.9235 19.8103 23.8789 19.8568 23.8227L21.8574 21.4251C21.903 21.3681 21.9387 21.3008 21.9625 21.2273C22.0125 21.0813 22.0125 20.9176 21.9625 20.7717Z"
              fill="black"
            />
          </svg>
        </div>
      );

    case BankingIconType.BANK2:
      return (
        <div className="relative shrink-0 size-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H8C3.58172 36 0 32.4183 0 28V8Z"
              fill="#F1F5FC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8321 7.24802C17.5779 6.91733 18.4221 6.91733 19.1679 7.24802L27.7995 11.0754C29.7751 11.9514 29.1703 15 27.0209 15H8.97906C6.82967 15 6.22489 11.9514 8.20047 11.0754L16.8321 7.24802ZM18.3893 9.12765C18.1407 9.01742 17.8593 9.01742 17.6107 9.12765L9.41076 12.7635C9.31198 12.8073 9.34324 12.9549 9.45129 12.9549H26.5487C26.6568 12.9549 26.688 12.8073 26.5892 12.7635L18.3893 9.12765Z"
              fill="#0F0F0F"
            />
            <path
              d="M8 28C8 27.4477 8.44772 27 9 27H27C27.5523 27 28 27.4477 28 28C28 28.5523 27.5523 29 27 29H9C8.44772 29 8 28.5523 8 28Z"
              fill="#0F0F0F"
            />
            <path
              d="M17 25C17 25.5523 17.4477 26 18 26C18.5523 26 19 25.5523 19 25V17C19 16.4477 18.5523 16 18 16C17.4477 16 17 16.4477 17 17V25Z"
              fill="#0F0F0F"
            />
            <path
              d="M12 26C11.4477 26 11 25.5523 11 25V17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17V25C13 25.5523 12.5523 26 12 26Z"
              fill="#0F0F0F"
            />
            <path
              d="M23 25C23 25.5523 23.4477 26 24 26C24.5523 26 25 25.5523 25 25V17C25 16.4477 24.5523 16 24 16C23.4477 16 23 16.4477 23 17V25Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
      );

    case BankingIconType.CURRENCY:
      return (
        <div className="relative shrink-0 size-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H8C3.58172 36 0 32.4183 0 28V8Z"
              fill="#F1F5FC"
            />
            <path
              d="M20 22H25V27M16 14H11V9M25.4176 15.0034C24.8569 13.6157 23.9181 12.413 22.708 11.5322C21.4979 10.6514 20.0652 10.1275 18.5723 10.0205C17.0794 9.9135 15.5861 10.2274 14.2627 10.9266C12.9393 11.6258 11.8388 12.6825 11.0859 13.9761M10.582 20.9971C11.1427 22.3848 12.0815 23.5874 13.2916 24.4682C14.5017 25.3491 15.9359 25.8723 17.4288 25.9793C18.9217 26.0863 20.4138 25.7725 21.7371 25.0732C23.0605 24.374 24.1603 23.3175 24.9131 22.0239"
              stroke="#191919"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      );

    case BankingIconType.TRANSFER:
      return (
        <div className="relative shrink-0 size-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V28C36 32.4183 32.4183 36 28 36H8C3.58172 36 0 32.4183 0 28V8Z"
              fill="#F1F5FC"
            />
            <path
              d="M8 18.6099H25"
              stroke="#191919"
              stroke-width="1.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25 16.2798V23.4298C24.97 26.2798 24.19 26.9998 21.22 26.9998H11.78C8.76003 26.9998 8 26.2498 8 23.2698V16.2798C8 13.5798 8.63 12.7098 11 12.5698C11.24 12.5598 11.5 12.5498 11.78 12.5498H21.22C24.24 12.5498 25 13.2998 25 16.2798Z"
              stroke="#191919"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28 12.73V19.72C28 22.42 27.37 23.29 25 23.43V16.28C25 13.3 24.24 12.55 21.22 12.55H11.78C11.5 12.55 11.24 12.56 11 12.57C11.03 9.72 11.81 9 14.78 9H24.22C27.24 9 28 9.75 28 12.73Z"
              stroke="#191919"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 23.8101H12.97"
              stroke="#191919"
              stroke-width="1.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.1094 23.8101H18.5494"
              stroke="#191919"
              stroke-width="1.8"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      );

    case BankingIconType.CHEVRON:
      return (
        <div className="max-h-6 max-w-6 min-h-6 min-w-6 relative shrink-0 size-6">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 24 24"
          >
            <g id="--iconShevron">
              <path
                d={svgPaths.pbef0580}
                fill="var(--fill-0, #9BA5B3)"
                id="Vector"
              />
            </g>
          </svg>
        </div>
      );

    default:
      return <></>;
  }
};

// Switch-based switch component renderer
const renderSwitch = (
  enabled: boolean,
  onToggle?: (enabled: boolean) => void
): JSX.Element => {
  const switchStyle = enabled ? "bg-[#316dcc]" : "bg-[#e2e4ea]";

  const knobStyle = enabled ? "right-0.5" : "left-0.5";

  return (
    <div className="box-border content-stretch flex flex-col h-6 items-end justify-center p-0 relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
        <div
          className={`${switchStyle} h-8 overflow-clip relative rounded-[100px] shrink-0 w-[52px] cursor-pointer`}
          onClick={() => onToggle?.(!enabled)}
        >
          <div
            className={`absolute bg-[#ffffff] ${knobStyle} rounded-[100px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_3px_8px_0px_rgba(0,0,0,0.15),0px_3px_1px_0px_rgba(0,0,0,0.06)] size-7 top-1/2 translate-y-[-50%] transition-all duration-200`}
          />
        </div>
      </div>
    </div>
  );
};

const BankingCell: React.FC<BankingCellProps> = ({ item, className = "", index }) => {
  // Switch-based cell type rendering согласно guidelines
  const renderCellContent = (): JSX.Element => {
    switch (true) {
      case item.iconType && item.hasSwitch:
        return (
          <div className={`relative shrink-0 w-full ${className}`}>
            <div className="flex flex-col justify-center relative size-full">
              <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-4 py-3 relative w-full">
                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-between p-0 relative shrink-0 w-full">
                  <div className="flex flex-row items-center gap-3">
                    <div className="banking-icon-wrapper min-h-11 min-w-11 overflow-clip p-[6px] relative rounded-lg shrink-0 size-9">
                      {renderIcon(item.iconType as BankingIconType)}
                    </div>
                    <div className="font-sans text-[#191919] css-svg34a banking-text-primary text-left tracking-[-0.4px] leading-[24px] overflow-hidden text-ellipsis">
                      {item.title}
                    </div>
                  </div>
                  {renderSwitch(item.switchEnabled || false, item.onToggle)}
                </div>
              </div>
            </div>
            {/* Divider */}
            {index !== 7 && <div className="border-b w-full ml-[20px]" />}
            <div className="absolute bottom-[-1px] box-border content-stretch flex flex-col items-start justify-start left-0 pl-4 pr-0 py-0 right-0">
              <div className="banking-divider h-px relative shrink-0 w-full" />
            </div>
          </div>
        );
      case item.hasSwitch:
        return (
          <div className={`relative shrink-0 w-full ${className}`}>
            <div className="flex flex-row items-center relative size-full">
              <div className="size-full">
                <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start pl-16 pr-4 py-3 relative w-full">
                  <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                      <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
                          <div className="font-sans text-[#191919] -webkit-box basis-0 css-svg34a banking-text-primary grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-left tracking-[-0.4px]">
                            <p className="block leading-[24px]">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {renderSwitch(item.switchEnabled || false, item.onToggle)}
                </div>
                <div className="border-b w-full ml-[60px]" />
              </div>
            </div>
            {/* Divider */}
            <div className="absolute bottom-[-1px] box-border content-stretch flex flex-col items-start justify-start left-0 pl-16 pr-0 py-0 right-0">
              <div className="banking-divider h-px relative shrink-0 w-full" />
            </div>
          </div>
        );

      case Boolean(item.iconType):
        return (
          <div className={`relative shrink-0 w-full ${className}`}>
            <div className="flex flex-col justify-center relative size-full">
              <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-4 py-3 relative w-full">
                <div
                  className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full cursor-pointer"
                  onClick={item.onClick}
                >
                  <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                    <div className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                        <div className="banking-icon-wrapper min-h-11 min-w-11 overflow-clip p-[6px] relative rounded-lg shrink-0 size-9">
                          {item.iconType &&
                            renderIcon(item.iconType as BankingIconType)}
                        </div>
                      </div>
                      <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full">
                          <div className="font-sans text-[#191919] -webkit-box basis-0 css-svg34a banking-text-primary grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-left tracking-[-0.4px]">
                            <p className="block leading-[24px]">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {item.hasChevron && (
                    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-6">
                      {renderIcon(BankingIconType.CHEVRON)}
                    </div>
                  )}
                </div>
              </div>
              {index !== 1 && <div className="border-b w-full ml-[20px]" />}
            </div>
            {/* Divider */}
            <div className="absolute bottom-[-1px] box-border content-stretch flex flex-col items-start justify-start left-0 pl-4 pr-0 py-0 right-0">
              <div className="banking-divider h-px relative shrink-0 w-full" />
            </div>
          </div>
        );

      default:
        return (
          <div className={`relative shrink-0 w-full ${className}`}>
            <div className="font-sans text-[#191919] banking-text-primary p-4">
              {item.title}
            </div>
          </div>
        );
    }
  };

  return renderCellContent();
};

export default BankingCell;
