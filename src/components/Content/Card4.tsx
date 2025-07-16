import Label1 from "../Content/Label1";
import BankLogo1 from "../Content/BankLogo1";

function Card4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-9 items-start justify-start p-0 relative rounded-lg shrink-0 w-14"
      data-name="card"
      style={{
        backgroundImage:
          "linear-gradient(-22.3517deg, rgb(36, 239, 129) 0.035889%, rgb(117, 121, 255) 103.01%)",
      }}
    >
      <Label1 />
      <BankLogo1 />
    </div>
  );
}

export default Card4;
