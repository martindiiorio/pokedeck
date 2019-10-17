import React, { Component, Fragment } from 'react';
import placeholder from './../../assets/placeholder.png'
import spinner from './../../assets/spinner.gif'

export default class PokemonSprite extends Component {
  state = {
    name: this.props.name,
    isLoading: true
  }

  componentDidMount() {
    const { name } = this.props;
    const imageUrl = `http://pokestadium.com/sprites/xy/${name}.gif`;
    setInterval(() => this.setState({ isLoading: false }), 500);

    this.setState({
      name,
      imageUrl
    }) 
  } 
 
  render() {
    return (
      <Fragment>
        {this.state.isLoading ? (
            <img className="spinner" src={spinner} alt="Loading" />
          ) : (
            <img
              src={this.state.imageUrl} 
              alt={this.state.name + 'image'} 
              onError={(e)=>{e.target.src=placeholder}}
            /> 
        )} 
      </Fragment>
    )
  }
}