import { useEffect, useMemo, useState } from "react";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { ThemeProvider, useTheme } from "@context/ThemeProvider";

import TabbarNavigation from "@components/Content/TabbarNavigation";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import SettingsNavigation from "@components/Shared/SettingsNavigation";
import { useSwipeBack } from "@shared/hooks/useSwipeBack";
import NotificationsNavigation from "@components/Shared/NotificationsNavigation";
import AddServiceNavigation from "@components/Shared/AddServiceNavigation";
import CountChangeNavigation from "@components/Shared/CountChangeNavigation";
import SbpNavigation from "@components/Shared/SbpNavigation";
import DebetNavigation from "@components/Shared/DebetNavigation";
import CreditCardNavigation from "@components/Shared/CreditCardNavigation";
import CreditNavigation from "@components/Shared/CreditNavigation";
import BankDepositNavigation from "@components/Shared/BankDepositNavigation";
import InvestNavigation from "@components/Shared/InvestNavigation";
import NewProductNavigation from "@components/Shared/NewProductNavigation";
import PromisePayNavigation from "@components/Shared/PromisePayNavigation";
import PromisePayPointsNavigation from "@components/Shared/InviteNavigation";
import AnalyticsNavigation from "@components/Shared/AnalyticsNavigation";
import InviteNavigation from "@components/Shared/InviteNavigation";
import AdditionalPointsNavigation from "@components/Shared/AdditionalPointsNavigation";
import CashbackNavigation from "@components/Shared/CashbackNavigation";
import FormularNavigation from "@components/Shared/FormularNavigation";
import ConnectNavigation from "@components/Shared/ConnectNavigation";
import CreditStoryNavigation from "@components/Shared/CreditStoryNavigation";
import OfficeNavigation from "@components/Shared/OfficeNavigation";
import OrderNavigation from "@components/Shared/OrderNavigation";
import ChatsNavigation from "@components/Shared/ChatsNavigation";
import ThemeNavigation from "@components/Shared/ThemeNavigation";
import CreditMomentNavigation from "@components/Shared/CreditMomentNavigation";
import SearchNavigation from "@components/Shared/SearchNavigation";
import QuestionsNavigation from "@components/Shared/QuestionsNavigation";

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
import {
  colorOptions,
  ColorSelectionScreen,
} from "@pages/ColorSelectionScreen";
import CreditMomentScreen from "@pages/CreditMomentScreen";
import NotFoundScreen from "@pages/NotFoundScreen";

export const AppLayout = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const { theme } = useTheme();

  useSwipeBack();

  const path = location.pathname;

  const routeFlags = useMemo(
    () => ({
      profile: path.includes("profile"),
      scanQr: path.includes("scan-qr"),
      search: path.includes("search"),
      notifications: path.includes("notifications"),
      addService: path.includes("add-service"),
      countChange: path.includes("count-change"),
      sbp: path.includes("sbp"),
      debet: path.includes("debet-card"),
      creditCard: path.includes("credit-card"),
      credit: path.includes("credit"),
      bankDeposit: path.includes("bank-deposit"),
      invest: path.includes("invest"),
      newProduct: path.includes("new-product"),
      promisePay: path.includes("promise-pay"),
      promisePayPoints: path.includes("promise-pay-points"),
      analytics: path.includes("analytics"),
      invite: path.includes("invite"),
      additionalPoints: path.includes("additional-points"),
      cashback: path.includes("cashback"),
      formular: path.includes("formular"),
      questions: path.includes("questions"),
      connect: path.includes("connect"),
      creditStory: path.includes("story"),
      office: path.includes("office"),
      order: path.includes("order"),
      theme: path.includes("theme"),
      creditMoment: path.includes("moment"),
    }),
    [path]
  );

  const hasTabbar = !Object.values(routeFlags).some(Boolean);

  const Header = useMemo(() => {
    if (path.includes("settings")) return <SettingsNavigation />;
    if (routeFlags.search) return <SearchNavigation />;
    if (routeFlags.profile || routeFlags.scanQr) return null;
    if (routeFlags.notifications) return <NotificationsNavigation />;
    if (routeFlags.addService) return <AddServiceNavigation />;
    if (routeFlags.countChange) return <CountChangeNavigation />;
    if (routeFlags.sbp) return <SbpNavigation />;
    if (routeFlags.debet) return <DebetNavigation />;
    if (routeFlags.creditCard) return <CreditCardNavigation />;
    if (routeFlags.credit) return <CreditNavigation />;
    if (routeFlags.bankDeposit) return <BankDepositNavigation />;
    if (routeFlags.invest) return <InvestNavigation />;
    if (routeFlags.newProduct) return <NewProductNavigation />;
    if (routeFlags.promisePay) return <PromisePayNavigation />;
    if (routeFlags.promisePayPoints) return <PromisePayPointsNavigation />;
    if (routeFlags.analytics) return <AnalyticsNavigation />;
    if (routeFlags.invite) return <InviteNavigation />;
    if (routeFlags.additionalPoints) return <AdditionalPointsNavigation />;
    if (routeFlags.cashback) return <CashbackNavigation />;
    if (routeFlags.formular) return <FormularNavigation />;
    if (routeFlags.questions) return <QuestionsNavigation />;
    if (routeFlags.connect) return <ConnectNavigation />;
    if (routeFlags.creditStory) return <CreditStoryNavigation />;
    if (routeFlags.office) return <OfficeNavigation />;
    if (routeFlags.order) return <OrderNavigation />;
    if (path.includes("chats")) return <ChatsNavigation />;
    if (routeFlags.theme) return <ThemeNavigation />;
    if (routeFlags.creditMoment) return <CreditMomentNavigation />;
    return <NavigationBar scrollY={scrollY} />;
  }, [routeFlags, scrollY, path]);

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (path === "/home") {
      document.body.style.background =
        backgroundColor === "#FFFFFF" ? "#f1f5fc" : backgroundColor;
    } else {
      document.body.style.background = "#f2f3f5";
    }
  }, [path]);

  return (
    <div
      className={
        theme === "standard"
          ? "theme-standard font-sans"
          : "theme-primary font-sans"
      }
    >
      {Header}
      <div className="w-full scrollbar-hide h-full" style={{ backgroundColor }}>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <Outlet key={location.pathname} />
      </div>
      {hasTabbar && <TabbarNavigation />}
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export const router = createBrowserRouter([
  {
      path: "/",
      element: <Navigate to="home" replace />
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundScreen />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "home", element: <HomeScreen /> },
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
      {
        path: "promise-pay-points",
        element: <PromisePayPointsScreen />,
      },
      { path: "analytics", element: <AnalyticsScreen /> },
      { path: "invite", element: <InviteScreen /> },
      {
        path: "additional-points",
        element: <AdditionalPointsScreen />,
      },
      { path: "cashback", element: <CashBackScreen /> },
      { path: "formular", element: <FormularScreen /> },
      { path: "questions", element: <QuestionsScreen /> },
      { path: "connect", element: <ConnectScreen /> },
      { path: "story", element: <CreditStoryScreen /> },
      { path: "office", element: <OfficeScreen /> },
      { path: "order", element: <OrderScreen /> },
      { path: "loans", element: <CreditsScreen /> },
      { path: "chats", element: <ChatsScreen /> },
      { path: "theme", element: <ColorSelectionScreen /> },
      { path: "*", element: <NotFoundScreen /> },
    ],
  },
], {
  basename: "/pwa-ceb/"
});
