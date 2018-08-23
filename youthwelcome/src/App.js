import React from "react";
import "./App.css";
import Tabs from "./Tabs";
import Forum from "./Forum";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";

const ROOMS = [
  "Cricket",
  "Soccer",
  "Badminton",
  "Art",
  "Rock and Roll",
  "Novels",
  "Stand Up Comedy",
  "Camping",
  "Canoeing",
  "Travel",
  "Hiking"
];

const ROOM_IDS = [14340058, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groupName: ROOMS[0],
      groupId: ROOM_IDS[0],
      userId: "Bob"
    };
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
  }

  async handleChangeRoom(name, id) {
    await this.setState({
      groupName: name,
      groupId: id
    });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Canada</h1>
        </header>
        <Tabs>
          <div label="Forum">
            <Forum>
            </Forum>
          </div>
          <div label="Chat">
            <ChatWindow />
          </div>
        </Tabs> */}
        <div className="FullPage">
          <div className="SidePanel">
            <SidePanel
              onClick={this.handleChangeRoom}
              joinedRoooms={ROOMS}
              joinedRoomsIds={ROOM_IDS}
            />
          </div>
          <div className="MainPanel">
            <MainPanel
              groupName={this.state.groupName}
              groupId={this.state.groupId}
              userId={this.state.userId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
