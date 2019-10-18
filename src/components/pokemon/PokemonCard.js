import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PokemonSprite from './PokemonSprite';

export default class PokemonCard extends Component {
  state = {
    name: '',
    pokemonIndex: ''
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length -2];

    this.setState({ name, pokemonIndex });
  }

  render() {
    return (
      <Fragment>
        <Link className="pokemon" to={`/pokemon/${this.state.name}/`}>
          <div className="pokemon-container">
            <div className="pokemon-header">
              <PokemonSprite name={this.props.name} />
            </div>
            <div className="pokemon-body">
                <h1>
                  {this.state.name
                    .toLowerCase()
                    .split(' ')
                    .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                    .join(' ')
                  }
                </h1>
            </div>
          </div>
        </Link>
      </Fragment>
    )
  }
}