import ImageContainer2 from "../ImageContainer2";
import ChocolateDelightWidget from "../ChocolateDelightWidget";
import FestiveCollectionButton from "../FestiveCollectionButton";
import "./style.css";

function DeliciousTreatsSection() {
  return (
    <div className="chocolate-delights-section1">
      <div className="artisanal-delights-section">
        <ImageContainer2 />
        <ChocolateDelightWidget />
      </div>
      <div className="chocolate-collection-card">
        <img src="/assets/image_6a373776.png" className="festive-favorites-section" />
        <FestiveCollectionButton />
      </div>
    </div>
  );
}

export default DeliciousTreatsSection;
