import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { PaymentsScreen } from "@pages/PaymentsScreen";
import { SettingsScreen } from "@pages/SettingsScreen";
import { HomeScreen } from "@pages/HomeScreen";
import ProfileScreen from "@pages/ProfileScreen";
import ScanQrScreen from "@pages/ScanQrScreen";

import Tabbar1 from "@components/Content/Tabbar1";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import SettingsHeader from "@components/Shared/SettingsHeader";

import { useSwipeBack } from "@shared/hooks/useSwipeBack";
import SearchScreen from "@pages/SearchScreen";
import NotificationsScreen from "@pages/NotificationsScreen";
import NotificationsNavigation from "@components/Shared/NotificationsNavigation";
import AddServiceScreen from "@pages/AddServiceScreen";
import AddServiceNavigation from "@components/Shared/AddServiceNavigation";
import CountChangeScreen from "@pages/CountChangeScreen";
import CountChangeNavigation from "@components/Shared/CountChangeNavigation";
import SbpScreen from "@pages/SbpScreen";
import SbpNavigation from "@components/Shared/SbpNavigation";
import DebetScreen from "@pages/DebetScreen";
import DebetNavigation from "@components/Shared/DebetNavigation";
import CreditScreen from "@pages/CreditScreen";
import CreditCardScreen from "@pages/CreditCardScreen";
import CreditCardNavigation from "@components/Shared/CreditCardNavigation";
import CreditNavigation from "@components/Shared/CreditNavigation";
import BankDepositNavigation from "@components/Shared/BankDepositNavigation";
import BankDepositScreen from "@pages/BankDepositScreen";
import InvestNavigation from "@components/Shared/InvestNavigation";
import InvestScreen from "@pages/InvestScreen";
import NewProductScreen from "@pages/NewProductScreen";
import NewProductNavigation from "@components/Shared/NewProductNavigation";
import PromisePayScreen from "@pages/PromisePayScreen";
import PromisePayNavigation from "@components/Shared/PromisePayNavigation";
import PromisePayPointsNavigation from "@components/Shared/InviteNavigation";
import PromisePayPointsScreen from "@pages/PromisePayPointsScreen";
import AnalyticsNavigation from "@components/Shared/AnalyticsNavigation";
import AnalyticsScreen from "@pages/AnalyticsScreen";
import InviteNavigation from "@components/Shared/InviteNavigation";
import InviteScreen from "@pages/InviteScreen";
import AdditionalPointsScreen from "@pages/AdditionalPointsScreen";
import AdditionalPointsNavigation from "@components/Shared/AdditionalPointsNavigation";
import CashBackScreen from "@pages/CashBackScreen";
import CashbackNavigation from "@components/Shared/CashbackNavigation";
import FormularNavigation from "@components/Shared/FormularNavigation";
import FormularScreen from "@pages/FormularScreen";
import QuestionsScreen from "@pages/QuestionsScreen";
import ConnectNavigation from "@components/Shared/ConnectNavigation";
import ConnectScreen from "@pages/ConnectScreen";
import CreditStoryNavigation from "@components/Shared/CreditStoryNavigation";
import CreditStoryScreen from "@pages/CreditStoryScreen";
import OfficeNavigation from "@components/Shared/OfficeNavigation";
import OfficeScreen from "@pages/OfficeScreen";
import OrderNavigation from "@components/Shared/OrderNavigation";
import OrderScreen from "@pages/OrderScreen";
import { CreditsScreen } from "@pages/CreditsScreen";
import ChatsHeader from "@components/Shared/ChatsHeader";
import { ChatsScreen } from "@pages/ChatsScreen";

const App = () => {
  return (
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  );
};

const AppWithRouter = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useSwipeBack();

  const settingsRoute = location.pathname.includes("settings");
  const profileRoute = location.pathname.includes("profile");
  const scanQrRoute = location.pathname.includes("scan-qr");
  const searchRoute = location.pathname.includes("search");
  const notificationsRoute = location.pathname.includes("notifications");
  const addServiceRoute = location.pathname.includes("add-service");
  const countchangeRoute = location.pathname.includes("count-change");
  const sbpRoute = location.pathname.includes("sbp");
  const debetCardRoute = location.pathname.includes("debet-card");
  const creditCardRoute = location.pathname.includes("credit-card");
  const creditRoute = location.pathname.includes("credit");
  const bankDepositRoute = location.pathname.includes("bank-deposit");
  const investRoute = location.pathname.includes("invest");
  const newProductRoute = location.pathname.includes("new-product");
  const promisePayRoute = location.pathname.includes("promise-pay");
  const promisePayPointsRoute =
    location.pathname.includes("promise-pay-points");
  const analyticsRoute = location.pathname.includes("analytics");
  const inviteRoute = location.pathname.includes("invite");
  const additionalPointsRoute = location.pathname.includes("additional-points");
  const cashbackRoute = location.pathname.includes("cashback");
  const formularRoute = location.pathname.includes("formular");
  const questionsRoute = location.pathname.includes("questions");
  const connectRoute = location.pathname.includes("connect");
  const creditStoryRoute = location.pathname.includes("credit-story");
  const officeRoute = location.pathname.includes("office");
  const orderRoute = location.pathname.includes("order");
  const chatsRoute = location.pathname.includes("chats");

  const hasTabbar =
    !profileRoute &&
    !scanQrRoute &&
    !searchRoute &&
    !notificationsRoute &&
    !addServiceRoute &&
    !countchangeRoute &&
    !sbpRoute &&
    !debetCardRoute &&
    !creditCardRoute &&
    !creditRoute &&
    !bankDepositRoute &&
    !investRoute &&
    !newProductRoute &&
    !promisePayRoute &&
    !promisePayPointsRoute &&
    !analyticsRoute &&
    !inviteRoute &&
    !additionalPointsRoute &&
    !cashbackRoute &&
    !formularRoute &&
    !questionsRoute &&
    !connectRoute &&
    !creditStoryRoute &&
    !officeRoute &&
    !orderRoute;

  const Header = useMemo(() => {
    if (settingsRoute) return <SettingsHeader />;
    if (searchRoute) return null;
    if (profileRoute) return null;
    if (scanQrRoute) return null;
    if (notificationsRoute) return <NotificationsNavigation />;
    if (addServiceRoute) return <AddServiceNavigation />;
    if (countchangeRoute) return <CountChangeNavigation />;
    if (sbpRoute) return <SbpNavigation />;
    if (debetCardRoute) return <DebetNavigation />;
    if (creditCardRoute) return <CreditCardNavigation />;
    if (creditRoute) return <CreditNavigation />;
    if (bankDepositRoute) return <BankDepositNavigation />;
    if (investRoute) return <InvestNavigation />;
    if (newProductRoute) return <NewProductNavigation />;
    if (promisePayRoute) return <PromisePayNavigation />;
    if (promisePayPointsRoute) return <PromisePayPointsNavigation />;
    if (analyticsRoute) return <AnalyticsNavigation />;
    if (inviteRoute) return <InviteNavigation />;
    if (additionalPointsRoute) return <AdditionalPointsNavigation />;
    if (cashbackRoute) return <CashbackNavigation />;
    if (formularRoute) return <FormularNavigation />;
    if (questionsRoute) return <FormularNavigation />;
    if (connectRoute) return <ConnectNavigation />;
    if (creditStoryRoute) return <CreditStoryNavigation />;
    if (officeRoute) return <OfficeNavigation />;
    if (orderRoute) return <OrderNavigation />;
    if (chatsRoute) return <ChatsHeader />
    return <NavigationBar scrollY={scrollY} />;
  }, [
    chatsRoute,
    orderRoute,
    officeRoute,
    creditStoryRoute,
    connectRoute,
    questionsRoute,
    formularRoute,
    cashbackRoute,
    additionalPointsRoute,
    inviteRoute,
    analyticsRoute,
    promisePayPointsRoute,
    promisePayRoute,
    newProductRoute,
    investRoute,
    bankDepositRoute,
    creditRoute,
    creditCardRoute,
    debetCardRoute,
    sbpRoute,
    countchangeRoute,
    addServiceRoute,
    settingsRoute,
    profileRoute,
    scanQrRoute,
    searchRoute,
    notificationsRoute,
    scrollY,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" w-full overflow-y-auto">
      {Header}

      <div className="h-full w-full font-sans">
        <Routes>
          <Route path="/pwa-ceb/" element={<HomeScreen />} />
          <Route path="/pwa-ceb/payments" element={<PaymentsScreen />} />
          <Route path="/pwa-ceb/settings" element={<SettingsScreen />} />
          <Route path="/pwa-ceb/profile" element={<ProfileScreen />} />
          <Route path="/pwa-ceb/scan-qr" element={<ScanQrScreen />} />
          <Route path="/pwa-ceb/search" element={<SearchScreen />} />
          <Route
            path="/pwa-ceb/notifications"
            element={<NotificationsScreen />}
          />
          <Route path="/pwa-ceb/add-service" element={<AddServiceScreen />} />
          <Route path="/pwa-ceb/count-change" element={<CountChangeScreen />} />
          <Route path="/pwa-ceb/sbp" element={<SbpScreen />} />
          <Route path="/pwa-ceb/debet-card" element={<DebetScreen />} />
          <Route path="/pwa-ceb/credit-card" element={<CreditCardScreen />} />
          <Route path="/pwa-ceb/credit" element={<CreditScreen />} />
          <Route path="/pwa-ceb/bank-deposit" element={<BankDepositScreen />} />
          <Route path="/pwa-ceb/invest" element={<InvestScreen />} />
          <Route path="/pwa-ceb/new-product" element={<NewProductScreen />} />
          <Route path="/pwa-ceb/promise-pay" element={<PromisePayScreen />} />
          <Route
            path="/pwa-ceb/promise-pay-points"
            element={<PromisePayPointsScreen />}
          />
          <Route path="/pwa-ceb/analytics" element={<AnalyticsScreen />} />
          <Route path="/pwa-ceb/invite" element={<InviteScreen />} />
          <Route
            path="/pwa-ceb/additional-points"
            element={<AdditionalPointsScreen />}
          />
          <Route path="/pwa-ceb/cashback" element={<CashBackScreen />} />
          <Route path="/pwa-ceb/formular" element={<FormularScreen />} />
          <Route path="/pwa-ceb/questions" element={<QuestionsScreen />} />
          <Route path="/pwa-ceb/connect" element={<ConnectScreen />} />
          <Route path="/pwa-ceb/credit-story" element={<CreditStoryScreen />} />
          <Route path="/pwa-ceb/office" element={<OfficeScreen />} />
          <Route path="/pwa-ceb/order" element={<OrderScreen />} />
          <Route path="/pwa-ceb/loans" element={<CreditsScreen />} />
          <Route path="/pwa-ceb/chats" element={<ChatsScreen />} />
        </Routes>
      </div>

      {hasTabbar && <Tabbar1 />}
    </div>
  );
};

export default App;
