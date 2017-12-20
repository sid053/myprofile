import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import App from './App';
import Home from './component/homepage';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
            <div>

                <Route exact path="/" component={Home}/>

            </div>
    </Router>
        , document.getElementById('root'));
registerServiceWorker();
