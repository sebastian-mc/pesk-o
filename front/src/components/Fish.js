import React, {Component} from 'react';
import PropTypes from "prop-types";

import './css/FishStyle.css';

class Fish extends Component
{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="FishCard col-md-4 col-sm-6 col-xs-12">
        <div className="content">
          <div className="image">
            <img src={this.props.pez.image} alt={"Imagen de " + this.props.pez.name}/>
          </div>
          <div className="name">
            <h2>{this.props.pez.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

Fish.propTypes = {
  pez: PropTypes.object.isRequired
}

export default Fish;
