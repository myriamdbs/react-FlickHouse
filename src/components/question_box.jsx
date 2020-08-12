import React, { Component } from 'react';


class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
      movies: [],
      options: ['Yes', 'No']
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          actors: data.results,
          movies: (data.results.map(result => result.known_for)).flat()
        });
      });
  }

  render() {
    const { actors, movies, options } = this.state;
    return (
      <div>
        <h2>Did Julia Roberts play in Pretty Woman ? </h2>
        <button>{ options[0] }</button> || <button>{ options[1] }</button>
      </div>
    );
  }
}

export default QuestionBox;
