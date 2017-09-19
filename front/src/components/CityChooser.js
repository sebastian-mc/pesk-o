/**
 * Created by Lady Pinzon on 17/09/2017.
 */
import React, {Component} from 'react';


class CityChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departamento: "",
      ciudad: "",
      departamentoKey: 0,
      datos: [{ciudades: []}],
      mensaje: ""
    }
  }

  componentWillMount() {
    fetch('./assets/json/ciudades.json')
    .then((res) => res.json())
    .then((data) => {
    this.setState({
      datos: data,
      departamentoKey: data[0].id
    });
  })
  }

  changeSelectionDep(id, txt) {
    this.setState({
      departamento: txt,
      departamentoKey: id
    });
  }

  changeSelectionCid(txt) {
    this.setState({
      ciudad: txt
    });
  }

  enviar() {
    this.setState({
      mensaje: "¡Gracias!"
    });
  }

  render(){
    return (
      <div id="cityChooser">
        <p>Ayudanos a detener la venta de peces en peligro</p>
        <div className="form-group">
          <label htmlFor="SelDep">Selecciona el departamento donde viste el pez en venta:</label>
          <select
            id='SelDep'
            name='Departamento'
            onChange={(event)=>this.changeSelectionDep(event.target.value, event.target.id)}
            className="form-control">
            {this.state.datos.map((opt, i) => {
              return (
                <option
                  key={i}
                  value={opt.id}>{opt.departamento}</option>
                );
              })}
            </select>
            <label htmlFor="SelCid">Selecciona la ciudad:</label>
            <select
              id='SelCid'
              name='Ciudad'
              onChange={(event)=>this.changeSelectionCid(event.target.value)}
              className="form-control">
              {this.state.datos[this.state.departamentoKey].ciudades.map((opt, i) => {
                return (
                  <option
                    key={i}
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
