import'./index.css'
import React from 'react';


class Card extends React.Component{
  //constructor(props) {
     // this.props = props;
  //}
  render(){
    return <div class="card"><h1>{this.props.content}</h1></div>;
  }
}

export default Card;