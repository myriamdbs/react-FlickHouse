import React, { Component } from 'react';


class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
      movies: [],
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
          dataLoaded: true
        });
      });
    this.setState({
      randomIndexForActor: Math.floor((Math.random() * 20)),
      randomIndexForMovies: Math.floor((Math.random() * 58)),
    });
  }

  getAnswerFromApi = async (movieId, actorId) => {
    const credits = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_TMBD_KEY}`)
      .then(response => response.json());
    console.log(credits.cast);
    const answerViaCredit = credits.cast.some(credit => credit.id === actorId);
    if (answerViaCredit) {
      this.setState({
        answer: 'yes'
      });
    } else {
      this.setState({
        answer: 'no'
      });
    }
  }

  getUserAnswer = (e) => {
    this.setState({
      userAnswer: e.target.dataset.option
    });
    // search answer on API
    const actorId = e.target.dataset.actor;
    const movieId = e.target.dataset.movie;
    this.getAnswerFromApi(actorId);


  }

  render() {
    const { actors, movies, randomIndexForActor, randomIndexForMovies } = this.state;
    let question;
    let yesButton;
    let noButton;
    if (this.state.dataLoaded) {
      question = <h2>Did { actors[randomIndexForActor]['name'] } play in { movies[randomIndexForMovies]['name'] || movies[randomIndexForMovies]['title']} ? </h2>;
      yesButton = <button data-option='yes' data-actor={ actors[randomIndexForActor]['id']} data-movie= { movies[randomIndexForMovies]['id'] } onClick={this.getUserAnswer}>Yes</button>;
      noButton = <button data-option='no' onClick={this.getUserAnswer}>No</button>;
    }

    // compare answer & userAnswer
    let winMessage;
    let looseMessage;
    if (this.state.userAnswer === this.state.answer && this.state.answer !== null) {
      winMessage = <h3>Good answer ! Well done 💪</h3>;
    } else if (this.state.userAnswer !== this.state.answer && this.state.answer !== null) {
      looseMessage = <h3> Wrong answer 😕</h3>;
    }
    // display win/loose msg to user
    return (
      <div>
        { question }
        { yesButton }
        ||
        { noButton }
        { winMessage }
        { looseMessage }
      </div>
    );
  }
}

export default QuestionBox;
