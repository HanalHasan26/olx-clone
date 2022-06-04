import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Context} from './Context/Context'
import firebase from './Firebase/Config'
import Gontext from './Context/Context'
ReactDOM.render(
    <Context.Provider value={{firebase}}>
        <Gontext>
       <App />
       </Gontext>
    </Context.Provider>
, document.getElementById('root'));
