import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App.js';
import Support from './pages/Support';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/support/" component={Support} />
        </div>
    </BrowserRouter>, document.getElementById('root')
);