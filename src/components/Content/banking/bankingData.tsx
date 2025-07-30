import { BankingIconType, BankingSettings } from "./banking";

export const bankingSettingsData: BankingSettings = {
  notificationText: "Активируйте раздел, чтобы добавить его на главный экран",
  sections: [
    {
      id: "transfers",
      title: "Переводы",
      hasChevron: true,
      isExpanded: true,
      items: [
        {
          id: "qr-operations",
          title: "Операции по QR коду",
          iconType: BankingIconType.QR,
          hasChevron: true,
          onClick: () => console.log("QR операции clicked"),
        },
        {
          id: "sbp-operations",
          title: "Операции по СБП",
          iconType: BankingIconType.SBP,
          hasChevron: true,
          onClick: () => console.log("СБП операции clicked"),
        },
        {
          id: "phone-transfer",
          title: "Перевод по номеру телефона",
          hasSwitch: true,
          switchEnabled: false,
          isSubItem: true,
          onToggle: (enabled) =>
            console.log("Phone transfer toggled:", enabled),
        },
        {
          id: "account-refill",
          title: "Пополнение с моего счета в другом банке",
          hasSwitch: true,
          switchEnabled: true,
          isSubItem: true,
          onToggle: (enabled) =>
            console.log("Account refill toggled:", enabled),
        },
        {
          id: "account-transfer",
          title: "Перевод по номеру счета",
          iconType: BankingIconType.BANK,
          hasChevron: true,
          onClick: () => console.log("Account transfer clicked"),
        },
        {
          id: "operation-transfer",
          title: "Между своими счетами",
          iconType: BankingIconType.BANK2,
          hasChevron: true,
          onClick: () => console.log("Account transfer clicked"),
        },
        {
          id: "change-currency",
          title: "Обмен валюты",
          iconType: BankingIconType.CURRENCY,
          hasSwitch: true,
          switchEnabled: true,
          isSubItem: true,
          onToggle: (enabled) =>
            console.log("Account refill toggled:", enabled),
        },
        {
          id: "card-to-card-transfer",
          title: "Перевод с карты на карту",
          iconType: BankingIconType.TRANSFER,
          hasSwitch: true,
          switchEnabled: false,
          isSubItem: true,
          onToggle: (enabled) =>
            console.log("Account refill toggled:", enabled),
        },
      ],
    },
    {
      id: "payments",
      title: "Платежи",
      hasChevron: true,
      isExpanded: false,
      items: [
        {
          id: "mobile-payment",
          title: "Мобильная связь",
          iconType: BankingIconType.BANK,
          hasChevron: true,
          onClick: () => console.log("Mobile payment clicked"),
        },
        {
          id: "internet-payment",
          title: "Интернет",
          iconType: BankingIconType.BANK,
          hasChevron: true,
          onClick: () => console.log("Internet payment clicked"),
        },
      ],
    },
  ],
};
