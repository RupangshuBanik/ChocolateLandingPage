import ChocolateExperienceView from "../ChocolateExperienceView";
import ImageContainer from "../ImageContainer";
import "./style.css";

function ChocolateExperienceLayout() {
  return (
    <div className="chocolate-experience-container">
      <div className="chocolate-experience-section1">
        <div className="chocolate-experience-section">
          <div className="chocolate-banner-container">
            <img src="/assets/image_de49c1b6.png" className="image-container" />
          </div>
          <ChocolateExperienceView />
        </div>
        <div className="chocolate-gift-pack-section">
          <div className="image-container-row">
            <img src="/assets/image_effdd536.png" className="image-container1" />
            <img src="/assets/image_7f3f026b.png" className="image-container-with-border" />
          </div>
          <ImageContainer />
        </div>
      </div>
      <div className="promo-banner-container">
        <img src="/assets/image_8aeb4724.png" className="image-container4" />
        <img src="/assets/image_450ee54.png" className="image-container-styled" />
      </div>
    </div>
  );
}

export default ChocolateExperienceLayout;
