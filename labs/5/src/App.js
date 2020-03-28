import React from 'react';
import Weather from './components/Weather';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Weather />
      </div>
    );
  }
}

export default App;