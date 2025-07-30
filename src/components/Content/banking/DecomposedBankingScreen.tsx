import React, { JSX, useState } from "react";
import NotificationBadge from "./NotificationBadge";
import BankingSection from "./BankingSection";
import { BankingScreenState, BankingSettings } from "./banking";
import { bankingSettingsData } from "./bankingData";
import { renderStateContent } from "./bankingUtils";

interface DecomposedBankingScreenProps {
  className?: string;
}

const DecomposedBankingScreen: React.FC<DecomposedBankingScreenProps> = ({
  className = "",
}) => {
  const [screenState, setScreenState] = useState<BankingScreenState>(
    BankingScreenState.LOADED
  );
  const [settings] = useState<BankingSettings>(bankingSettingsData);

  // Switch-based state rendering согласно guidelines
  const renderContent = (): JSX.Element => {
    switch (screenState) {
      case BankingScreenState.LOADING:
        return renderStateContent(screenState) || <div>Loading...</div>;

      case BankingScreenState.ERROR:
        return renderStateContent(screenState) || <div>Error occurred</div>;

      case BankingScreenState.LOADED:
        return (
          <>
            {settings.notificationText && (
              <NotificationBadge
                text={settings.notificationText}
                className="animate-slide-in"
              />
            )}

            {settings.sections.map((section) => (
              <BankingSection
                key={section.id}
                section={section}
                className="animate-slide-in"
              />
            ))}
          </>
        );

      default:
        const _exhaustiveCheck: never = screenState;
        throw new Error(`Unhandled screen state: ${_exhaustiveCheck}`);
    }
  };

  return (
    <div
      className={`relative size-full mobile-container safe-area-top safe-area-bottom ${className}`}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-4 py-3 relative size-full">
          {renderContent()}
        </div>
      </div>
      <div className="h-[200px]"/>
    </div>
  );
};

export default DecomposedBankingScreen;
