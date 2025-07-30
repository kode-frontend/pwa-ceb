import React, { JSX } from "react";
import { BankingScreenState } from "./banking";

export const renderStateContent = (
  state: BankingScreenState
): JSX.Element | null => {
  switch (state) {
    case BankingScreenState.LOADING:
      return React.createElement(
        "div",
        { className: "flex items-center justify-center py-8" },
        React.createElement("div", {
          className:
            "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
        })
      );

    case BankingScreenState.ERROR:
      return React.createElement(
        "div",
        { className: "flex items-center justify-center py-8" },
        React.createElement(
          "div",
          {
            className: "text-red-600 text-center",
          },
          "Ошибка загрузки настроек"
        )
      );

    case BankingScreenState.LOADED:
      return null;

    default:
      const _exhaustiveCheck: never = state;
      throw new Error(`Unhandled banking screen state: ${_exhaustiveCheck}`);
  }
};