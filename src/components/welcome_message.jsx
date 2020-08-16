import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render() {
    return (
      <div className="welcome-message">
        <h1>Welcome to the FlickHouse quizz 🎥</h1>
          <h3>You'll be asked a series of "Yes or No" questions. Do your best !</h3>
      </div>
    );
  }
}

export default WelcomeMessage;
