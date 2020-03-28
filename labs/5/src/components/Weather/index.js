import React from "react";

class Weather extends React.Component {
  constructor(props) {
      super(props);

      this.state = {quote: ""};

  }

  render() {
      return(
          <p>{this.state.quote}</p>
      );
  }

  componentDidMount() {

      fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          this.setState({quote: data.quote});
      })
      .catch(() => console.log("Errors!"))

  }

}

export default Weather;