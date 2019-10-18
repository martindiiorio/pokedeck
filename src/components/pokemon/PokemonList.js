import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Header from './../layout/Header';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',
    pokemon: null
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  } 

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.pokemon ? (
          <div className="content-container">
            <div className="content-grid">
              {this.state.pokemon.map(pokemon => (
                <PokemonCard  
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </div>
          </div>
        ) : (
          null
        )}
      </Fragment> 
    )
  }
}