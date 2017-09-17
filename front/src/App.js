import React, {Component} from 'react';

import SearchBar from './components/SearchBar.js';
import FishGrid from './components/FishGrid.js';
import InfoPage from './components/InfoPage.js';

class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      peces: [
        {nombre: "Pescado1",
        descripcion: "Ipsum Eles",
        tipo: "Pescado",
        estado: "En peligro",
        urlFoto: "./assets/images/BG.jpg",
        recetas: [
          {nombre: "Receta",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"},
          {nombre: "Receta2",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"},
          {nombre: "Receta3",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"}
        ]},
        {nombre: "Pescado2",
        descripcion: "Ipsum Eles",
        tipo: "Pescado",
        estado: "En peligro",
        urlFoto: "./assets/images/BG.jpg",
        recetas: [
          {nombre: "Receta",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"},
          {nombre: "Receta2",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"},
          {nombre: "Receta3",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"}
        ]},
        {nombre: "Pescado3",
        descripcion: "Ipsum Eles",
        tipo: "Pescado",
        estado: "En peligro",
        urlFoto: "./assets/images/BG.jpg",
        recetas: [
          {nombre: "Receta",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"},
          {nombre: "Receta2",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"},
          {nombre: "Receta3",
          ingredientes: ["Uno", "Dos"],
          preparacion: "Se prepara"}
        ]},
        {nombre: "Pescado4",
        descripcion: "Ipsum Eles",
        tipo: "Pescado",
        estado: "En peligro",
        urlFoto: "./assets/images/BG.jpg",
        recetas: []},
      ],
      pez: {},
      visibleInfo: false,
      search: ""
    }
  }

  search(text) {
    this.setState({
      search: text
    });
  }

  select(fish) {
    this.setState({
      pez: fish,
      visibleInfo: true
    });
  }

  exit() {
    this.setState({
      visibleInfo: false
    });
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar search={(txt) => this.search(txt)}/>
        </div>
        <div>
          <FishGrid peces={this.state.peces.filter((p) => {
            return p.nombre.toLowerCase().startsWith(this.state.search.toLowerCase());
          }) } select={(p) => this.select(p)} />
        </div>
        <div>
          <InfoPage pez={this.state.pez}
            visibleInfo={this.state.visibleInfo}
            exit={() => this.exit()}/>
        </div>
      </div>
    );
  }
}

export default App;
