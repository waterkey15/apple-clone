import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Card from './components/Card';
import Mac from './components/Mac';
import Iphone from './components/Iphone';
import Subtotal from './components/Subtotal';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/subtotal">
        <Header/> 
        <Subtotal/>
      </Route>
      <Route path="/iphone">
        <Header/> 
        <Iphone/> 
      </Route>
      <Route path="/mac">
        <Header/>  
        <Mac/>
      </Route>
      <Route path="/">
          <div className="App">
            <Header/>  
            <Body/>    
          </div>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
