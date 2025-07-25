import { useNavigate } from "react-router-dom";

type CardType = "current" | "credit1" | "credit2";

interface CardData {
  expenses: {
    amount: string;
    title: string;
  };
  income: {
    amount: string;
    title: string;
  };
}

const CARD_DATA: Record<CardType, CardData> = {
  current: {
    expenses: {
      amount: "240 030 ₽",
      title: "Расходы в июне",
    },
    income: {
      amount: "343 482 ₽",
      title: "Доходы в июне",
    },
  },
  credit1: {
    expenses: {
      amount: "156 740 ₽",
      title: "Расходы в июне",
    },
    income: {
      amount: "287 950 ₽",
      title: "Доходы в июне",
    },
  },
  credit2: {
    expenses: {
      amount: "89 320 ₽",
      title: "Расходы в июне",
    },
    income: {
      amount: "198 760 ₽",
      title: "Доходы в июне",
    },
  },
};

function Title({ amount, title }: { amount: string; title: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="title"
    >
      <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
        <p className="block leading-[24px] font-semibold">{amount}</p>
      </div>
      <div className="font-sans relative shrink-0 text-[#6f7884] text-[12px] tracking-[-0.12px] w-full">
        <p className="block leading-[16px]">{title}</p>
      </div>
    </div>
  );
}

function ExpenseChart() {
  return (
    <div
      className="bg-[#f1f5fc] box-border content-stretch flex flex-row h-2 items-center justify-start overflow-clip p-0 relative rounded-[100px] shrink-0 w-full"
      data-name="chart"
    >
      <div className="bg-[#a531cc] h-full shrink-0 w-[19px]" data-name="part" />
      <div className="bg-[#cc7231] h-full shrink-0 w-[45px]" data-name="part" />
      <div className="bg-[#17a61e] h-full shrink-0 w-[35px]" data-name="part" />
      <div className="bg-[#3196cc] h-full shrink-0 w-[41px]" data-name="part" />
      <div
        className="basis-0 bg-[#316dcc] grow h-full min-h-px min-w-px shrink-0"
        data-name="part"
      />
    </div>
  );
}

function ExpenseBlock({ data }: { data: CardData["expenses"] }) {
  return (
    <div
      className="bg-[#f1f5fc] box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative rounded-[20px] shrink-0 w-[200px]"
      data-name="block"
    >
      <Title amount={data.amount} title={data.title} />
      <div
        className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
        data-name="container"
      >
        <ExpenseChart />
      </div>
    </div>
  );
}

function IncomeTitle({ amount, title }: { amount: string; title: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-left w-full"
      data-name="title"
    >
      <div className="font-sans relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px] w-full">
        <p className="block leading-[24px] font-semibold">{amount}</p>
      </div>
      <div className="font-sans relative shrink-0 text-[#6f7884] text-[12px] tracking-[-0.12px] w-full">
        <p className="block leading-[16px]">{title}</p>
      </div>
    </div>
  );
}

function IncomeChart() {
  return (
    <div
      className="bg-[#f1f5fc] box-border content-stretch flex flex-row h-2 items-center justify-start overflow-clip p-0 relative rounded-[100px] shrink-0 w-full"
      data-name="chart"
    >
      <div className="bg-[#316dcc] h-full shrink-0 w-[68px]" data-name="part" />
      <div
        className="basis-0 bg-[#316dcc] grow h-full min-h-px min-w-px shrink-0"
        data-name="part"
      />
    </div>
  );
}

function IncomeBlock({ data }: { data: CardData["income"] }) {
  return (
    <div
      className="basis-0 bg-[#f1f5fc] grow min-h-px min-w-px relative rounded-[20px] shrink-0"
      data-name="block"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <IncomeTitle amount={data.amount} title={data.title} />
          <IncomeChart />
        </div>
      </div>
    </div>
  );
}

interface ChartBlocksProps {
  selectedCard: CardType;
}

export function ChartBlocks({ selectedCard }: ChartBlocksProps) {
  const cardData = CARD_DATA[selectedCard];
  const navigate = useNavigate();

  const analytics = () => {
    if (selectedCard === "credit1") {
      navigate("/pwa-ceb/analytics", {
        state: { image: "analytics2.png" },
      });
      return;
    }
    if (selectedCard === "credit2") {
      navigate("/pwa-ceb/analytics", {
        state: { image: "credit3.png" },
      });
      return;
    }
    navigate("/pwa-ceb/analytics");
  };

  const analytics2 = () => {
    if (selectedCard === "credit1") {
      navigate("/pwa-ceb/analytics", {
        state: { image: "analytics3.png" },
      });
      return;
    }
    if (selectedCard === "credit2") {
      navigate("/pwa-ceb/analytics", {
        state: { image: "credit4.png" },
      });
      return;
    }
    navigate("/pwa-ceb/analytics", {
      state: { image: "analytics2wrapper.png" },
    });
  };

  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative shrink-0 w-full"
      data-name="container"
    >
      <div onClick={analytics} className="cursor-pointer">
        <ExpenseBlock data={cardData.expenses} />
      </div>
      <div onClick={analytics2} className="cursor-pointer w-full">
        <IncomeBlock data={cardData.income} />
      </div>
    </div>
  );
}
