import React from 'react';
import BankingCell from './BankingCell';
import { BankingItem } from './banking';

interface BankingCellGroupProps {
  items: BankingItem[];
  className?: string;
}

const BankingCellGroup: React.FC<BankingCellGroupProps> = ({ 
  items, 
  className = "" 
}) => {
  return (
    <div className={`box-border content-stretch flex flex-col gap-0 items-start justify-start p-0 relative shrink-0 w-full ${className}`}>
      {items.map((item, index) => (
        <BankingCell 
          key={item.id} 
          item={item}
          index={index}
        />
      ))}
    </div>
  );
};

export default BankingCellGroup;