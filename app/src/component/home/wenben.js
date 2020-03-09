import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Flex, WhiteSpace } from "antd-mobile";
import yang2 from "../home/yang2.css";
const PlaceHolder = ({ className = "", item }) => (
  <div className={`${className} placeholder`}>{item}</div>
);

export default class Wen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "我们的歌",
        "冰雪奇缘2",
        "张杰",
        "桥边姑娘",
        "星辰大海",
        "哪吒 李宇春",
        "左手指月",
        "邓紫棋",
        "醉酒的蝴蝶",
        "左肩",
      ],
    };
  }
  render() {
    return (
      <div className="flex-container" style={{ backgroundColor: "black" }}>
        <div className="sub-title">热门搜索</div>
        <Flex wrap="wrap">
          {this.state.list.map((item, index) => {
            return <PlaceHolder className="inline" item={item} />;
          })}
        </Flex>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}
