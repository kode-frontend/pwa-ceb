import InfoPanel from "@components/Content/InfoPanel";
import Camera from "@components/Shared/Camera";
import ScanQrNavigation from "@components/Shared/ScanQrNavigation";
import SelectPhotoButton from "@components/Shared/SelectPhotoButton";

export default function ScanQrScreen() {
  return (
    <div className="bg-[#f1f5fc] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative  w-full">
      <ScanQrNavigation />
      <div className="box-border content-stretch flex flex-col gap-3 md:gap-4 items-start justify-start px-4 md:px-6 lg:px-8 py-2 md:py-3 relative w-full min-h-[680px] md:min-h-[750px]">
        <InfoPanel />
        {location.pathname.includes("scan-qr") && <Camera />}
        <SelectPhotoButton />
      </div>
    </div>
  );
}
