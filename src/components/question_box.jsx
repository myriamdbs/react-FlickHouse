import React, { Component } from 'react';


class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: ['', '', '', ''],
      movies: ['', '', '', ''],
      dataLoaded: false,
      answer: null,
      userAnswer:null,
      randomIndexForActor: null,
      randomIndexForMovies: null
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          actors: data.results,
          movies: (data.results.map(result => result.known_for)).flat(),
        });
      });
    this.setState({
      randomIndexForActor: Math.floor((Math.random() * this.state.actors.length)),
      randomIndexForMovies: Math.floor((Math.random() * this.state.movies.length)),
      dataLoaded: true
    });
  }

  getUserAnswer = (e) => {
    this.setState({
      userAnswer: e.target.dataset.option
    });
  }

  render() {
    const { actors, movies, randomIndexForActor, randomIndexForMovies } = this.state;
    let question;
    if (this.state.dataLoaded) {
      question = <h2>Did { actors[randomIndexForActor]['name'] } play in { movies[randomIndexForMovies]['name'] || movies[randomIndexForMovies]['title']} ? </h2>;
    }
    return (
      <div>
        { question }
        <button data-option='yes' onClick={this.getUserAnswer}>Yes</button> || <button data-option='no' onClick={this.getUserAnswer}>No</button>
      </div>
    );
  }
}

export default QuestionBox;
