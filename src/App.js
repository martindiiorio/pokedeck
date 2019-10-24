import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Dashboard from './components/layout/Dashboard';
import PokemonDetails from './components/pokemon/PokemonDetails';
import UrlNoMatch from './components/utils/UrlNoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/pokemon' />
        </Route>
        <Route exact path='/pokemon' component={Dashboard} />
        <Route
          exact
          path='/pokemon/:pokemonIndex/'
          component={PokemonDetails}
        />
        <Route component={UrlNoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
