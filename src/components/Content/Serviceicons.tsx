// Иконка шаблонов
export function TemplateIcon() {
  return (
    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" stroke="#6B7280" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" stroke="#6B7280" strokeWidth="2"/>
        <rect x="3" y="14" width="7" height="7" stroke="#6B7280" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" stroke="#6B7280" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// Иконка автоплатежей (буква A)
export function AutoPayIcon() {
  return (
    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
      <span className="text-gray-600 font-semibold text-lg">A</span>
    </div>
  );
}

// Иконка телефона
export function PhoneIcon() {
  return (
    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#6B7280" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// Иконка самолета
export function PlaneIcon() {
  return (
    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" stroke="#6B7280" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// Иконка QR кода
export function QRIcon() {
  return (
    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="5" height="5" stroke="#6B7280" strokeWidth="2"/>
        <rect x="16" y="3" width="5" height="5" stroke="#6B7280" strokeWidth="2"/>
        <rect x="3" y="16" width="5" height="5" stroke="#6B7280" strokeWidth="2"/>
        <rect x="5" y="5" width="1" height="1" fill="#6B7280"/>
        <rect x="18" y="5" width="1" height="1" fill="#6B7280"/>
        <rect x="5" y="18" width="1" height="1" fill="#6B7280"/>
        <rect x="16" y="16" width="2" height="2" fill="#6B7280"/>
        <rect x="19" y="16" width="2" height="2" fill="#6B7280"/>
        <rect x="16" y="19" width="2" height="2" fill="#6B7280"/>
        <rect x="19" y="19" width="2" height="2" fill="#6B7280"/>
      </svg>
    </div>
  );
}

export function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="#6B7280" strokeWidth="2"/>
    </svg>
  );
}