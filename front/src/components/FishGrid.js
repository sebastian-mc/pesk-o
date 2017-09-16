import React, {Component} from 'react';
import PropTypes from "prop-types";
import Fish from './Fish.js';

import './css/FishGridStyle.css';

class FishGrid extends Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="FishGrid" className="container-fluid">
        <div className="row">
          {this.props.peces ? this.renderFish() : "Cargando..."}
        </div>
      </div>
    );
  }

  renderFish() {
    return this.props.peces.map((p, i) => {
      return <Fish pez= {p} key={i}/>;
    });
  }
}

FishGrid.propTypes = {
  peces: PropTypes.array.isRequired
}

export default FishGrid;
