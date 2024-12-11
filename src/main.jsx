import React, { createRoot } from "react-dom/client";
import ChocolateLandingPage from "./components/ChocolateLandingPage";
import ChocolateLoversPromotion from "./components/ChocolateLoversPromotion"
import SweetIndulgenceView from "./components/SweetIndulgenceView";
import ComponentYouSelected from "./components/ComponentYouSelected";
import ComponentYouSelected2 from "./components/ComponentYouSelected2";
import DelightfulMenuFooter from "./components/DelightfulMenuFooter";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1440px" }} data-ignore="used only for top most containter width">
    <ChocolateLandingPage />
    <ChocolateLoversPromotion />
    <SweetIndulgenceView />
    <ComponentYouSelected />
    <ComponentYouSelected2 />
    
  </div>
);
