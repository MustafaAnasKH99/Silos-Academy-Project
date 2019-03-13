import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cms from './components/cms.js'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

fetch('//http://localhost:8080/users/')
  .then( response => response.text())
  .then( text => console.log(text))


const routing = (
    <div>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/cms" component={Cms} />
            </div>
        </Router>
    </div>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
