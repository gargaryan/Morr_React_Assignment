import React from 'react'
import './App.css';
import Movies from './components/Movies';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Series from './components/Series';

function App() {
  return (
    <Router>

    <div className="App">
      <Footer/>
      <Switch>
      <Route exact  path="/"  component={Home}/>
      <Route  exact path="/movies"  component={Movies}/>
      <Route exact  path="/series"  component={Series}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
