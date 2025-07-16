import Icon2 from "../Content/Icon2";

function Button5({ scrollY = 0 }: { scrollY?: number }) {
  const isCompressed = scrollY > 99;

  return (
    <div
      className="transition-all duration-300"
      style={{
        width: isCompressed ? "36px" : "auto",
        height: "36px",
      }}
      data-name="button"
    >
      <div
        className="h-full"
        style={{
          width: isCompressed ? "36px" : "auto",
          height: "36px",
          padding: isCompressed ? "6px" : "6px 12px 6px 12px",
          gap: isCompressed ? "0px" : "4px",
          backgroundColor: "#ffffff",
          borderRadius: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        <div className="flex-shrink-0">
          <Icon2 />
        </div>
        {!isCompressed && (
          <div
            className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic text-[#191919] text-[12px] text-left text-nowrap tracking-[-0.12px] transition-opacity duration-300 whitespace-nowrap"
            style={{
              opacity: isCompressed ? 0 : 1,
              width: isCompressed ? 0 : "auto",
            }}
          >
            <p className="adjustLetterSpacing block leading-[16px]">
              Оплата по QR
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Button5;
