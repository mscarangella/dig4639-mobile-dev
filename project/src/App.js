import React from 'react';
import Add from './components/Add';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import Remove from './components/Remove';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {

    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "scarangella"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });

  }

  render() {
    return (
      <div>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}</p>;
         })
       }
      </div>
    );
  }
}

export default App;