import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout.js';

class App extends Component {
  
  state = {
    activeView: 'explore',
    activeCollection: '',
    activePicture: ''
  }
  
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
