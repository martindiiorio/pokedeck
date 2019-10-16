import React, { Component, Fragment } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';
import spinner from './../../assets/spinner.gif'

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',
    pokemon: null
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] })
  } 

  render() {
    return (
      <Fragment>
        {this.state.pokemon ? (
          <div>
            {this.state.pokemon.map(pokemon => (
              <PokemonCard  
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <img src={spinner} alt="Loading"/>
        )}
      </Fragment> 
    )
  }
}