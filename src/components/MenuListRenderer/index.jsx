import MenuTitleParagraph from "../MenuTitleParagraph";
import "./style.css";

function MenuListRenderer({ possibleMenuTitles }) {
  return (
    <div className="menu-title-list">
      {possibleMenuTitles.map((data, index) => {
        return <MenuTitleParagraph {...data} key={index} />;
      })}
    </div>
  );
}

export default MenuListRenderer;
