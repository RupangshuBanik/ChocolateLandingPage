import { Button } from "@mui/base";
import DelightfulChocolateSnippet from "../DelightfulChocolateSnippet";
import "./style.css";

function ChocolateDelightWidget() {
  return (
    <div className="chocolate-delights-section">
      <DelightfulChocolateSnippet />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="artisanal-indulge-btn">Indulge Now</Button>
    </div>
  );
}

export default ChocolateDelightWidget;
