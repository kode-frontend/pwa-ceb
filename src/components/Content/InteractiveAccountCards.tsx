import { useState } from "react";
import { CardsTabContent } from "./CardTabsContent";
import { CreditsTabContent } from "./CreditsTabContent";
import { DepositTabContent } from "./DepositTabContent";
import { InvestmentTabContent } from "./InvestmentTabContent";

const TABS: Tab[] = [
  { id: "cards", label: "Карты и счета (3)" },
  { id: "credits", label: "Кредиты (1)" },
  { id: "deposits", label: "Вклады" },
  { id: "investments", label: "Инвестиции" },
];

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="tabs">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row flex-nowrap gap-4 items-start justify-start leading-[0] not-italic overflow-x-auto pb-1 pt-4 px-4 relative scrollbar-hide text-[16px] text-left text-nowrap tracking-[-0.16px] w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative shrink-0 cursor-pointer transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-[#191919] font-semibold"
                  : "text-[#9ba5b3] hover:text-[#6f7884] font-semibold"
              }`}
            >
              <h4 className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre font-sans">
                {tab.label}
              </h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export type TabType = "cards" | "credits" | "deposits" | "investments";

export interface Tab {
  id: TabType;
  label: string;
}

export interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export interface CardsTabContentProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export interface EmptyTabContentProps {
  message: string;
}

export function InteractiveAccountCards() {
  const [activeTab, setActiveTab] = useState<TabType>("cards");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "cards":
        return (
          <CardsTabContent isExpanded={isExpanded} onToggle={handleToggle} />
        );
      case "credits":
        return <CreditsTabContent />;
      case "deposits":
        return <DepositTabContent />;
      case "investments":
        return <InvestmentTabContent />;
      default:
        return null;
    }
  };

  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip rounded-3xl size-full z-1"
      data-name="cards"
    >
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      {renderTabContent()}
    </div>
  );
}
