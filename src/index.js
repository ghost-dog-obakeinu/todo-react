import React from "react";
import ReactDom from "react-dom";

// コンポーネントのインポート
// Reaxtのコンポーネントはアッパーキャメルケース(パスカルケース)で宣言する
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
