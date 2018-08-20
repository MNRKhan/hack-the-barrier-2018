import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Tabs>
        
      </div>
	  <div>
		<ChatWindow />
	  </div>
	  </div>
    );
  }
}

export default App;
