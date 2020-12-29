import React, { Component } from "react";
import "./App.css";
// import logo from './logo.svg';

import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

import TMDB from "./TMDB";

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails films={TMDB.films} />
      </div>
    );
  }
}

export default App;
