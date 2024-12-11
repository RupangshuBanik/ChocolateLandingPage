import { Button } from "@mui/base";
import FestiveDescriptionBloc from "../FestiveDescriptionBloc";
import "./style.css";

function FestiveCollectionButton() {
  return (
    <div className="festive-highlights">
      <FestiveDescriptionBloc />
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="festive-button">Explore the Collection</Button>
    </div>
  );
}

export default FestiveCollectionButton;
