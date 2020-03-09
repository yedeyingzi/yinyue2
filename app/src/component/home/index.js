import React, { Component } from "react";
import home from "../home/home.css";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import Lun from "../lun/index";
import { lie, pai } from "../../api/requit";
import { connect } from "react-redux";
import Wen from "../home/wenben";
import HotGe from "../../component/geshou";
import store from "../../store";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: <Badge text={"3"}>First Tab</Badge> },
        { title: <Badge text={"今日(20)"}>Second Tab</Badge> },
        { title: <Badge dot>Third Tab</Badge> },
      ],
      tabs2: [
        { title: "推荐", sub: "1" },
        { title: "歌手", sub: "2" },
        { title: "排行", sub: "3" },
        { title: "搜素", sub: "4" },
      ],
      list: [],
      pai: [],
    };
  }
  //数据挂载
  componentDidMount() {
    //推荐数据

    lie().then(res => {
      this.setState({
        list: res.data.data.list,
      });
    });
    //排行榜数据
    pai().then(res => {
      this.setState({
        pai: res.data.data.topList,
      });
    });
  }
  tiao = p => {
    console.log("点击了跳转按钮");
    this.props.history.push("/lie");
  };
  //改变state的状态
  // getData() {
  //   lie().then(res => {
  //     console.log(res);

  //     this.props.dispatch({
  //       type: "REI",
  //       res,
  //     });
  //   });
  // }
  render() {
    let { tabs2, list, pai } = this.state;
    console.log(pai);
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header style={{ position: "fixed" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIJ_l4dx5iAvitwAqMxTWrUBgE8SM3W8ci4Ej6EWp0qLbTJEFa" />
          <p>
            <span>Chenick</span> <span>music</span>
          </p>

          <span className="iconfont icon-wode"></span>
        </header>
        <div
          style={{
            position: "fixed",
            top: "50px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flex: "1",
          }}
        >
          <Tabs
            tabBarBackgroundColor="black"
            tabBarInactiveTextColor="white"
            className="tabs"
            tabs={tabs2}
            initialPage={0}
            onChange={(tab, index) => {
              console.log("onChange", index, tab);
            }}
            onTabClick={(tab, index) => {
              console.log("onTabClick", index, tab);
            }}
          >
            <div
              className="nei"
              style={{
                // display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
                justifyContent: "center",
                height: "573px",
                // flex: "1",
                backgroundColor: "black",
                overflow: "auto",
              }}
            >
              <Lun></Lun>
              <p style={{ color: "red", textAlign: "center", marginTop: "3%" }}>
                热门歌单推荐
              </p>
              {list.map((item, index) => {
                return (
                  <li
                    key={item.dissid}
                    style={{
                      width: "100%",
                      height: "50px",

                      marginTop: "10px",
                      display: "flex",
                    }}
                    onClick={this.tiao.bind(item.id)}
                  >
                    <img
                      src={item.imgurl}
                      style={{ width: "20%", height: "100%" }}
                    ></img>
                    <div style={{ marginTop: "2%", marginLeft: "5%" }}>
                      <p style={{ color: "white" }}>{item.creator.name}</p>
                      <p
                        style={{
                          marginTop: "2%",
                          color: "blue",
                          fontSize: "12px",
                        }}
                      >
                        {item.dissname}
                      </p>
                    </div>
                  </li>
                );
              })}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "700px",
                backgroundColor: "black",
              }}
            >
              <HotGe style={{ background: "black" }}></HotGe>
            </div>
            {/* 排行榜数据 */}
            <div
              className="xuan"
              style={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                height: "31%",
                backgroundColor: "black",
                overflow: "auto",
              }}
            >
              {pai.map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      width: "100%",
                      height: "10%",
                      background: "gray",
                      marginTop: "4%",
                      display: "flex",
                    }}
                  >
                    <img
                      src={item.picUrl}
                      style={{ height: "100%", width: "30%" }}
                    ></img>

                    <div style={{ marginTop: "2%" }}>
                      {item.songList.map((items, indexi) => {
                        return (
                          <li
                            key={indexi}
                            style={{
                              background: "gray",
                              width: "200px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              marginTop: "1%",
                              marginLeft: "2%",
                              color: "pink",
                            }}
                          >
                            {indexi + 1}
                            {items.singername}
                            {items.songname}
                          </li>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </div>
            <div
              style={{
                width: "100%",
                height: "700px",
                backgroundColor: "black",
              }}
            >
              {/* 输入框 */}
              <div
                style={{
                  width: "100%",
                  display: "flex",

                  height: "8%",
                  backgroundColor: "gray",
                }}
              >
                <input
                  type="button"
                  style={{
                    width: "10%",
                    height: "50%",
                    background: "gray",
                    marginTop: "-11%",
                  }}
                ></input>
                <input
                  placeholder="搜索歌曲歌手"
                  style={{
                    background: "gray",
                    width: "90%",
                    height: "100%",
                    border: "none",
                  }}
                />
                <span
                  className="iconfont icon-fangdajing
              "
                  style={{
                    marginLeft: "-99%",
                    fontSize: "30px",
                    marginTop: "3%",
                  }}
                ></span>
                {/* 热门搜索 */}
              </div>
              <div>
                {" "}
                <Wen></Wen>
              </div>
              <div>
                <p style={{ color: "red" }}>搜索历史</p>
              </div>
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}
export default connect(state => state)(Home);
