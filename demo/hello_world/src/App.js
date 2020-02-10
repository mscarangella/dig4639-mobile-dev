import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props){
console.log(props);
return <p>My name is {props.name}</p>
}
class App extends React.Component {
  clickHandler(){
    alert("THERE'S A SNAKE IN MY BOOT");
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div onClick ={this.clickHandler}>
        <img src="https://img.favpng.com/21/6/25/sheriff-woody-toy-story-buzz-lightyear-tom-hanks-image-png-favpng-ChddNKk1ZutJTC0zpGUUgTqix.jpg" className="App-logo" alt="logo" />
        <img src="https://img.favpng.com/21/6/25/sheriff-woody-toy-story-buzz-lightyear-tom-hanks-image-png-favpng-ChddNKk1ZutJTC0zpGUUgTqix.jpg" className="App-logo" alt="logo" />
        </div>
        <p>
          Can I get a yEEHAWWWW
        </p>
        <NameBadge name="Sheriff WOody" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
