// import React, { useState } from "react";

const pictures = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/1000/200/300",
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/10/200/300",
];
function App() {
  const [pictureIndex, setPictureValue] = React.useState(0);

  const changeImg = () => {};

  const clickRight = () => {
    setPictureValue(pictureIndex + 1);
  };
  const clickLeft = () => {
    setPictureValue(pictureIndex - 1);
  };
  return (
    <>
      <h1>Hooks Slider</h1>
      <img src={pictures[pictureIndex]} alt="" />
      <button onClick={clickRight}>Next</button>
      <button onClick={clickLeft}>Left</button>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
