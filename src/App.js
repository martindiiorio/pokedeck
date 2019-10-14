import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import Dashboard from './components/layout/Dashboard';
import './App.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
    </ Fragment>
  );
}

export default App;
