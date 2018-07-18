import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddComponent from './Add';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<AddComponent />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

