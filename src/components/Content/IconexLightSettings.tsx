import Settings from "../Content/Settings";

function IconexLightSettings({active = false}) {
  return (
    <div className="relative shrink-0 size-6" data-name="Iconex/Light/Settings">
      <Settings active={active}/>
    </div>
  );
}

export default IconexLightSettings;
