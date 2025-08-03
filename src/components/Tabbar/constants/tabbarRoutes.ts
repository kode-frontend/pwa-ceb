import { TabbarRoute } from "../mapper/TabbarIconMap";

export const routes: { link: string; name: string; route: TabbarRoute }[] = [
  { link: "/home", name: "Главная", route: "home" },
  { link: "/payments", name: "Платежи", route: "payments" },
  { link: "/loans", name: "Кредиты", route: "loans" },
  { link: "/chats", name: "Чат", route: "chats" },
  { link: "/settings", name: "Настройки", route: "settings" },
];
