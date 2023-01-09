import React, { useState } from "react";
// コンポーネントのインポート
import ColorfulMessage from "./components/ColorfulMessage";

// React.Fragmentは省略してもよい
// jsオブジェクトは「{}」で囲う
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    /* <React.Fragment*/
    <>
      <h1 style={{ color: "red" }}>Hello world !</h1>
      <ColorfulMessage color="blue">How are you ?</ColorfulMessage>
      <ColorfulMessage color="pink">fine. and you ?</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up!</button>
      <p>{num}</p>
    </>
    /* </React.Fragment> */
  );
};

export default App;
