import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from './components/layout/Header';
import Dashboard from './components/layout/Dashboard';
import PokemonDetails from './components/pokemon/PokemonDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/pokemon/:pokemonIndex" component={PokemonDetails} />
      </Switch>
    </ Router>
  );
}

export default App;
