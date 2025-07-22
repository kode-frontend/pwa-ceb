import { overlayThemes } from "@context/overlayThemes";
import { useTheme } from "@context/ThemeProvider";

function Overlay() {
  const { theme } = useTheme();
  const maskUrl = overlayThemes[theme];

  return (
    <div
      className="absolute top-0 left-0 w-full h-[400px] pointer-events-none z-0"
      style={{
        backgroundImage: `url('${maskUrl}')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

export default Overlay;
