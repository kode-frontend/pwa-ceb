import React from "react";
import BankingSectionHeader from "./BankingSectionHeader";
import BankingCellGroup from "./BankingCellGroup";
import { BankingItem, BankingSection as BankingSectionType } from "./banking";

interface BankingSectionProps {
  section: BankingSectionType;
  className?: string;
  onItemClick?: (item: BankingItem) => void;
  onToggleSwitch?: (item: BankingItem, enabled: boolean) => void;
  onSectionToggle?: (section: BankingSectionType) => void
}

const BankingSection: React.FC<BankingSectionProps> = ({
  section,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-2 relative rounded-xl shrink-0 w-full banking-card shadow-banking ${className}`}
    >
      <BankingSectionHeader section={section} />
      <BankingCellGroup items={section.items} />
    </div>
  );
};

export default BankingSection;
