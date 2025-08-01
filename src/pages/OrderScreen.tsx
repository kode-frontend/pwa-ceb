import order from '/assets/order.png';

export default function OrderScreen() {
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src={order}
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
}
