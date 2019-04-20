import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import InputSection from "./components/InputSection";

class App extends Component {
  render() {
    return (
      <div className="flex">
        <Sidebar />
        <div style={{ flex: 1, height: "100vh" }}>
          <Header />
          <div className="flex">
            <InputSection />
            {/* <ResultSection /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
