import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Views/Site/Home';
import registerServiceWorker from './registerServiceWorker';
import './Assets/Styles/Style.css';

ReactDOM.render(<Home />, document.getElementById('app'));

registerServiceWorker();
