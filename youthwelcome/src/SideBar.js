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
        <div
          className="ProfileItem"
          style={{
            height: "15%",
            width: "100%"
          }}
        >
          <SideBarItem
            name={this.props.userName}
            backgroundColor="lightblue"
            onClick={() => {}}
            style={buttonStyle}
          />
        </div>
        <div
          className="SideBarItems"
          style={{
            "overflow-y": "auto",
            "overflow-x": "hidden",
            height: "85%",
            width: "100%"
          }}
        >
          <SideBarItem
            name="Cricket"
            backgroundColor="red"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Soccer"
            backgroundColor="green"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Badminton"
            backgroundColor="lightblue"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Cricket"
            backgroundColor="red"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Soccer"
            backgroundColor="green"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Badminton"
            backgroundColor="lightblue"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Cricket"
            backgroundColor="red"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Soccer"
            backgroundColor="green"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Badminton"
            backgroundColor="lightblue"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Cricket"
            backgroundColor="red"
            onClick={this.props.onClick}
          />
          <SideBarItem
            name="Soccer"
            backgroundColor="green"
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  backgroundColor: "#4CAF50" /* Green */,
  border: "none",
  color: "white",
  padding: "0px 10px",
  textAlign: "left",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "20px",
  margin: "4px 2px",
  cursor: "pointer",
  height: "70%",
  width: "100%"
};

export default SideBar;
