import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { ReactComponent as Close } from './../../assets/close.svg'
import placeholder from './../../assets/placeholder.png'

export default class PokemonDetails extends Component {
  state = {
    pokemonIndex: '',
    pokemonImg: '',
    name: '',
    type: [],
    height: '',
    abilities: []
  }

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    // Pokemon Url by id
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    
    // Get Pokemon Details
    const pokemonRes = await axios.get(pokemonUrl);
    
    // Store values details 
    const name = pokemonRes.data.name,
          id = pokemonRes.data.id,
          pokemonImg = `http://pokestadium.com/sprites/xy/${name}.gif`,
          types = pokemonRes.data.types.map(types => types.type.name).join(' - '),
          height = pokemonRes.data.height * 10 + 'cm',
          abilities = pokemonRes.data.abilities
      .map(abilities => {
        return (
          <li key={abilities.ability.name}>
            {abilities.ability.name.charAt(0).toUpperCase() + abilities.ability.name.slice(1)}
          </li>
        )
      });

    this.setState({ pokemonImg, id, name, types, height, abilities })  
  }
  // Adding placeholder image for those pokemon images that returns 404 
  onError = (e) =>{ e.target.src = placeholder }

  render() {
    const { pokemonImg, id, name, types, height, abilities } = this.state;
    
    return (
      <div className="pokemon-details">
        <div className="pokemon-details-header">
        <Link className="close" to="/pokemon">
          <Close />
        </Link>
          <img src={pokemonImg} alt={name} onError={this.onError} />
          <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        </div>
        <div className="pokemon-details-body">
          <h1>ID: {id}</h1>
          <h1>Type: {types}</h1>
          <h1>Height: {height}</h1>
          Abilities: <ul>{abilities}</ul>
        </div>
      </div>
    )
  }
}
