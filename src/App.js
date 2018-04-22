import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    activeView: 'explore',
    activeCollection: '',
    activePicture: ''
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Day2Day.wallpaper</h1>
        </header>
      </div>
    );
  }
}

export default App;
