import './labs/4/components/Card/index.css'
import React from 'react';

class Card extends React.Component{
  render(){
    return <div class="card"><h1>{this.props.content}</h1></div>;
  }
}
export default Card;