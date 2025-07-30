import { useState } from "react";
import Button from "../Content/Button";
import Card from "../Content/Card";
import CurrencyExchangeIcon from "./CurrencyExchangeIcon";
import TransferViaSBPIcon from "./TransferViaSBPIcon";
import ButtonSettingsFavorite from "./ButtonSettingsFavorite";

function Suggest() {
  const [cards, setCards] = useState([
    {
      id: "card",
      title: "Обмен валюты",
      navigateLink: "/pwa-ceb/count-change",
      component: Card,
      icon: CurrencyExchangeIcon,
    },
    {
      id: "card1",
      title: "Перевод по СБП",
      navigateLink: "/pwa-ceb/sbp",
      component: Card,
      icon: TransferViaSBPIcon,
    },
  ]);

  const removeCard = (idToRemove: string) => {
    setCards((prev) => prev.filter((c) => c.id !== idToRemove));
  };

  if (cards.length === 0) {
    return (
      <div
        className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0 w-full overflow-x-auto scrollbar-hide z-1"
        data-name="suggest"
      >
        <ButtonSettingsFavorite />
      </div>
    );
  }
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative shrink-0 w-full overflow-x-auto scrollbar-hide z-1"
      data-name="suggest"
    >
      <div className="flex flex-row items-center self-stretch shrink-0">
        <Button />
      </div>

      {cards.map(
        ({ id, component: Component, title, navigateLink, icon: Icon }) => (
          <Component
            key={id}
            onRemove={() => removeCard(id)}
            title={title}
            navigateLink={navigateLink}
            icon={Icon}
          />
        )
      )}
    </div>
  );
}

export default Suggest;
