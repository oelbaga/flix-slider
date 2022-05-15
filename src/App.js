import { useState } from "react";
import "./App.scss";
import Slide from "./components/Slide";
import imagesData from "./data/images.json";
function App() {
  const slidesPerScreen = 3;
  const showDebug = false;
  const [pushPercent, setpushPercent] = useState(0);
  const [firstSlideRow, setfirstSlideRow] = useState(true);
  const [lastSlideRow, setlastSlideRow] = useState(false);
  const images = imagesData;
  const totalImages = imagesData.length;
  const percentofScreen = 100 / slidesPerScreen;
  const slideCountAllowed = Math.trunc(totalImages / slidesPerScreen);
  const [slideCount, setslideCount] = useState(0);
  function handleNext() {
    setfirstSlideRow(false);
    if (slideCountAllowed - slideCount === 2) {
      setlastSlideRow(true);
    }

    if (!lastSlideRow) {
      if (slideCount !== slideCountAllowed) {
        setslideCount((prev) => prev + 1);
        setpushPercent(pushPercent + 100);
      }
    }
  }
  function handlePrev() {
    setlastSlideRow(false);
    if (slideCount <= 1) {
      setfirstSlideRow(true);
    }

    if (slideCount !== 0) {
      setslideCount((prev) => prev - 1);
      setpushPercent(pushPercent + -100);
    }
  }
  return (
    <div className="App">
      {showDebug && (
        <div>
          {slideCountAllowed - slideCount}
          first: {firstSlideRow.toString()} | Last: {lastSlideRow.toString()}
          <div>
            {slideCount}:{slideCountAllowed}
          </div>
        </div>
      )}

      <div className="sliderContainer">
        <div className="sliderMask">
          <div
            className="slides"
            style={{
              transform: "translate3d(-" + pushPercent + "%, 0px, 0px)",
            }}
          >
            {images.map((item) => {
              return (
                <Slide
                  imglink={item.imglink}
                  percentofScreen={percentofScreen}
                />
              );
            })}
          </div>
        </div>
        {!firstSlideRow && (
          <span className="prev arrow" onClick={handlePrev}></span>
        )}
        {!lastSlideRow && (
          <span className="next arrow" onClick={handleNext}></span>
        )}
      </div>
    </div>
  );
}

export default App;
