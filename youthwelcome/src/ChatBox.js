import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

class ChatBox extends Component {
  onClick() {
    alert("Hello! I am an alert box!!");
  }

  render() {
    return (
      <div className="ChatBox">
        <header className="ChatBox-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="ChatBox-title">Chat Box</h1>
        </header>
        <p className="ChatBox-intro">
          Enter stuff in the text box and click submit.
        </p>
        
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <button onClick={this.onClick}>Click me</button>
        </form>
      </div>
    );
  }
}

export default ChatBox;
