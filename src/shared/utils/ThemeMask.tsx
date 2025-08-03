import { ThemeId } from "@context/overlayThemes";
import { useMaskUrl } from "@shared/hooks/useMaskUrl";

interface Props {
  themeId: ThemeId;
}

export const ThemeMask: React.FC<Props> = ({ themeId }) => {
  const maskUrl = useMaskUrl(themeId);

  if (!maskUrl) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("${maskUrl}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};
