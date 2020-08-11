import React, { Component } from 'react';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
      movies: [],
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          actors: data.results,
          movies: (data.results.map(result => result.known_for)).flat()
        });
      });
  }

  render() {
    const { error, isLoaded, actors, movies } = this.state;

      return (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              Did {actor.name} play in YYY?
            </li>
          ))}
        </ul>
      );
  }
}
export default QuestionList;
