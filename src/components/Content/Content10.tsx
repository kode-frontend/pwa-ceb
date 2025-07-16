import OperationCardIcon from "./OperationCardIcon";
import { AutoPayIcon, ChevronDownIcon, TemplateIcon } from "./Serviceicons";

function Content10() {
  return (
    <>
      <div
        className="w-full px-4 py-2"
        data-name="suggest"
      >
        <h1 className="text-white text-xl font-semibold mb-3 relative">Мои операции</h1>
        <div className="flex flex-row gap-3 overflow-x-auto scrollbar-hide">
          {/* Карточка операции 1 - Ефим */}
          <div
            className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col items-start justify-around p-0 relative rounded-[20px] shrink-0 size-[110px]"
            data-name="card"
            style={{
              width: "153px",
              height: "140px",
              minHeight: "120px",
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
              padding: "5px",
            }}
          >
            <div className="flex items-center justify-between mb-3 w-full">
              <OperationCardIcon />
              <span className="text-white text-xs font-medium pr-2">
                20 000,00 ₽
              </span>
            </div>
            <div className="text-white p-2">
              <div className="text-sm font-medium">Ефим</div>
              <div className="text-sm font-medium">Владиславович...</div>
            </div>
          </div>

          {/* Карточка операции 2 - Максим */}
          <div
            className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col items-start justify-around p-0 relative rounded-[20px] shrink-0 size-[110px]"
            data-name="card"
            style={{
              width: "153px",
              height: "140px",
              minHeight: "120px",
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
              padding: "5px",
            }}
          >
            <div className="flex items-center justify-between mb-3 w-full">
              <OperationCardIcon />
              <span className="text-white text-xs font-medium pr-2">
                20 000,00 ₽
              </span>
            </div>
            <div className="text-white p-2">
              <div className="text-sm font-medium">Ефим</div>
              <div className="text-sm font-medium">Владиславович...</div>
            </div>
          </div>

          {/* Карточка операции 3 - Алина */}
          <div
            className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col items-start justify-around p-0 relative rounded-[20px] shrink-0 size-[110px]"
            data-name="card"
            style={{
              width: "153px",
              height: "140px",
              minHeight: "120px",
              border: "0.5px solid var(--colorMode-border-primary, #C9E6F94D)",
              padding: "5px",
            }}
          >
            <div className="flex items-center justify-between mb-3 w-full">
              <OperationCardIcon />
              <span className="text-white text-xs font-medium pr-2">
                20 000,00 ₽
              </span>
            </div>
            <div className="text-white p-2">
              <div className="text-sm font-medium">Ефим</div>
              <div className="text-sm font-medium">Владиславович...</div>
            </div>
          </div>
        </div>
      </div>
      {/* Белая область */}
      <div className="flex-1 bg-white w-full">
        <div className="p-4 space-y-4 flex flex-col relative">
          {/* Первый блок "Шаблоны и автоплатежи" */}
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

          {/* Второй блок "Шаблоны и автоплатежи" */}
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
        </div>
      </div>
    </>
  );
}

export default Content10;
