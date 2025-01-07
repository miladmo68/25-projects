import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/random-color";
import StartRating from "./components/star-rating";
import loadMoreData from "./components/load-more-data";

function App() {
  return (
    <div>
      {/* Accordian components */}
      ----------*****Accordian components*****----------
      <Accordian />
      {/* Randpom color omponent */}
      ----------*****Randpom color omponent*****----------
      <RandomColor />
      {/* Start rating component */}
      ----------*****Start rating component*****----------
      <StartRating noOfStars={10} />
      {/* Image Slider */}
      ----------*****Image Slider*****----------
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      {/* load More Data */}
      ----------*****load More Data*****----------
      <loadMoreData />
    </div>
  );
}

export default App;
