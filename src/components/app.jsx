import React, { Component } from 'react';

import WelcomeMessage from './welcome_message';
// import QuestionList from './questions_list';
import { quizzData } from '../services/quiz_data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      userAnswer: null,
      quizzEnd: false,
      quizzStart: false,
      score:0,
      options: ['yes', 'no'],
      disabled: true,
      welcomeMsg: true
    };
  }

  componentDidMount() {
    if (this.state.quizzStart){
      this.setState({
        welcomeMsg: true
      });
    }
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;
    this.setState(() => {
      return {
        question: quizzData[currentIndex].question,
        options: quizzData[currentIndex].options,
        answer: quizzData[currentIndex].answer
      };
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({
  //     welcomeMsg: false,
  //   });
  // }

  // startQuizHandler = () => {

  // }

  // nextQuestionHandler = () => {
  //   const { userAnswer, answer, score } = this.state;
  //   if (userAnswer === answer) {
  //     this.setState({
  //       score: score + 1
  //     });
  //   }
  //   this.setState({
  //     currentIndex: this.state.currentIndex + 1,
  //     userAnswer: null
  //   });
  // }

  // checkAnswer = (answer) => {
  //   this.setState({
  //     userAnswer: answer,
  //     disabled: false
  //   });
  // }

  render() {
    const { question, options, currentIndex, answer } = this.state;
    let message;
    if (this.state.welcomeMsg) {
      message = <WelcomeMessage />;
    }
    return (
      <div>
        { message }
        {<button onCLick={this.loadQuiz()}>Start</button>}
        <h3>{ question }</h3>
        { options }
      </div>
    );
  }
}

export default App;
