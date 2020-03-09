import React, { Component } from "react";
import { hotGe } from "../../api/requit";
import { withRouter } from "react-router-dom";
class Geshou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    hotGe().then(res => {
      this.setState({
        list: res.data.data.list.splice(0, 6),
      });
    });
  }
  tiao = item => {
    console.log(item.Fsinger_mid);
    this.props.history.push("/lie", { id: item.Fsinger_mid });
  };
  render() {
    let { list } = this.state;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <p style={{ color: "gray", marginTop: "4%" }}>热门歌手</p>
        {list.map(item => {
          return (
            <li
              key={item.Fsinger_id}
              style={{
                width: "100%",
                height: "10%",
                marginTop: "10%",
              }}
              onClick={this.tiao.bind(this, item)}
            >
              <div style={{ display: "flex", backgroundColor: "black" }}>
                <img
                  src={
                    "https://y.gtimg.cn/music/photo_new/T001R300x300M000" +
                    item.Fsinger_mid +
                    ".jpg?max_age=2592000"
                  }
                  style={{ width: "20%", height: "100%", borderRadius: "50%" }}
                ></img>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "6%",
                    marginLeft: "2%",
                    color: "white",
                  }}
                >
                  {item.Fsinger_name}
                </p>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}
export default withRouter(Geshou);
