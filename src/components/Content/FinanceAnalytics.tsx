import { useState } from 'react';
import { SmallAccountCards } from './SmallAccountCards';
import { ChartBlocks } from './ChartBlocks';
import SectionHeader from './SectionHeader';


type CardType = 'current' | 'credit1' | 'credit2';

export function FinanceAnalytics() {
  const [selectedCard, setSelectedCard] = useState<CardType>('current');

  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[32px] shrink-0 w-full"
      data-name="block"
    >
      <SectionHeader selectedCard={selectedCard} />
      <SmallAccountCards 
        selectedCard={selectedCard} 
        onCardChange={setSelectedCard} 
      />
      <ChartBlocks selectedCard={selectedCard} />
    </div>
  );
}