import React from "react";
import SidePanelItem from "./SidePanelItem";

class SidePanel extends React.Component {
  getRoomList() {
    const { joinedRoooms, joinedRoomsIds, onClick } = this.props;
    let roomList = [];
    for (let i = 0; i < joinedRoooms.length; i++) {
      roomList[i] = (
        <SidePanelItem
          name={joinedRoooms[i]}
          roomId={joinedRoomsIds[i]}
          backgroundColor="#d2443a"
          onClick={onClick}
        />
      );
    }
    return roomList;
  }

  render() {
    return (
      <div
        className="SidePanel-Element"
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <div className="SidePanel-Header">
          <p>Maple Chat</p>
        </div>
        <div className="SidePanel-ItemList">{this.getRoomList()}</div>
      </div>
    );
  }
}

export default SidePanel;
