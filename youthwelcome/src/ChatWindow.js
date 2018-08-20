import React from "react";
import SideBar from "./SideBar";
import Chatkit from '@pusher/chatkit'

const instanceLocator = "v1:us1:5f6f671c-5638-4ab3-b928-0c0f97c6b872"
const secretKey = "5b4b74c3-2ebc-480c-94cd-fb5f87e5d4ff:3oKYoWtbJDl8tesyCVqtPt6nGJ7ITnHhUvcIM0uQWuA="
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/5f6f671c-5638-4ab3-b928-0c0f97c6b872/token"
const username = "htb-user-01"
const roomId = 14337523;

const toLang = 'en';

class ChatWindow extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator: instanceLocator,
        userId: 'htb-user-01',
        tokenProvider: new Chatkit.TokenProvider({
            url: testToken
        })
    })
    
    chatManager.connect()
    .then(currentUser => {
        this.currentUser = currentUser
        this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
            onNewMessage: message => {

                this.setState({
                    messages: [...this.state.messages, message]
                })
            }
        }
    })
  })
}

sendMessage(text) {
  this.currentUser.sendMessage({
    text,
    roomId: roomId
  })
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
          className="messageWindow"
          style={{
            height: "100%",
            width: "80%",
            float: "right",
            backgroundColor: "none"
          }}
        >
          <div className = "chatTitle">
          <ChatTitle title = "Test Messenge"/>
          </div>
          <div className = "messageList">
          <MessageList messages={this.state.messages} />
          </div>
          <div className = "messageTextBox">
            <MessageTextBox  sendMessage={this.sendMessage}/>
          </div>   
        </div>
      </div>
    );
  }
}

class ChatTitle extends React.Component {

  render() {
    return (
        <div>
          <p className = "chatTitle">{this.props.title}</p>
        </div>
    )
}
}

class MessageTextBox extends React.Component {
  constructor() {
    super()
    this.state = {
        message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(e) {
    this.setState({
        message: e.target.value
    })
}

handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
        message: ''
    })
}

render() {
    return (
        <form
            onSubmit={this.handleSubmit}
            className="send-message-form">
            <input className = "messageTextBox"
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Say something..."
                type="text" />
        </form>
    )
}
}

class MessageList extends React.Component {
  render() {
    return (
      <div>
        <ul className = "messageList">
          {this.props.messages.map(message => {
            return (
              <li className="messageListElement" key={message.id}>
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
