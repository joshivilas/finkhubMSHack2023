import "./App.css";
import Header from "./Components/Header/Header";
import HeadLine from "./Components/HeadlineSection/HeadLine";
import InteractionSection from "./Components/InteractionSection/InteractionSection";
import PostSection from "./Components/PostSections/PostSection";
import TweetSection from "./Components/TweetSection/TweetSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeadLine/>
      <InteractionSection/>
    </div>
  );
}

export default App;
