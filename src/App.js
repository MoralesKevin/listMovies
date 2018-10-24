import React, { Component } from 'react';
import ListMovies from './ListMovies'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListMovies />
      </div>
    );
  }
}

export default App;
