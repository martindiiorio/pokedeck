import React, { Component } from 'react';
import immflyLogo from './../../assets/immfly.png';
import pokemonLogo from './../../assets/pokemon.png';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <img src={immflyLogo} className="immflyLogo" alt="Immfly logo" />
        <img src={pokemonLogo} className="pokemonLogo" alt="Pokemon logo" />
      </div>
    )
  }
}
