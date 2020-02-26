import React from 'react';
import './App.css';
import todoList from './todolist.json';

function TodoItem(props){
  return <p className ="card" onClick={() => props.removeTask(props.id)}> {props.content}</p>
}

class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoList,
      hideCompletedItem:false,
    }
    this.currentId = 4;
  }
  addTask(e){
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      { "id": this.currentId,"content": this.refs.taskContent.value, "priority": 1, "completed": true }
    )
    this.currentId++
    this.setState({todoList})
  }
  removeTask(id){
    console.log(id)
    let todoList = this.state.todoList
    console.log(todoList)
    todoList = todoList.filter((v) => v.id !== id)
    console.log(todoList)
    this.setState({todoList})
  }
  render(){
      return(
    <>
    <input type="text" ref="taskContent" />
    <input type="button" value="Add Task" onClick={(e) => this.addTask(e)} /><br />
    <input type="checkbox" ref="hideCompletedItemCheckbox" id="hideCompletedItem" name="hideCompletedItem" value="hideCompletedItem" 
    onChange = {(e) => this.setState({hideCompletedItems: e.target.checked})} />
    <label htmlFor="hideCompletedItem"> Yeehaw</label><br></br>
    {((this.state.hideCompletedItem) ? this.state.todoList
    .filter((v) => !v.completed) : this.state.todoList)
    .map((v) => <TodoItem id ={v.id} removeTask={(id) => this.removeTask(id)} key={v.id} content={v.content}
    priority = {v.priority}
    completed = {v.completed} />)}
    </>);
  }
}

function App(props){
  return(
    <TodoList />
  )
}

export default App;
