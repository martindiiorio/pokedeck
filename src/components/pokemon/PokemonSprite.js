import React, { Component } from 'react';

export default class PokemonSprite extends Component {
  state = {
    name: this.props.name,
    imageUrl: this.props.name
  }

  componentDidMount() {
    const { name } = this.props;
    const imageUrl = `http://pokestadium.com/sprites/xy/${name}.gif`;

    this.setState({
      name,
      imageUrl
    }) 
  } 
 
  render() {
    return <img src={this.state.imageUrl} alt={this.state.name + 'image'} />
  }
}