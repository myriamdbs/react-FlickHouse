import React, { Component } from 'react';

import WelcomeMessage from './welcome_message';
import quizzData from '../services/quiz_data';

class App extends Component {

  render() {
    return (
      <div>
        <WelcomeMessage />
      </div>
    );
  }
}

export default App;
