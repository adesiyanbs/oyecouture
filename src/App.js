import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/about';
import Contact from './components/contact';
import Landing from './components/landing'
import Senators from './components/senators';
import Suits from './components/suits';


function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/' component={Landing} exact></Route>
            <Route path='/about' component={About} ></Route>
            <Route path='/contact' component={Contact} ></Route>
            <Route path='/suits' component={Suits}></Route>
            <Route path='/senators' component={Senators}></Route>
        </Switch>
    </div>
  );
}

export default App;
