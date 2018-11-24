import React, { Component } from 'react';
import { askForPermissionToReceiveNotifications } from './push-notification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the push-notification example</h1>
        </header>
        <button onClick={askForPermissionToReceiveNotifications} >
          Click here to receive notifications
        </button>
      </div>
    );
  }
}

export default App;
