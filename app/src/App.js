import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/component/home";
import Xiang from "../src/component/xiang";
import List from "../src/component/lun";
import Geshou from "../src/component/geshou";
import Lie from "../src/component/liebiao";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/ge" component={Geshou} exact></Route>
        <Route path="/lie" component={Lie} exact></Route>
        <Route path="/xiang" component={Xiang} exact></Route>
        <Redirect to="/home" exact></Redirect>
      </Switch>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
