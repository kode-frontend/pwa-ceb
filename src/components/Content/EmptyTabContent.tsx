import { EmptyTabContentProps } from "./InteractiveAccountCards";

export function EmptyTabContent({ message }: EmptyTabContentProps) {
  return (
    <div className="p-8 text-center">
      <div className="font-sans text-[#6f7884] text-[14px]">
        <p>{message}</p>
      </div>
    </div>
  );
}
