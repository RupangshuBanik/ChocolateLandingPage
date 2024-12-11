import FestiveChocolatePromotion from "../FestiveChocolatePromotion";
import ImageGalleryWidget from "../ImageGalleryWidget";
import "./style.css";

function ComponentYouSelected2() {
  return (
    <div className="holiday-chocolate-promo-container-Z">
      <div className="holiday-chocolate-promo-section-Z">
        <div className="festive-chocolate-promo-container-Z">
          <img src="/assets/image_28ffe48e.png" className="chocolate-image-display-style-Z" />
          <FestiveChocolatePromotion />
        </div>
        <ImageGalleryWidget />
      </div>
    </div>
  );
}

export default ComponentYouSelected2;
