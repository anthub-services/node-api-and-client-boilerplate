import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Components/Routes';
import registerServiceWorker from './registerServiceWorker';
import './Assets/Styles/Style.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
);

registerServiceWorker();
