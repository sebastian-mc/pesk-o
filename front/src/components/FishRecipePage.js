import React, {Component} from 'react';
import PropTypes from "prop-types";
import CityChooser from "./CityChooser";

class FishRecipePage extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      recetaIndex: 0
    }
  }

  render() {
    if(this.props.recetas !== undefined && this.props.recetas.length !== 0)
    {
      return (
        <div className={"col-sm-12 page recetaPage " + this.props.active}>
          <h2>{this.props.recetas[this.state.recetaIndex].nombre}</h2>
          <h6>Ingredientes:</h6>
          <ul>
            {this.props.recetas[this.state.recetaIndex].ingredientes.map((ing, i) => (
              <li>{ing}</li>
            ))}
          </ul>
          <h6>Preparacion:</h6>
          <p>{this.props.recetas[this.state.recetaIndex].preparacion}</p>
        </div>
      );
    }
    else {
      return (
        <div className={"col-sm-12 page recetaPage " + this.props.active}>
          <CityChooser/>
        </div>
      );
    }
  }
}

FishRecipePage.propTypes = {
  recetas: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired
}

export default FishRecipePage;
