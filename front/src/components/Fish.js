import React, {Component} from 'react';
import PropTypes from "prop-types";

import './css/FishStyle.css';

class Fish extends Component
{
  constructor(props) {
    super(props);
    this.SelectFish = this.SelectFish.bind(this);
  }

  SelectFish() {
    this.props.select(this.props.pez);
  }

  render() {
    return (
      <div className="FishCard col-md-4 col-sm-6 col-xs-12">
        <div className="content" onClick={(p) => this.SelectFish()}>
          <div className="image">
            <img src={this.props.pez.urlFoto} alt={"Imagen de " + this.props.pez.nombre}/>
          </div>
          <div className="name">
            <h2>{this.props.pez.nombre}</h2>
          </div>
        </div>
      </div>
    );
  }
}

Fish.propTypes = {
  pez: PropTypes.object.isRequired,
  select: PropTypes.func.isRequired
}

export default Fish;
