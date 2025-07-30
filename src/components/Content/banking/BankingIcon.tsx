import { svgPaths } from '@shared/constants/svgPaths';
import React from 'react';

interface BankingIconProps {
  type: 'qr' | 'sbp' | 'bank' | 'status' | 'chevron';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BankingIcon: React.FC<BankingIconProps> = ({ type, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'size-5',
    md: 'size-6',
    lg: 'size-8'
  };

  const renderIcon = () => {
    if (type === 'qr') {
      return (
        <svg
          className={`block size-full ${className}`}
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 24 24"
        >
          <g id="qr-icon">
            <path
              d={svgPaths.p3d300630}
              fill="var(--fill-0, #191919)"
              id="Vector"
            />
          </g>
        </svg>
      );
    }
    
    if (type === 'sbp') {
      return (
        <svg
          className={`block size-full ${className}`}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g id="sbp-icon">
            <path d={svgPaths.p22a1d380} fill="var(--fill-0, #5B57A2)" id="path" />
            <path d={svgPaths.p1cc18100} fill="var(--fill-0, #D90751)" id="path_2" />
            <path d={svgPaths.p3c84f00} fill="var(--fill-0, #FAB718)" id="path_3" />
            <path d={svgPaths.p3ae86200} fill="var(--fill-0, #ED6F26)" id="path_4" />
            <path d={svgPaths.p2d0ee000} fill="var(--fill-0, #63B22F)" id="path_5" />
            <path d={svgPaths.p11298d00} fill="var(--fill-0, #1487C9)" id="path_6" />
            <path d={svgPaths.p1d313600} fill="var(--fill-0, #017F36)" id="path_7" />
            <path d={svgPaths.p6c76b00} fill="var(--fill-0, #984995)" id="path_8" />
          </g>
        </svg>
      );
    }
    
    if (type === 'bank') {
      return (
        <svg
          className={`block size-full ${className}`}
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g id="bank-icon">
            <path
              clipRule="evenodd"
              d={svgPaths.p3d401e00}
              fill="var(--fill-0, #0F0F0F)"
              fillRule="evenodd"
              id="Vector"
            />
            <path d={svgPaths.pdd4c700} fill="var(--fill-0, #0F0F0F)" id="Vector_2" />
            <path d={svgPaths.p31f0c880} fill="var(--fill-0, #0F0F0F)" id="Vector_3" />
            <path d={svgPaths.p29eff700} fill="var(--fill-0, #0F0F0F)" id="Vector_4" />
            <path d={svgPaths.p2c0cb500} fill="var(--fill-0, black)" id="Vector_5" />
          </g>
        </svg>
      );
    }
    
    if (type === 'status') {
      return (
        <svg
          className={`block size-full ${className}`}
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 24 24"
        >
          <g id="status-icon">
            <path
              d={svgPaths.p30fb9400}
              fill="var(--fill-0, #316DCC)"
              id="Vector"
            />
          </g>
        </svg>
      );
    }
    
    if (type === 'chevron') {
      return (
        <svg
          className={`block size-full ${className}`}
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 24 24"
        >
          <g id="chevron-icon">
            <path
              d={svgPaths.p211ffb00}
              fill="var(--fill-0, #9BA5B3)"
              id="Vector"
            />
          </g>
        </svg>
      );
    }
    
    return null;
  };

  return (
    <div className={`${sizeClasses[size]} relative shrink-0`}>
      {renderIcon()}
    </div>
  );
};

export default BankingIcon;