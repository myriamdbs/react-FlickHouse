import React, { Component } from 'react';

class QuestionBox extends Component {

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
          movies: data.results.map(result => result.known_for)
          // movies: data.results.map(result => result.known_for)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
      });
  }

  // const moviesArrayBuilder(arr) => {
  //   const movies = [];
  //   arr.forEach((element) => {
  //     movies.push(element.known_for);
  //   });
  //   return movies;
  //   }
  // }

  render() {
    const { error, isLoaded, actors, movies } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              Did {actor.name} play in ?
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default QuestionBox;
