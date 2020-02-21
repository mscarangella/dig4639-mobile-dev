import React from 'react';
import ReactDOM from 'react-dom';
import './components/Card/index.css';
import App from './App';
import Card from './components/Card/index.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
render(<Card content="This is a card!"></Card>);

serviceWorker.unregister();
