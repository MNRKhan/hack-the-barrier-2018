import React from "react";
import SideBar from "./SideBar";

class ChatWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: DUMMY_DATA
    };
  }

  render() {
    return (
      <div
        className="chatWindow"
        style={{
          height: "100%",
          width: "1800px"
        }}
      >
        <div>
          <SideBar />
        </div>
        <div
          className="MessageBar"
          style={{
            height: "100%",
            width: "80%",
            float: "right",
            backgroundColor: "none"
          }}
        >
          <MessageList messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <div className="MessageList">
        <ul>
          {this.props.messages.map(message => {
            return (
              <li className="messageList" key={message.id}>
                <div className="messageHeader">{message.senderId}</div>
                <div className="messageBubble">{message.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
];

export default ChatWindow;
