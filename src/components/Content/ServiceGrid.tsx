import { useNavigate } from "react-router-dom";

import tree from "/assets/tree.png";
import books from "/assets/books.png";
import q from "/assets/q.png";
import connections from "/assets/connections.png";
import creditstoryimg from "/assets/creditstoryimg.png";
import officepic from "/assets/officepic.png";

export function ServicesGrid() {
  const navigate = useNavigate();

  const cashback = () => {
    navigate("/cashback");
  };
  const formular = () => {
    navigate("/formular");
  };
  const questions = () => {
    navigate("/questions");
  };
  const connect = () => {
    navigate("/connect");
  };
  const creditStory = () => {
    navigate("/story");
  };
  const office = () => {
    navigate("/office");
  };
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[32px] shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-1 pt-4 px-4 relative shrink-0 w-full">
        <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[16px] text-left tracking-[-0.16px]">
          <p className="block leading-[24px] font-semibold">Сервисы</p>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-2 px-4 relative shrink-0 w-full">
        {/* First Row */}
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
          <div
            className="basis-0 bg-[#f1f5fc] grow h-[228px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0 cursor-pointer"
            onClick={cashback}
          >
            <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
              <img
                src={tree}
                alt="Карта"
                className="absolute object-cover"
              />
            </div>
          </div>

          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div
              className="bg-[#f1f5fc] h-[110px] overflow-clip relative rounded-[20px] shrink-0 w-full cursor-pointer"
              onClick={formular}
            >
              <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
                <img
                  src={books}
                  alt="Карта"
                 className="absolute object-cover"
                />
              </div>
              <div className="absolute flex items-center justify-center left-[47.5px] size-[145px] top-2.5">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="bg-center bg-cover bg-no-repeat size-[145px]" />
                </div>
              </div>
            </div>

            <div
              className="bg-[#f1f5fc] h-[110px] overflow-clip relative rounded-[20px] shrink-0 w-full cursor-pointer"
              onClick={questions}
            >
              <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
                <img
                  src={q}
                  alt="Карта"
                  className="absolute object-cover"
                />
              </div>
              <div className="absolute bg-center bg-cover bg-no-repeat left-[72.5px] size-[110px] top-[27px]" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
          <div
            className="basis-0 bg-[#f1f5fc] grow h-[110px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0 cursor-pointer"
            onClick={connect}
          >
            <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
              <img
                src={connections}
                alt="Карта"
                className="absolute object-cover"
              />
            </div>
            <div className="absolute bg-center bg-cover bg-no-repeat left-[47.5px] size-36 top-2.5" />
          </div>

          <div
            className="basis-0 bg-[#f1f5fc] grow h-[110px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0 cursor-pointer"
            onClick={creditStory}
          >
            <div className="absolute bg-center bg-cover bg-no-repeat left-[57px] size-[132px] top-3" />
            <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
              <img
                src={creditstoryimg}
                alt="Карта"
                className="absolute object-cover"
              />
            </div>
          </div>
        </div>
        <div
          className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full cursor-pointer"
          onClick={office}
        >
          <div className="basis-0 bg-[#f1f5fc] grow h-[110px] min-h-px min-w-px overflow-clip relative rounded-[20px] shrink-0">
            <div className="absolute bg-center bg-cover bg-no-repeat left-[57px] size-[132px] top-3" />
            <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
              <img
                src={officepic}
                alt="Карта"
                className="absolute object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
