import { Button } from "@mui/base";
import FestiveChocolateDiscovery from "../FestiveChocolateDiscovery";
import "./style.css";

function FestiveChocolatePromotion() {
  return (
    <div className="chocolate-delights-section">
      <FestiveChocolateDiscovery />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="festive-button">Explore Now</Button>
    </div>
  );
}

export default FestiveChocolatePromotion;
