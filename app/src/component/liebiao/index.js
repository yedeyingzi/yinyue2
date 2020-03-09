import React, { Component } from "react";
import { gg } from "../../api/requit";
export default class Lie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tu: [],
      list: [],
    };
  }
  componentDidMount() {
    console.log(this.props.location.state.id);
    gg(this.props.location.state.id).then(res => {
      console.log(res.data.data);

      this.setState({
        tu: res.data.data.singer_mid,
        list: res.data.data.list,
      });
    });
  }
  tiao = item => {
    console.log("点击了跳转", item.musicData.songmid, item.musicData.albummid);
    this.props.history.push("xiang", {
      id: item.musicData.songmid,
      tu: item.musicData.albummid,
      gesm: item.musicData.singer[0].name,
      gem: item.musicData.albumname,
      gid: this.props.location.state.id,
    });
  };
  render() {
    let { tu, list } = this.state;
    console.log(list);
    return (
      <div
        style={{
          width: "100%",
          // height: "100%",

          flexDirection: "column",
          backgroundColor: "gray",
        }}
      >
        <div style={{ width: "100%" }}>
          <img
            src={
              "https://y.gtimg.cn/music/photo_new/T001R300x300M000" +
              tu +
              ".jpg?max_age=2592000"
            }
            style={{
              width: "100%",
              height: "20%",
              top: "0",
              position: "fixed",
            }}
          ></img>
          <div style={{ marginTop: "35%" }}>
            {list.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    color: "red",
                    width: "100%",

                    marginTop: "2%",
                    backgroundColor: "black",
                  }}
                  onClick={this.tiao.bind(this, item)}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "100%",

                      marginLeft: "10%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "20px",
                        marginTop: "3%",
                        marginBottom: "1.5%",
                        marginLeft: "2%",
                        color: "white",
                      }}
                    >
                      {item.musicData.songname}
                    </p>
                    <p style={{ marginLeft: "2%", color: "grey" }}>
                      {item.musicData.singer[0].name}
                    </p>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
