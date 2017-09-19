import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.js';
import FishGrid from './components/FishGrid.js';
import InfoPage from './components/InfoPage.js';

const urlBase = 'https://pesko.herokuapp.com/';
class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      peces: [],
      pez: {},
      visibleInfo: false,
      search: ""
    }
  }
  componentWillMount(){
    axios.get(urlBase+ 'api/peces').then((res)=>{

      this.setState({peces:res.data});
    })

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
            //Se podra considerar el uso de contains para mejorar la experiencia del usuario
            return p.nombre.toLowerCase().startsWith(this.state.search.toLowerCase());
          }) } select={(p) => this.select(p)} />
        </div>
        <div>
          <InfoPage pez={this.state.pez}
            visibleInfo={this.state.visibleInfo}
            exit={() => this.exit()}/>
        </div>
//Muy buen uso de diferentes componentes dentro de la página
      </div>
    );
  }
}

export default App;
