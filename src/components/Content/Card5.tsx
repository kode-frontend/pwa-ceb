import Label2 from "../Content/Label2";
import BankLogo2 from "../Content/BankLogo2";

function Card5() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-9 items-start justify-start p-0 relative rounded-lg shrink-0 w-14"
      data-name="card"
      style={{
        backgroundImage:
          "linear-gradient(-22.3517deg, rgb(36, 239, 129) 0.035889%, rgb(117, 121, 255) 103.01%)",
      }}
    >
      <Label2 />
      <BankLogo2 />
    </div>
  );
}

export default Card5;
