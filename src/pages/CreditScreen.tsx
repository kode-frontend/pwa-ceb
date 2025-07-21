import { useLocation } from "react-router-dom";

export default function CreditScreen() {
  const location = useLocation();
  const imageName = location.state?.image || "creditssheet.png";
  return (
    <div className="bg-[#f1f5fc] w-full p-0 m-0 overflow-hidden">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src={`/pwa-ceb/assets/${imageName}`}
          alt="Картинка 3"
          className="block w-full"
          style={{backgroundColor: '#316DCC'}}
        />
      </div>
    </div>
  );
}
