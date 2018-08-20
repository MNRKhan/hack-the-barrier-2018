import React, { Component } from 'react';

class ChatWindow extends React.Component {
  
  constructor() {
    super()
    this.state = {
       messages: DUMMY_DATA
    }
  }
  
  render() {
    return (
      <div className="chatWindow">
        <MessageList messages={this.state.messages} />
     </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">                 
        {this.props.messages.map(message => {
          return (
           <li key={message.id}>
             <div>
               {message.senderId}
             </div>
             <div className = "messageBubble">
               {message.text}
             </div>
           </li>
         )
       })}
     </ul>
    )
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
]

export default ChatWindow;
