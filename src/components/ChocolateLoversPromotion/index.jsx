import FestiveDisplay from "../FestiveDisplay";
import SeasonalDelights from "../SeasonalDelights";
import "./style.css";

function ChocolateLoversPromotion() {
  return (
    <div className="chocolate-indulgence-section1">
      <div className="chocolate-indulgence-section">
        <p className="chocolate-title-text-style">Unveiling Our Latest Dairy Milk Chocolate Creations</p>
        <p className="chocolate-indulgence-text">
          Prepare to be swept away by the unparalleled indulgence of our new Dairy Milk chocolate collection. Featuring a variety of festive-inspired flavors and gift sets, it&apos;s the ultimate
          treat for any chocolate lover
        </p>
        <div className="chocolate-promo-button">
          <div className="purple-rounded-box">
            <p className="explore-more-text-style">Explore More</p>
          </div>
        </div>
      </div>
      <div className="chocolate-highlights">
        <FestiveDisplay />
        <SeasonalDelights />
      </div>
    </div>
  );
}

export default ChocolateLoversPromotion;
