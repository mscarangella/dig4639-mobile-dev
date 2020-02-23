import'./index.css'
import React from 'react'

class Card extends React.Component{
  constructor(props) {
      this.props = props;
      this.element = document.createElement("div");
      this.element.innerHTML = this.props.content;
      let span = document.createElement("span");
      this.element.appendChild(span);
      span.innerHTML = this.props.content;
      this.element.className = "card";
  }
render(){
  return Card
}

export default Card;