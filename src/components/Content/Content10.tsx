import { useTheme } from "@context/ThemeProvider";
import OperationCardIcon from "./OperationCardIcon";
import { AutoPayIcon, ChevronDownIcon, PhoneIcon, PlaneIcon, QRIcon, TemplateIcon } from "./Serviceicons";

function Content10() {
  const { theme } = useTheme();
  const textColor = theme === "standard" ? 'black' : 'white'
  const backgroundColor = theme === "standard" ? "rgba(120, 120, 120, 0.08)" : "rgba(255,255,255,0.08)"
  return (
    <>
      <div
        className="w-full py-2 z-1"
        data-name="suggest"
      >
        <h1 className=" font-sans font-medium mb-3 relative pl-4" style={{color: textColor}}>Мои операции</h1>
        <div className="flex flex-row gap-3 overflow-x-auto scrollbar-hide pl-4" style={{color: textColor}}>
          {/* Карточка операции 1 - Ефим */}
          <div
            className="box-border content-stretch flex flex-col items-start justify-around p-0 relative rounded-[20px] shrink-0 size-[110px]"
            data-name="card"
            style={{
              width: "153px",
              height: "140px",
              minHeight: "120px",
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
              padding: "5px",
              backgroundColor
            }}
          >
            <div className="flex items-center justify-between mb-3 w-full">
              <OperationCardIcon />
              <span className=" text-xs font-medium pr-2">
                20 000,00 ₽
              </span>
            </div>
            <div className=" p-2">
              <div className="text-sm font-medium">Ефим</div>
              <div className="text-sm font-medium">Владиславович...</div>
            </div>
          </div>

          {/* Карточка операции 2 - Максим */}
          <div
            className="box-border content-stretch flex flex-col items-start justify-around p-0 relative rounded-[20px] shrink-0 size-[110px]"
            data-name="card"
            style={{
              width: "153px",
              height: "140px",
              minHeight: "120px",
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
              padding: "5px",
              backgroundColor
            }}
          >
            <div className="flex items-center justify-between mb-3 w-full">
              <OperationCardIcon />
              <span className=" text-xs font-medium pr-2">
                20 000,00 ₽
              </span>
            </div>
            <div className=" p-2">
              <div className="text-sm font-medium">Ефим</div>
              <div className="text-sm font-medium">Владиславович...</div>
            </div>
          </div>

          {/* Карточка операции 3 - Алина */}
          <div
            className="box-border content-stretch flex flex-col items-start justify-around p-0 relative rounded-[20px] shrink-0 size-[110px]"
            data-name="card"
            style={{
              width: "153px",
              height: "140px",
              minHeight: "120px",
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
              padding: "5px",
              backgroundColor
            }}
          >
            <div className="flex items-center justify-between mb-3 w-full">
              <OperationCardIcon />
              <span className=" text-xs font-medium pr-2">
                20 000,00 ₽
              </span>
            </div>
            <div className=" p-2">
              <div className="text-sm font-medium">Ефим</div>
              <div className="text-sm font-medium">Владиславович...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full z-1">
        <div className="p-4 space-y-4 flex flex-col relative">
          <div
            className="bg-white rounded-xl border overflow-hidden"
            style={{
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
            }}
          >
            <div className="flex items-center justify-between p-4">
              <h2 className="text-gray-900 font-medium">
                Шаблоны и автоплатежи
              </h2>
              <ChevronDownIcon />
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <TemplateIcon />
                <span className="text-gray-900 font-small">Шаблоны</span>
              </div>

              <div className="flex items-center gap-4">
                <AutoPayIcon />
                <span className="text-gray-900 font-small">Автоплатежи</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-xl border overflow-hidden"
            style={{
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
            }}
          >
            <div className="flex items-center justify-between p-4">
              <h2 className="text-gray-900 font-medium">
                Перевести
              </h2>
              <ChevronDownIcon />
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon />
                <span className="text-gray-900 font-small">Переводы по номеру телефону</span>
              </div>

              <div className="flex items-center gap-4">
                <PlaneIcon />
                <span className="text-gray-900 font-small">Пополнение с моего счета в другом банке</span>
              </div>

              <div className="flex items-center gap-4">
                <QRIcon />
                <span className="text-gray-900 font-small">Операции по QR коду</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content10;
