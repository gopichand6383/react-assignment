import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./components/HomeComponent";
import NavComponent from "./components/NavComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

import {BrowserRouter, Route , Switch} from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
<NavComponent/>
<div className="auth-wrapper">
  <div className="auth-inner">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginComponent} />
      <Route exact path="/register" component={RegisterComponent} />
    </Switch>
  </div>
</div>
</div>
          </BrowserRouter>
  );
}

export default App;
