import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render() {
    return (
      <div className="welcome-message">
        <h1>Welcome to the Flickhouse quizz !
          <br/>You'll be asked a series of "Yes or No" questions.
          <br/>Do your best 🎥
        </h1>
      </div>
    );
  }
}

export default WelcomeMessage;
