import React, { Component } from 'react'

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: ''
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length -2];
    const imageUrl = `http://pokestadium.com/sprites/xy/${name}.gif`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex
    })
  }

  render() {

    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <img src={this.state.imageUrl} alt={this.state.name + 'image'} />
          </div>
          <div className="card-body">
            <h1>{this.state.name}</h1>
          </div>
        </div>
      </div>
    )
  }
}