import { svgPaths } from '@shared/constants/svgPaths';
import React from 'react';

interface NotificationBadgeProps {
  text: string;
  className?: string;
}

function IconsetStatus() {
  return (
    <div
      className="max-h-6 max-w-6 min-h-6 min-w-6 relative shrink-0 size-6"
      data-name="--iconsetStatus"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="--iconsetStatus">
          <path
            d={svgPaths.p30fb9400}
            fill="var(--fill-0, #316DCC)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative shrink-0"
      data-name="--iconWrapper"
    >
      <IconsetStatus />
    </div>
  );
}

function TextBody({ text }: { text: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="--textBody 👉"
    >
      <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#316dcc] text-[16px] text-left tracking-[-0.4px]">
        <p className="block leading-[24px]">
          {text}
        </p>
      </div>
    </div>
  );
}

function Wrapper({ text }: { text: string }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="wrapper"
    >
      <TextBody text={text} />
    </div>
  );
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ 
  text, 
  className = "" 
}) => {
  return (
    <div
      className={`bg-[rgba(49,109,204,0.1)] relative rounded-xl shrink-0 w-full ${className}`}
      data-name="badgeText"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-4 py-3 relative w-full">
          <IconWrapper />
          <Wrapper text={text} />
        </div>
      </div>
    </div>
  );
};

export default NotificationBadge;