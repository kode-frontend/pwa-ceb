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
      { path: "/pwa-ceb/payments", element: <PaymentsScreen /> },
      { path: "/pwa-ceb/settings", element: <SettingsScreen /> },
      { path: "/pwa-ceb/profile", element: <ProfileScreen /> },
      { path: "/pwa-ceb/scan-qr", element: <ScanQrScreen /> },
      { path: "/pwa-ceb/search", element: <SearchScreen /> },
      { path: "/pwa-ceb/notifications", element: <NotificationsScreen /> },
      { path: "/pwa-ceb/add-service", element: <AddServiceScreen /> },
      { path: "/pwa-ceb/count-change", element: <CountChangeScreen /> },
      { path: "/pwa-ceb/sbp", element: <SbpScreen /> },
      { path: "/pwa-ceb/debet-card", element: <DebetScreen /> },
      { path: "/pwa-ceb/credit-card", element: <CreditCardScreen /> },
      { path: "/pwa-ceb/credit", element: <CreditScreen /> },
      { path: "/pwa-ceb/moment", element: <CreditMomentScreen /> },
      { path: "/pwa-ceb/bank-deposit", element: <BankDepositScreen /> },
      { path: "/pwa-ceb/invest", element: <InvestScreen /> },
      { path: "/pwa-ceb/new-product", element: <NewProductScreen /> },
      { path: "/pwa-ceb/promise-pay", element: <PromisePayScreen /> },
      { path: "/pwa-ceb/promise-pay-points", element: <PromisePayPointsScreen /> },
      { path: "/pwa-ceb/analytics", element: <AnalyticsScreen /> },
      { path: "/pwa-ceb/invite", element: <InviteScreen /> },
      { path: "/pwa-ceb/additional-points", element: <AdditionalPointsScreen /> },
      { path: "/pwa-ceb/cashback", element: <CashBackScreen /> },
      { path: "/pwa-ceb/formular", element: <FormularScreen /> },
      { path: "/pwa-ceb/questions", element: <QuestionsScreen /> },
      { path: "/pwa-ceb/connect", element: <ConnectScreen /> },
      { path: "/pwa-ceb/credit-story", element: <CreditStoryScreen /> },
      { path: "/pwa-ceb/office", element: <OfficeScreen /> },
      { path: "/pwa-ceb/order", element: <OrderScreen /> },
      { path: "/pwa-ceb/loans", element: <CreditsScreen /> },
      { path: "/pwa-ceb/chats", element: <ChatsScreen /> },
      { path: "/pwa-ceb/theme", element: <ColorSelectionScreen /> },
    ],
  },
]);
