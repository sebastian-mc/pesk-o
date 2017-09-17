import React, {Component} from 'react';
import PropTypes from "prop-types";
import Fish from './Fish.js';

class FishGrid extends Component
{
  Select(fish) {
    this.props.select(fish);
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
      return <Fish pez= {p} select={(p) => this.Select(p)} key={i}/>;
    });
  }
}

FishGrid.propTypes = {
  peces: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired
}

export default FishGrid;
