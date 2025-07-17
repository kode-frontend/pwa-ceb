import PersonalDataSection from "@components/Content/PersonalDataSection";
import PhoneNumberSection from "@components/Content/PhoneNumberSection";
import ProfileNavigation from "@components/Shared/ProfileNavigation";

export default function ProfileScreen() {
  return (
    <div className="bg-[#f1f5fc] overflow-clip relative min-h-screen w-full">
      <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-0 w-full">
        <ProfileNavigation />
      </div>

      <div className="absolute box-border content-stretch flex flex-col gap-2 md:gap-3 items-start justify-start left-0 px-4 md:px-6 lg:px-8 py-3 md:py-4 top-[44px] md:top-[48px] w-full">
        <PhoneNumberSection />
        <PersonalDataSection />
      </div>
    </div>
  );
}
