import React from 'react';
import Card from './components/Card';

  class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {content:"", list: []}
    }
    async getServerData(){
      await fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    }
    componentDidMount(){
      console.log("Component did mount!")
      this.getServerData()
    }
    render(){
      return(
        <Card />
      )
    }
    }

    export default App;