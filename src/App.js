import "./App.css";
import React, { Component } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Routers from "./components/App/Routers";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className={"app"}>
        <GlobalStyle />
        <Navbar />
        <Routers />
      </div>
    );
  }
}

export default App;
