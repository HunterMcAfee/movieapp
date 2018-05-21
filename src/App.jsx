import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import url from './config/config'
import Poster from './Poster';
import SearchBar from './SearchBar';
import searchUrl from './config/searchUrl';

class App extends Component {
  // Constructor runs ONCE. When the object/compoent is created
  constructor(props) {
    // Call super in order to pass up to React.Compoent whatever it needs
    super(props);
    // After super, we can use the word "this"
    // Set the inital state of the var: this.state.moviePosters to []
    this.state = {
      moviePosters: []
    }
    this.newUserSearch = this.newUserSearch.bind(this);
  }
  // Special lifecyle method
  // Will run as soon as the FIRST render runs
  // This is where AJAX goes
  componentDidMount() {
    // console.log("The component has mounted!");
    $.getJSON(url, (movieData) => {
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      });
    });
  }

  newUserSearch(movieTitle) {
    const url = `${searchUrl}${movieTitle}`;
    $.getJSON(url, (movieData) => {
      this.setState({
        moviePosters: movieData.results
      });
    });

}

  // EVERY React component MUST have a render
  render() {
    const posters = this.state.moviePosters.map((movie, index) => {
      const imagePath = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
      return (
        <Poster movie={movie} poster={imagePath} key={index} />
      );
    });
    console.log(posters);
    console.log("Render is running...");
    // return a single dom element (jsx)
    return (
      <div className="App">
        <h1>Movies Now Playing:</h1>
        <SearchBar searchFunction={this.newUserSearch} />
        {posters}
      </div>
    );
  }
}

export default App;
