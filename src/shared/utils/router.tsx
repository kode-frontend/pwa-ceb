import { createBrowserRouter } from "react-router-dom";

import { PaymentsScreen } from "@pages/PaymentsScreen";
import { SettingsScreen } from "@pages/SettingsScreen";
import { HomeScreen } from "@pages/HomeScreen";
import ProfileScreen from "@pages/ProfileScreen";
import ScanQrScreen from "@pages/ScanQrScreen";
import SearchScreen from "@pages/SearchScreen";
import NotificationsScreen from "@pages/NotificationsScreen";
import AddServiceScreen from "@pages/AddServiceScreen";
import CountChangeScreen from "@pages/CountChangeScreen";
import SbpScreen from "@pages/SbpScreen";
import DebetScreen from "@pages/DebetScreen";
import CreditScreen from "@pages/CreditScreen";
import CreditCardScreen from "@pages/CreditCardScreen";
import BankDepositScreen from "@pages/BankDepositScreen";
import InvestScreen from "@pages/InvestScreen";
import NewProductScreen from "@pages/NewProductScreen";
import PromisePayScreen from "@pages/PromisePayScreen";
import PromisePayPointsScreen from "@pages/PromisePayPointsScreen";
import AnalyticsScreen from "@pages/AnalyticsScreen";
import InviteScreen from "@pages/InviteScreen";
import AdditionalPointsScreen from "@pages/AdditionalPointsScreen";
import CashBackScreen from "@pages/CashBackScreen";
import FormularScreen from "@pages/FormularScreen";
import QuestionsScreen from "@pages/QuestionsScreen";
import ConnectScreen from "@pages/ConnectScreen";
import CreditStoryScreen from "@pages/CreditStoryScreen";
import OfficeScreen from "@pages/OfficeScreen";
import OrderScreen from "@pages/OrderScreen";
import { CreditsScreen } from "@pages/CreditsScreen";
import { ChatsScreen } from "@pages/ChatsScreen";
import { ColorSelectionScreen } from "@pages/ColorSelectionScreen";
import CreditMomentScreen from "@pages/CreditMomentScreen";
import { AppLayout } from "@app/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/pwa-ceb/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "payments", element: <PaymentsScreen /> },
      { path: "settings", element: <SettingsScreen /> },
      { path: "profile", element: <ProfileScreen /> },
      { path: "scan-qr", element: <ScanQrScreen /> },
      { path: "search", element: <SearchScreen /> },
      { path: "notifications", element: <NotificationsScreen /> },
      { path: "add-service", element: <AddServiceScreen /> },
      { path: "count-change", element: <CountChangeScreen /> },
      { path: "sbp", element: <SbpScreen /> },
      { path: "debet-card", element: <DebetScreen /> },
      { path: "credit-card", element: <CreditCardScreen /> },
      { path: "credit", element: <CreditScreen /> },
      { path: "moment", element: <CreditMomentScreen /> },
      { path: "bank-deposit", element: <BankDepositScreen /> },
      { path: "invest", element: <InvestScreen /> },
      { path: "new-product", element: <NewProductScreen /> },
      { path: "promise-pay", element: <PromisePayScreen /> },
      { path: "promise-pay-points", element: <PromisePayPointsScreen /> },
      { path: "analytics", element: <AnalyticsScreen /> },
      { path: "invite", element: <InviteScreen /> },
      { path: "additional-points", element: <AdditionalPointsScreen /> },
      { path: "cashback", element: <CashBackScreen /> },
      { path: "formular", element: <FormularScreen /> },
      { path: "questions", element: <QuestionsScreen /> },
      { path: "connect", element: <ConnectScreen /> },
      { path: "credit-story", element: <CreditStoryScreen /> },
      { path: "office", element: <OfficeScreen /> },
      { path: "order", element: <OrderScreen /> },
      { path: "loans", element: <CreditsScreen /> },
      { path: "chats", element: <ChatsScreen /> },
      { path: "theme", element: <ColorSelectionScreen /> },
    ],
  },
]);
