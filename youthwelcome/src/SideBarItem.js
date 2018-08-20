import React, { Component } from "react";

// WIP

class SideBarItem extends Component {
  render() {
    if (this.props) {
      return (
        <body
          background="./badminton.jpg"
          className="SideBarItem"
          style={{
            height: "100px",
            width: "100%"
          }}
        >
          <button
            onClick={() => this.props.onClick(this.props.name)}
            class="button"
            style={{
              ...buttonStyle,
              backgroundColor: this.props.backgroundColor
            }}
          >
            {this.props.name}
          </button>
        </body>
      );
    }
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
  height: "100px",
  width: "100%"
};

export default SideBarItem;
