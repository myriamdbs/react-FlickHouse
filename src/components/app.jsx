import React, { Component } from 'react';

import WelcomeMessage from './welcome_message';
import QuestionBox from './question_box';

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <QuestionBox />
      </div>
    );
  }
}

export default App;
