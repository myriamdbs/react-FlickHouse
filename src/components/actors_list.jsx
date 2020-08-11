import React, { Component } from 'react';

class Actors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          actors: data.results,
        });
      });
  }

  render() {
    const {actors} = this.state;
      return (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              {actor.name}
            </li>
          ))}
        </ul>
      );
    }
}

export default ActorsList;
