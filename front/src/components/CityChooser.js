/**
 * Created by Lady Pinzon on 17/09/2017.
 */
import React, {Component} from 'react';


class CityChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departamento: "",
      mensaje: ""
      }
    }

  changeSelection(txt) {
    this.setState({
      departamento: txt
    });
  }

  enviar() {
    this.setState({
      mensaje: "¡Gracias!"
    });
  }

  render(){
    const options = ["apple", "mango", "grapes", "melon", "strawberry"];

    return (
      <div id="cityChooser">
        <p>Ayudanos a detener la venta de peces en peligro</p>
        <div className="form-group">
          <label htmlFor="SelDep">Selecciona el departamento donde viste el pez en venta:</label>
          <select
            id='SelDep'
            name='Departamento'
            onChange={(event)=>this.changeSelection(event.target.value)}
            className="form-control">
            {options.map(opt => {
              return (
                <option
                  key={opt}
                  value={opt}>{opt}</option>
                );
              })}
            </select>
            <button onClick={() => this.enviar()} type="button" className="btn btn-primary">Enviar</button>
          </div>
          <h2>{this.state.mensaje}</h2>
      </div>
    )}
}
export default CityChooser;
