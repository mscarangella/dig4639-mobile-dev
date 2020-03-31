import React from 'react';
import Card from './components/Card';

  class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {content:"", list: []}
    }
    async getServerData(){
      const response = await fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
      console.log("Here's the weather!")
      console.log(response)
      let obj = await response.json()
      console.log("Processed weather as JSON: ", obj)
      this.setState({content:obj.b})
      this.setState({list:obj.list})
    }
    componentDidMount(){
      console.log("Component did mount!")
      this.getServerData()
    }
    render(){
      return(
        <div>
          <p>{this.state.content}</p>
          {this.state.list.map((listObject, index) =>
          <Card key={index} title={listObject.title}>{listObject.content}</Card>)}
        </div>
      )
    }
    }

    export default App;