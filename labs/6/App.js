import React from 'react';
//import Quiz  from './components/Quiz/quiz.json';
import questions from './quiz.json';
import {
  StyleSheet,
  View,
  Text } from 'react-native';

/* export default class App extends React.Component {
    render(){
      return(
        <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Lab 6 Quiz!!</Text>
    </View>
     )
    }
};
*/

//NEED TO CHANGE TO REACT NATIVE!!!!!

const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2
const TIME_LIMIT = 5

class QuizQuestion extends React.Component{
  render(){
    return <>
    <h1>{this.props.question}</h1>
    {this.props.answer.map((v, i) =>
    <input className="answerButton" onClick={() => this.props.nextQuestion(v.correct)} type="button" key={i}
    value={v.text}/>)}
    </>
  }
}

class TitlePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      score: 0,
      titleText: "Welcome to the Lab 6 Quiz!",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(correct){
    console.log("Button Pressed")
    if(correct){
      this.setState({score: this.state.score + 1})
    }
    if(this.state.currentQuestion == questions.length - 1){
      console.log("DONEEE")
    }
    else{
      clearInterval(this.timer)
      console.log(this.state.currentQuestion)
      this.setState({
        titleText: "You answered X",
        currentState: QUESTION_STATE,
        currentQuestion: this.state.currentQuestion + 1
      })
    }
  }
  countdown(){
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit){
      this.setState({
        titleText: "Let's go, ladies",
        counter: this.state.counter + 1
      })
    } 
    else {
      this.setState({
        titleText: "BEGINNING LAB 6 QUIZ",
        currentState: QUESTION_STATE,
        counter: 0
      })
      if(this.state.currentState == TITLE_STATE){
        this.timer = setInterval(() => this.countdown(), 1000)
        clearInterval(this.timer)
      }
      else{
        this.setState({titleText:"You answered!"})
      }  
    }
  }
  start(){
    console.log("Get Ready!")
    this.setState({titleText:"Quiz is starting, get ready!", counter:0})
    this.timer = setInterval(() => this.countdown(), 1000)
  }
  render(){
    return(
      <>
      <p>{this.timeLimit - this.state.counter}</p>
      {((this.state.currentState === TITLE_STATE) ?
      <>
      <h2>{this.state.titleText}</h2>
      <input className="start" type="button" value="start" onclick={()=>this.start()} />
      </>
      :
      <QuizQuestion answer = {questions[this.state.currentQuestion].possibleAnswers} question = {
        questions[this.state.currentQuestion].question} nextQuestion = {(correct) => this.nextQuestion(correct)}></QuizQuestion>)}
      <p>Score: {this.state.score}</p>
      </>)
}
}


function App() {
  return (
    <div className = "App">
      <TitlePage></TitlePage>
    </div>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ED1FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: '20px',
    color: '#BF4061',
  },
});