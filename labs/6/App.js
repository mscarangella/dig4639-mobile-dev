import React from 'react';
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
}; */


//Above is the converted default code ^^^^^

const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2
const TIME_LIMIT = 5

class QuizQuestion extends React.Component{
  render(){
    return <View>
    <Text style={styles.title}>{this.props.question}</Text>
    {this.props.answer.map((v, i) =>
    <input className="answerButton" onPress={() => this.props.nextQuestion(v.correct)} type="button" key={i}
    value={v.text}/>)}
    </View>
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
      <View>
      <Text>{this.timeLimit - this.state.counter}</Text>
      {((this.state.currentState === TITLE_STATE) ?
      <>
      <Text>{this.state.titleText}</Text>
      <input className="start" type="button" value="start" onPress={()=>this.start()} />
      </>
      :
      <QuizQuestion answer = {questions[this.state.currentQuestion].possibleAnswers} question = {
        questions[this.state.currentQuestion].question} nextQuestion = {(correct) => this.nextQuestion(correct)}></QuizQuestion>)}
      <Text>Score: {this.state.score}</Text>
      </View>)
}
}


class App extends React.Component {
  render(){
    return(
    <View className = "App" style={styles.container}>
      <Text><TitlePage></TitlePage></Text>
    </View>);
}
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ed1fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontFamily: 'Helvetica',
    color: '#bf4061',
  },
});