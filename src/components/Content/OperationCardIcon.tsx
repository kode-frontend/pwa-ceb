function OperationCardIcon() {
  return (
    <div
      className="w-8 h-8 bg-opacity-30 rounded-lg flex items-center justify-center"
      style={{
        background: "var(--surface-opacity, #FFFFFF14)",
        margin: "5px",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
          stroke="white"
          strokeWidth="1.5"
        />
        <line x1="2" y1="10" x2="22" y2="10" stroke="white" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default OperationCardIcon;
