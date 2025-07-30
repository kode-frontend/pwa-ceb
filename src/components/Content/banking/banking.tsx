export interface BankingItem {
  id: string;
  title: string;
  iconType?: 'qr' | 'sbp' | 'bank' | 'bank2' | 'exchange' | 'card' | 'placeholder' | 'currency' | 'transfer';
  hasChevron?: boolean;
  hasSwitch?: boolean;
  switchEnabled?: boolean;
  isSubItem?: boolean;
  onToggle?: (enabled: boolean) => void;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export interface BankingSection {
  id: string;
  title: string;
  items: BankingItem[];
  hasChevron?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export interface BankingSettings {
  sections: BankingSection[];
  notificationText?: string;
}

export enum BankingItemType {
  NAVIGATION = 'navigation',
  SWITCH = 'switch',
  SECTION_HEADER = 'section_header'
}

export enum BankingScreenState {
  LOADING = 'loading',
  ERROR = 'error',
  LOADED = 'loaded'
}

export enum BankingIconType {
  QR = 'qr',
  SBP = 'sbp',
  BANK = 'bank',
  BANK2 = 'bank2',
  EXCHANGE = 'exchange',
  CARD = 'card',
  PLACEHOLDER = 'placeholder',
  STATUS = 'status',
  CHEVRON = 'chevron',
  CURRENCY = 'currency',
  TRANSFER = 'transfer'
}