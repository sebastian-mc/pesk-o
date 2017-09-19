import React, {Component} from 'react';
import PropTypes from "prop-types";
import CityChooser from "./CityChooser.js";

class FishRecipePage extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      recetaIndex: 0
    }
  }

  prevRecipe() {
    var newIndex = this.state.recetaIndex;
    newIndex--;
    if(newIndex < 0)
    {
      newIndex = this.props.recetas.length - 1;
    }
    this.setState({
      recetaIndex: newIndex
    });
  }

  nextRecipe() {
    var newIndex = this.state.recetaIndex;
    newIndex++;
    if(newIndex >= this.props.recetas.length)
    {
      newIndex = 0;
    }
    this.setState({
      recetaIndex: newIndex
    });
  }

  render() {
    if(this.props.recetas !== undefined && this.props.recetas.length !== 0)
    {
      return (
        <div className={"col-sm-12 page recetaPage " + this.props.active}>
          <div className="nav">
            <img onClick={() => this.prevRecipe()} src="./assets/icons/back.svg" alt="Atras"/>
            <img onClick={() => this.nextRecipe()} src="./assets/icons/next.svg" alt="Siguiente"/>
          </div>
    //Algunas recetas (como una del Arothron Nigropunctatus) no tienen definida esta propiedad por lo que se cuelga la aplicación al abrir las recetas
          <h2>{this.props.recetas[this.state.recetaIndex].nombre}</h2>
          <h6>Ingredientes:</h6>
          <ul>
            {this.props.recetas[this.state.recetaIndex].ingredientes.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h6>Preparacion:</h6>
          <ol>
            {this.props.recetas[this.state.recetaIndex].preparacion.map((prep, i) => (
              <li key={i}>{prep}</li>
            ))}
          </ol>
        </div>
      );
    }
    else {
      return (
        //Esto puede ser confuso en aglunas ocaciones ya que el tab tiene como titulo "Recetas"
        <div className={"col-sm-12 page recetaPage " + this.props.active}>
          <CityChooser pez={this.props.pez}/>
        </div>
      );
    }
  }
}

FishRecipePage.propTypes = {
  recetas: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  pez: PropTypes.object.isRequired
}

export default FishRecipePage;
