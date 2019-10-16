import React from 'react';
import immflyLogo from './../../assets/immfly.png';
import pokemonLogo from './../../assets/pokemon.png';

const Header = () => (
  <div className="container">
    <img src={immflyLogo} className="immflyLogo" alt="Immfly logo" />
    <img src={pokemonLogo} className="pokemonLogo" alt="Pokemon logo" />
  </div>
)

export default Header;