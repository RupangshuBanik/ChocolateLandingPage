import MenuDisplay from "../MenuDisplay";
import MenuListRenderer from "../MenuListRenderer";
import SocialMediaMenu from "../SocialMediaMenu";
import "./style.css";

function DelightfulMenuFooter({ menuItems, possibleMenuTitles, socialMediaPlatforms }) {
  return (
    <div className="choco-delight-layout">
      <div className="chocolate-delight-footer-section">
        <img src="/assets/image_666b1f2.png" className="chocolate-delight-image" />
        <p className="chocolate-delight-copyright">
          © 2024 Choco Delight, Inc.
          <br />
          All rights reserved.
        </p>
      </div>
      <div className="chocolate-box">
        <p className="primary-heading-text-style">Quick Links</p>
        <MenuDisplay menuItems={menuItems} />
      </div>
      <div className="chocolate-box">
        <p className="primary-heading-text-style">Explore More</p>
        <MenuListRenderer possibleMenuTitles={possibleMenuTitles} />
      </div>
      <div className="connect-with-us-section">
        <p className="primary-heading-text-style">Connect with Us</p>
        <SocialMediaMenu socialMediaPlatforms={socialMediaPlatforms} />
      </div>
    </div>
  );
}

export default DelightfulMenuFooter;
