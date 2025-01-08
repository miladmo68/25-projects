import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StartRating from "./components/star-rating";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";

function App() {
  return (
    <div>
      {/* ----------*****Accordian components*****----------
      <Accordian />

      ----------*****Randpom color omponent*****----------
      <RandomColor />

      ----------*****Start rating component*****----------
      <StartRating noOfStars={10} />

      ----------*****Image Slider component*****----------
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      
      ----------*****load More Data component*****----------
      <LoadMoreData />
      ----------*****Tree view component/ Menu component*****----------
      <TreeView menus={menus} />
      ----------*****QR Code Generator component*****----------
      <QRCodeGenerator />
      ----------*****Light Dark mode component*****----------
      <LightDarkMode />
      ----------*****Scroll Indicator component*****----------
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      ----------*****Custom Tabs component*****----------
      <TabTest />
    </div>
  );
}

export default App;
