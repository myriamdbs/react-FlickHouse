import React, { Component } from 'react';

import WelcomeMessage from './welcome_message';
import QuestionBox from './question_box';
// import { quizzData } from '../services/quiz_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMsgDisplayed: true,
      startBtnDisplayed: true,
      quizzStarted: false,
      score: 0
    };
  }

  handleStartQuizz = () => {
    this.setState({
      welcomeMsgDisplayed: false,
      startBtnDisplayed: false,
      quizzStarted: true
    });
  }

  render() {
    let message;
    if (this.state.welcomeMsgDisplayed) {
      message = <WelcomeMessage />;
    }

    let startBtn;
    let filmImage;
    if (this.state.startBtnDisplayed) {
      startBtn = <button onClick={this.handleStartQuizz}>Start</button>;
      filmImage = <img src="../../assets/cinebande.gif" alt="film"/>;
    }

    let question;
    if (this.state.quizzStarted){
      question = <QuestionBox />
    };

    return (
      <div className="app-container">
        <div className="home-container-left">
          { message }
          { startBtn }
          <div className="film-image">
            { filmImage }
          </div>
        </div>
        <div>
          { question }
        </div>
      </div>

    );
  }
}

export default App;
