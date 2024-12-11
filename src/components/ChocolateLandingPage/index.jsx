import { Button } from "@mui/base";
import ChocolateExperienceLayout from "../ChocolateExperienceLayout";
import "./style.css";

function ChocolateLandingPage() {
  return (
    <div className="chocolate-delight-landing-page">
      <div className="chocolate-delight-layout">
        <div className="chocolate-delight-menu-nav">
          <img src="/assets/image_666b1f2.png" className="chocolate-image-display-style" />
          <p className="chocolate-title-style">Choco Delight</p>
        </div>
        <div className="chocolate-delight-menu-nav">
          <div className="navigation-bar">
            <p className="primary-navigation-link">Home</p>
            <p className="primary-navigation-link">About</p>
            <p className="primary-navigation-link">Products</p>
            <p className="primary-navigation-link">Contact</p>
          </div>
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="purple-button">FAQ</Button>
        </div>
      </div>
      <ChocolateExperienceLayout />
    </div>
  );
}

export default ChocolateLandingPage;
