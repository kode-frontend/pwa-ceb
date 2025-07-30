import React, { JSX } from 'react';
import { BankingSection } from './banking';
import { svgPaths } from '@shared/constants/svgPaths';


interface BankingSectionHeaderProps {
  section: BankingSection;
  className?: string;
}

// Switch-based header type rendering согласно guidelines
const renderHeaderContent = (section: BankingSection): JSX.Element => {
  switch (section.title) {
    case "Переводы":
      return (
        <div className="font-sans font-semibold leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-left text-nowrap tracking-[-0.4px]">
          <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Переводы
          </p>
        </div>
      );
    
    case "Платежи":
      return (
        <div className="font-sans font-semibold leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-left text-nowrap tracking-[-0.4px]">
          <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Платежи
          </p>
        </div>
      );
    
    default:
      return (
        <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] text-left text-nowrap tracking-[-0.4px]">
          <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            {section.title}
          </p>
        </div>
      );
  }
};

const renderChevronIcon = (): JSX.Element => (
  <div className="max-h-6 max-w-6 min-h-6 min-w-6 relative shrink-0 size-6">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 24 24">
      <g id="--iconShevron">
        <path d={svgPaths.p211ffb00} fill="var(--fill-0, #9BA5B3)" id="Vector" />
      </g>
    </svg>
  </div>
);

const BankingSectionHeader: React.FC<BankingSectionHeaderProps> = ({ 
  section, 
  className = "" 
}) => {
  return (
    <div 
      className={`self-start box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[343px] ${className}`}
    >
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-3 relative w-full">
            <div 
              className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative rounded-xl shrink-0 w-full cursor-pointer"
              onClick={section.onToggle}
            >
              <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start pl-0 pr-3 py-0 relative shrink-0">
                {section.hasChevron && (
                  <div className="relative shrink-0 size-6">
                    <div className="absolute box-border content-stretch flex flex-row items-center justify-center left-1/2 overflow-clip p-[12px] size-11 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      {renderChevronIcon()}
                    </div>
                  </div>
                )}
              </div>
              {renderHeaderContent(section)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingSectionHeader;