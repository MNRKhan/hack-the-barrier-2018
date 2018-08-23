import React from "react";

// WIP

class SidePanelItem extends React.Component {
  render() {
    if (this.props) {
      const { onClick, name, roomId } = this.props;
      return (
        <div className="SidePanel-Item">
          <button
            onClick={() => onClick(name, roomId)}
            style={{
              ...buttonStyle,
              backgroundColor: this.props.backgroundColor
            }}
          >
            {this.props.name}
          </button>
        </div>
      );
    }
  }
}

const buttonStyle = {
  borderColor: "#d2443a",
  borderWidth: "thick",
  borderRadius: "10% 20%",
  color: "white",
  padding: "0px 5%",
  textAlign: "left",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "20px",
  margin: "0.5% 0.5%",
  cursor: "pointer",
  height: "10vh",
  width: "99%"
};

export default SidePanelItem;
