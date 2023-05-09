import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var element = React.createElement('h1',{className:'greeting'},'Hello world!');
var element2 = React.createElement('h2',{className:'greeting'},'Segundo intento');
ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(element2, document.getElementById('root'));


ReactDOM.render( <React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'));

reportWebVitals();
