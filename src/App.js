import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';
import Header from './components/layout/Header';
import Dashboard from './components/layout/Dashboard';
import PokemonDetails from './components/pokemon/PokemonDetails';

function App() {
  return (
    <Router>
      <Redirect exact from="/" to="/pokemon/" />
      <Header />
      <Switch>
        <Route exact path="/pokemon/" component={Dashboard} />
        <Route exact path="/pokemon/:pokemonIndex" component={PokemonDetails} />
      </Switch>
    </ Router>
  );
}

export default App;
