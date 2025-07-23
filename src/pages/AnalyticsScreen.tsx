import { useLocation } from "react-router-dom";

export default function AnalyticsScreen() {
  const location = useLocation();
  const imageName = location.state?.image || "analyticswrapper.png";

  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src={`/pwa-ceb/assets/${imageName}`}
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
}
