import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './../layout/Header';
import Dashboard from './../layout/Dashboard';
import PokemonDetails from './../pokemon/PokemonDetails';
import UrlNoMatch from './../routes/UrlNoMatch';

const Routes = () => (
  <Router>
    <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/pokemon" />
        </Route>
        <Route exact path="/pokemon" component={Dashboard} />
        <Route exact path="/pokemon/:pokemonIndex/" component={PokemonDetails} />
        <Route component={UrlNoMatch} />
      </Switch>
  </ Router>
)

export default Routes;