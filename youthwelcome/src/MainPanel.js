import React from "react";
import ChatWindow from "./ChatWindow";

class MainPanel extends React.Component {
  render() {
    return (
      <div className="MainPanel-Element">
        <ChatWindow
          groupName={this.props.groupName}
          groupId={this.props.groupId}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default MainPanel;
