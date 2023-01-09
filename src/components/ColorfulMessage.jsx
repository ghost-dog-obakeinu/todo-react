import React from "react";

const ColorfulMessage = (props) => {
  // console.log(props);
  // 分割代入で「props.」を省略
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    // オブジェクト名(左側)と変数名(右側)が同じ場合、変数名を省略できる
    color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>{props.message}</p>;
  // タグの間にべた書きした内容は「props.children」として使用できる
  // <ColorfulMessage color="blue" message='How are you ?' />
  // <ColorfulMessage color="blue">How are you ?</ColorfulMessage>
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
