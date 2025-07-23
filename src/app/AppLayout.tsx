import Tabbar1 from "@components/Content/Tabbar1";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import SettingsHeader from "@components/Shared/SettingsHeader";
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
import ChatsHeader from "@components/Shared/ChatsHeader";
import ThemeNavigation from "@components/Shared/ThemeNavigation";
import CreditMomentNavigation from "@components/Shared/CreditMomentNavigation";
import SearchNavigation from "@components/Shared/SearchNavigation";
import { useEffect, useMemo, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { useTheme } from "@context/ThemeProvider";
export const AppLayout = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const { theme } = useTheme();

  useSwipeBack();

  const path = location.pathname;

  const routeFlags = {
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
    creditStory: path.includes("credit-story"),
    office: path.includes("office"),
    order: path.includes("order"),
    theme: path.includes("theme"),
    creditMoment: path.includes("moment"),
  };

  const hasTabbar = !Object.values(routeFlags).some(Boolean);

  const Header = useMemo(() => {
    if (path.includes("settings")) return <SettingsHeader />;
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
    if (routeFlags.questions) return <FormularNavigation />;
    if (routeFlags.connect) return <ConnectNavigation />;
    if (routeFlags.creditStory) return <CreditStoryNavigation />;
    if (routeFlags.office) return <OfficeNavigation />;
    if (routeFlags.order) return <OrderNavigation />;
    if (path.includes("chats")) return <ChatsHeader />;
    if (routeFlags.theme) return <ThemeNavigation />;
    if (routeFlags.creditMoment) return <CreditMomentNavigation />;
    return <NavigationBar scrollY={scrollY} />;
  }, [routeFlags, scrollY]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={theme === "standard" ? "theme-standard" : "theme-primary"}>
      <ScrollRestoration getKey={(location) => location.pathname} />
      {Header}

      <div className="h-full w-full font-sans h-screen w-full" style={{backgroundColor: '#F1F5FC'}}>
        <Outlet key={location.pathname} />
      </div>

      {hasTabbar && <Tabbar1 />}
    </div>
  );
};
