import { useState } from "react";

import SectionHeader from "@components/Shared/SectionHeader";
import SettingsRow from "@components/Shared/SettingsRow";

import { svgPaths } from "@shared/constants/svgPaths";

export const SettingsScreen = () => {
  const [showBlockedCards, setShowBlockedCards] = useState(false);
  const [hideBalance, setHideBalance] = useState(false);
  return (
    <div className="bg-[#F1F5FC] size-full  pt-[51px] pb-[51px] h-[100vh]">
      <div className="box-border content-stretch flex flex-col gap-2 h-[628px] items-start justify-start left-0 px-4 py-3 w-full">
        <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[20px] shrink-0 w-full">
          <SectionHeader title="Главный экран" />

          <SettingsRow
            icon={
              <div className="max-h-6 max-w-6 min-h-6 min-w-6 relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path d={svgPaths.pd10700} fill="#191919" />
                </svg>
              </div>
            }
            title="Разделы на главном"
            hasArrow={true}
          />

          <SettingsRow
            icon={
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={svgPaths.p20272f00}
                    stroke="#191919"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p46b4700}
                    stroke="#191919"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            }
            title="Показывать заблокированные карты"
            hasSwitch={true}
            switchEnabled={showBlockedCards}
            onSwitchChange={setShowBlockedCards}
          />

          <SettingsRow
            icon={
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={svgPaths.p2db86f80}
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            }
            title="Скрыть баланс на главном экране"
            hasSwitch={true}
            switchEnabled={hideBalance}
            onSwitchChange={setHideBalance}
          />
        </div>

        {/* Additional Options */}
        <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[20px] shrink-0 w-full">
          <SectionHeader title="Дополнительные опции" />

          <SettingsRow
            icon={<div className="h-6 shrink-0 w-[19.459px]" />}
            title="Настройки профиля СБП"
            hasArrow={true}
          />

          <SettingsRow
            icon={
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={svgPaths.p27197780}
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            }
            title="Разрешённые страны"
            hasArrow={true}
          />

          <SettingsRow
            icon={
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={svgPaths.p23616780}
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            }
            title="Лимиты на совершение операций"
            hasArrow={true}
          />

          <SettingsRow
            icon={
              <div className="relative size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 9L8 6M8 6L11 9M8 6V18"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p22a07d40}
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            }
            title="Запрет на совершение переводов"
            hasArrow={true}
          />

          <SettingsRow
            icon={
              <div className="relative shrink-0 size-6">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path d={svgPaths.p3bd87400} fill="#191919" />
                </svg>
              </div>
            }
            title="Разрешённое время работы"
            hasArrow={true}
          />
        </div>
      </div>
    </div>
  );
};
