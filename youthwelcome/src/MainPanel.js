import React, { Component } from "react";
import SideBar from "./SideBar";

class MainPanel extends Component {

  render() {
    return (
      <div className="ChatBox">
        <SideBar />
      </div>
    );
  }
}

export default MainPanel;
