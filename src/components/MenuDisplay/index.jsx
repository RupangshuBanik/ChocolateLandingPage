import MenuTitleParagraph from "../MenuTitleParagraph";
import "./style.css";

function MenuDisplay({ menuItems }) {
  return (
    <div className="menu-title-list">
      {menuItems.map((data, index) => {
        return <MenuTitleParagraph {...data} key={index} />;
      })}
    </div>
  );
}

export default MenuDisplay;
