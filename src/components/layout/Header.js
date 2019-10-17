import React from 'react';
import immflyLogo from './../../assets/immfly.png';
import pokemonLogo from './../../assets/pokemon.png';

const Header = () => (
  <div className="content-container">
    <div className="content-grid">
      <div className="immflyLogo">
        <img src={immflyLogo} alt="Immfly logo" />
      </div>
      <div className="pokemonLogo">
        <img src={pokemonLogo} alt="Pokemon logo" />
      </div>
    </div>
  </div>
)

export default Header;