import React, { Component } from 'react';

import WelcomeMessage from './welcome_message';
// import QuestionList from './questions_list';
// import { quizzData } from '../services/quiz_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMsgDisplayed: true,
      startBtnDisplayed: true
    };
  }

  handleStartQuizz = () => {
    this.setState({
      welcomeMsgDisplayed: false,
      startBtnDisplayed: false
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
    return (
      <div className="app-container">
        { message }
        { startBtn }
      </div>
    );
  }
}

export default App;
