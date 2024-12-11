import ChocolateExperienceWidget from "../ChocolateExperienceWidget";
import DeliciousTreatsSection from "../DeliciousTreatsSection";
import "./style.css";

function SweetIndulgenceView() {
  return (
    <div className="sensory-chocolate-experience-style">
      <ChocolateExperienceWidget />
      <div className="chocolate-delights-section2">
        <DeliciousTreatsSection />
        <img src="/assets/image_37b1dd99.png" className="chocolate-image-style" />
      </div>
    </div>
  );
}

export default SweetIndulgenceView;
