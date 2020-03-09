import React, { Component } from "react";
import { qu, ci } from "../../api/requit";
import { withRouter } from "react-router";
export default class Xiang extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state.id);
    this.state = {
      url: "",
      tu: "",
      gesm: this.props.location.state.gesm,
      gem: this.props.location.state.gem,
    };
  }
  componentDidMount() {
    qu(this.props.location.state.id).then(res => {
      console.log(res);
      this.setState({
        url: res.data.urls,
        tu: this.props.location.state.tu,
      });
    });
    ci(this.props.location.state.id).then(res => {
      console.log(res);
    });
  }
  tiao = () => {
    this.props.history.push("/lie", { id: this.props.location.state.gid });
    console.log("点击了返回按钮");
    console.log(this.props);
  };
  render() {
    let { url, tu, gesm, gem } = this.state;
    console.log(gesm);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <img
            src={
              "https://y.gtimg.cn/music/photo_new/T002R300x300M000" +
              tu +
              ".jpg?max_age=2592000"
            }
            style={{ width: "100%", height: "100%" }}
          ></img>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.8)",
            zIndex: "100",
            position: "fixed",
            left: "0",
            top: "0",
          }}
        >
          <p
            style={{ position: "fixed", fontSize: "30px" }}
            onClick={this.tiao}
          >
            &lt;
          </p>
          <div
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#eee",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "20px" }}>{gesm}</p>
            <p>{gem}</p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "10%",
              backgroundColor: "#f2f3f5",
              position: "fixed",
              bottom: "0",
            }}
          >
            <img
              src={
                "https://y.gtimg.cn/music/photo_new/T002R300x300M000" +
                tu +
                ".jpg?max_age=2592000"
              }
              style={{
                width: "20%",
                height: "100%",
                borderRadius: "50%",
                // position: "fixed",
                bottom: "0",
              }}
            ></img>
            <audio
              controls
              src={url}
              style={{
                width: "80%",
                height: "100%",

                // position: "fixed",
                // bottom: "0",
                // left: "20%",
              }}
            ></audio>
          </div>
        </div>
      </div>
    );
  }
}
