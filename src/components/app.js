import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import Home from './home';



const App = () => (
    <div className = 'container'>
        <Route path ='/' exact component = {Home} />
    </div>
);

export default App;
