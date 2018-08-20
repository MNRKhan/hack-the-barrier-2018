import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatWindow from './ChatWindow';

import Tabs from './Tabs';
import Forum from './Forum';

class App extends Component {
  render() {
    return (
	  <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Tabs>
          <div label="Forum">
            <Forum>
            </Forum>
          </div>
          <div label="Chat">
            <ChatWindow />
          </div>
        </Tabs>
      </div>
    </div>
    );
  }
}

export default App;
