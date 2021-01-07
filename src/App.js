import React from 'react'
import { Switch, Route} from 'react-router-dom'
import About from './components/about';
import Agbadas from './components/agbada';
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
            <Route path='/agbada' component={Agbadas}></Route>
        </Switch>
    </div>
  );
}

export default App;
