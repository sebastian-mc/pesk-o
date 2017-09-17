import React, {Component} from 'react';
import PropTypes from "prop-types";

class FishInfoPage extends Component
{
  render() {
    return (
      <div className={"col-sm-12 page infoPage " + this.props.active}>
        <p>{this.props.pez.descripcion}</p>
        <h6>Tipo:</h6>
        <p>{this.props.pez.tipo}</p>
        <h6>Estado:</h6>
        <p>{this.props.pez.estado}</p>
      </div>
    );
  }
}

FishInfoPage.propTypes = {
  pez: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
}

export default FishInfoPage;
