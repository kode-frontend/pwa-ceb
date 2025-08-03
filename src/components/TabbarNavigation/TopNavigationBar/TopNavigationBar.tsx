import { useMemo } from "react";

import { routeFlags } from "@router/routeFlags";
import AdditionalPointsNavigation from "./AdditionalPointsNavigation";
import AddServiceNavigation from "./AddServiceNavigation";
import AnalyticsNavigation from "./AnalyticsNavigation";
import BankDepositNavigation from "./BankDepositNavigation";
import BasicBarNavigation from "./BasicBarNavigation";
import CashbackNavigation from "./CashbackNavigation";
import ChatsNavigation from "./ChatsNavigation";
import ConnectNavigation from "./ConnectNavigation";
import CountChangeNavigation from "./CountChangeNavigation";
import CreditCardNavigation from "./CreditCardNavigation";
import CreditMomentNavigation from "./CreditMomentNavigation";
import CreditNavigation from "./CreditNavigation";
import CreditStoryNavigation from "./CreditStoryNavigation";
import DebetNavigation from "./DebetNavigation";
import FormularNavigation from "./FormularNavigation";
import InvestNavigation from "./InvestNavigation";
import InviteNavigation from "./InviteNavigation";
import NewProductNavigation from "./NewProductNavigation";
import NotificationsNavigation from "./NotificationsNavigation";
import OfficeNavigation from "./OfficeNavigation";
import OrderNavigation from "./OrderNavigation";
import PromisePayNavigation from "./PromisePayNavigation";
import QuestionsNavigation from "./QuestionsNavigation";
import SbpNavigation from "./SbpNavigation";
import SearchNavigation from "./SearchNavigation";
import SettingsNavigation from "./SettingsNavigation";
import ThemeNavigation from "./ThemeNavigation";

export const TopNavigationBar = ({
  scrollY,
  path,
}: {
  scrollY: number;
  path: string;
}) => {
  const currentRouteFlag = useMemo(() => {
    return routeFlags(path);
  }, [path]);
  if (path.includes("settings")) return <SettingsNavigation />;
  if (currentRouteFlag.search) return <SearchNavigation />;
  if (currentRouteFlag.profile || currentRouteFlag.scanQr) return null;
  if (currentRouteFlag.notifications) return <NotificationsNavigation />;
  if (currentRouteFlag.addService) return <AddServiceNavigation />;
  if (currentRouteFlag.countChange) return <CountChangeNavigation />;
  if (currentRouteFlag.sbp) return <SbpNavigation />;
  if (currentRouteFlag.debet) return <DebetNavigation />;
  if (currentRouteFlag.creditCard) return <CreditCardNavigation />;
  if (currentRouteFlag.credit) return <CreditNavigation />;
  if (currentRouteFlag.bankDeposit) return <BankDepositNavigation />;
  if (currentRouteFlag.invest) return <InvestNavigation />;
  if (currentRouteFlag.newProduct) return <NewProductNavigation />;
  if (currentRouteFlag.promisePay) return <PromisePayNavigation />;
  if (currentRouteFlag.promisePayPoints) return <PromisePayNavigation />;
  if (currentRouteFlag.analytics) return <AnalyticsNavigation />;
  if (currentRouteFlag.invite) return <InviteNavigation />;
  if (currentRouteFlag.additionalPoints) return <AdditionalPointsNavigation />;
  if (currentRouteFlag.cashback) return <CashbackNavigation />;
  if (currentRouteFlag.formular) return <FormularNavigation />;
  if (currentRouteFlag.questions) return <QuestionsNavigation />;
  if (currentRouteFlag.connect) return <ConnectNavigation />;
  if (currentRouteFlag.creditStory) return <CreditStoryNavigation />;
  if (currentRouteFlag.office) return <OfficeNavigation />;
  if (currentRouteFlag.order) return <OrderNavigation />;
  if (path.includes("chats")) return <ChatsNavigation />;
  if (currentRouteFlag.theme) return <ThemeNavigation />;
  if (currentRouteFlag.creditMoment) return <CreditMomentNavigation />;
  return <BasicBarNavigation scrollY={scrollY} />;
};
