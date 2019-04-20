import React, { Component } from "react";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <button className="btn">Send</button>
      </div>
    );
  }
}

export default App;
