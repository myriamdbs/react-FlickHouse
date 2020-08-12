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
      quizzStarted: false
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
    if (this.state.startBtnDisplayed) {
      startBtn = <button onClick={this.handleStartQuizz}>Start</button>;
    }

    let question;
    if (this.state.quizzStarted){
      question = <QuestionBox />
    };

    return (
      <div className="app-container">
        { message }
        { startBtn }
        { question }
      </div>

    );
  }
}

export default App;
