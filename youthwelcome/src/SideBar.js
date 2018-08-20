import React, { Component } from "react";
import SideBarItem from "./SideBarItem";

class SideBar extends Component {
  render() {
    return (
      <div
        className="SideBar"
        style={{
          height: "775px",
          width: "20%",
          float: "left",
          backgroundColor: "none"
        }}
      >
        <div className="SideBarItems" style={{"overflow-y": "auto", "overflow-x": "hidden", height: "100%", width: "100%"}}>
          <SideBarItem name="Badminton" backgroundColor="lightblue" />
          <SideBarItem name="Cricket" backgroundColor="red" />
          <SideBarItem name="Soccer" backgroundColor="green" />
          <SideBarItem name="Badminton" backgroundColor="lightblue" />
          <SideBarItem name="Cricket" backgroundColor="red" />
          <SideBarItem name="Soccer" backgroundColor="green" />
          <SideBarItem name="Badminton" backgroundColor="lightblue" />
          <SideBarItem name="Cricket" backgroundColor="red" />
          <SideBarItem name="Soccer" backgroundColor="green" />
          <SideBarItem name="Badminton" backgroundColor="lightblue" />
          <SideBarItem name="Cricket" backgroundColor="red" />
          <SideBarItem name="Soccer" backgroundColor="green" />
          <SideBarItem name="Badminton" backgroundColor="lightblue" />
          <SideBarItem name="Cricket" backgroundColor="red" />
          <SideBarItem name="Soccer" backgroundColor="green" />

        </div>
      </div>
    );
  }
}

export default SideBar;
