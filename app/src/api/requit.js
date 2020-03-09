import axios from "./index";
export const lie = () => {
  return axios.get("/music/getRecommendList");
};
export const lun = () => {
  return axios.get("/music/getBanner");
};
export const ge = () => {
  return axios.get("/music/singerList");
};
export const pai = () => {
  return axios.get("/music/topRank");
};
export const hotGe = () => {
  return axios.get("/music/singerList");
};
// 歌手歌单列表
export const gg = id => {
  return axios.post("/music/songListById", { singermid: id });
};
//歌曲信息
export const qu = id => {
  return axios.post("/music/songurl", { mids: [id] });
};
//歌曲geci
export const ci = id => {
  return axios.post("/music/lyric", { songmid: [id] });
};
