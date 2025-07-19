import { overlayThemes } from "@context/overlayThemes";
import { useTheme } from "@context/ThemeProvider";

function Overlay() {
  const { theme } = useTheme();
  const maskUrl = overlayThemes[theme];

  return (
    <div
      className="absolute size-full h-[100vh]"
      style={{
        background: `url('${maskUrl}')`,
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: `url('${maskUrl}')`,
          backdropFilter: "blur(0.5px)",
        }}
      />
    </div>
  );
}

export default Overlay;
