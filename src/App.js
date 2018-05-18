import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import url from './config/config'
class App extends Component {

  componentDidMount() {
    // console.log("The component has mounted!");
    
    $.getJSON(url, (movieData) => {
      console.log(movieData);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Sanity Check</h1>
      </div>
    );
  }
}

export default App;
