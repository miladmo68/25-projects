import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StartRating from "./components/star-rating";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div>
      {/* Accordian components ----------*****Accordian components*****----------
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
       */}
      ----------*****load More Data component*****----------
      <LoadMoreData />
    </div>
  );
}

export default App;
