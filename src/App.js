import React from 'react';
import './App.css';
import  { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

const Hatspage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop/hats' component={Hatspage}/>
      </Switch>
    </div>
  );
}

export default App;
