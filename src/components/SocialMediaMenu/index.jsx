import MenuTitleParagraph from "../MenuTitleParagraph";
import "./style.css";

function SocialMediaMenu({ socialMediaPlatforms }) {
  return (
    <div className="menu-title-list">
      {socialMediaPlatforms.map((data, index) => {
        return <MenuTitleParagraph {...data} key={index} />;
      })}
    </div>
  );
}

export default SocialMediaMenu;
