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
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

function App() {
  return (
    <div>
      ----------*****Accordian components*****----------
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
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      ----------*****Custom Tabs component*****----------
      <TabTest />
      ----------*****Custom Modal component*****----------
      <ModalTest />
      ----------*****Github Profile Finder component*****----------
      <GithubProfileFinder />
      ----------*****Search Autocomplete With Api component*****----------
      <SearchAutocomplete />
      ----------*****Tic Tac Toe Game component*****----------
      <TicTacToe />
      ----------*****Feature Flag Implementation component*****----------
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
      ----------*****UseFetch - Custom Hook component*****----------
      <UseFetchHookTest />
      ----------*****Use OnClick Outside - Custom Hook component*****----------
      <UseOnClickOutsideTest />
      ----------*****Use Window Resize Hook component*****----------
      <UseWindowResizeTest />
      ----------*****Scroll To Top And Bottom Feature component*****----------
      <ScrollToTopAndBottom />
      ----------*****Scroll To Particular section component*****----------
      <ScrollToSection />
    </div>
  );
}

export default App;
